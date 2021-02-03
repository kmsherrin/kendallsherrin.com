---
title: Contact Form Microservice
date: 2020-12-12T12:51:00.000Z
---

A static website doesn't have to skip on any capabilities - leveraging APIs and microservices to supercharge the experience. For the JAM stack websites I deploy I needed to create a simple API for the contact forms - this service is even used for the contact form on this website.

<!-- more -->

# JAM Stack Introduction
JAM Stack websites are a modern, somewhat neo-retro, approach to builing web applications. Back are the static sites of old but are now strongly intergrated with modern techniques. 

![JAM Stack overview from cloudinary.com](https://res.cloudinary.com/cloudinary-marketing/image/upload/v1/Web_Assets/blog/JAMstack-Delivers-v1.png)

JAM stands for Javascript, API and Markup - representing the paradigm of deploying highly performant static sites that are empowered by Javascript and made reactive with communication to APIs. There is an excellent primer on the premise behind JAM stack available on [jamstack.wtf](https://www.jamstack.wtf) - providing some great information on the topic. 

There are many fantastic use cases for JAM stack applications, in my opinion - this will completely replace any (new) kind of Wordpress of site in the next 5 years. 


# Contact Form Micro Service

So, the websites I have been producing lately are all following a JAM stack convention, which is amazing for performance and deployments costs (define: free). However, the biggest downside, is that on their own these applications are nothing more than a fancy browser based magazine. 

This is where Javascript and APIs come into the fray - introducing functionality to the web application. In this case, allowing a user to complete a contact form which is then sent off and received by the appropriate person.



## Tech stack

### Specification
This microservice will be the epitome of the absolute bare minimum to complete the required task. It will be built using Express and expose a POST endpoint where by a name, email and message can be delivered to. Express will then take this info and forward it on to the contact person - if successful it will send a response to the initial request with a status of 201. 

### Design Considerations
Perhaps the biggest design consideration will have to be a way to minimise the abuse of the system, I do not want to have this service hidden by an authentication wall - as it will be typically used in cases where auth isn't necessary. I also do not want to implement any kind of captcha, I was the system to be as painless as possible to minimise the bounce rate. (also yes, I know the newest captchas are pretty seamless)


## Implementation

The basis of this microservice is a simple Express application setup to recieve a POST request on /message. On this route Express expects a JSON payload containing 3 attributes, name, email and a message.

### Overview Flow of Logic
1. Frontend sends request to /message with {name: 'lorem', email: 'lorem', message: 'ipsum'}
2. Express receives request, validates length of name and message, checks email is actually a valid email address. If validation fails - sends a 422 status code back.
3. The data is extracted from the request.
4. Data passed to send email function which initiates an email sending object.
5. Constructs the email, sends the email to contact person. If successful, resolves promise.
6. Upon promise completion Express sends a response with a status 201 and success in JSON data.

### Code

#### 1. Frontend Request

Here the static website make a request to the Express app with fetch in Javascript. Important bits here are that the request body contains the form data in JSON format as well as including the Content Type and Accept headers - necessary for receiving the Express response.

```javascript
fetch('https://express-app-url/messages, {
      method: 'POST',
      body: JSON.stringify(form_data),
      headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'},
  })
```

#### 2. Express Receives Request

As the frontend request comes through Express validates the payload, ensuring the name and message field contains an entry and the email is actually valid. In the case that any of the fields do not meet the server validation criteria, a response is returned with a 422 status (unprocessable entity) along with data containing the exact errors. With this information the frontend can communicate to the user what was incorrect. 

```javascript
app.post('/message', [
    check('name').isLength({min: 3}),
    check('email').isEmail(),
    check('message').isLength({min: 10})
    ], 
    (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() })
    }

  ...
```

#### 3. Data is Extracted

This is an extremely straight forward step in the logic, but the data from the request is kept in variables by referencing the body of the request.

```javascript
const name = req.body.name;
const email = req.body.email;
const message = req.body.message;
```

#### 4. Pass data to Send Email function

Here the data is passed into a function which once completed returns a promise. This first half of this function creates the nodemailer transport object, which is set up to match and authenticate with the email service you are intending to use. In this instance, I have it running through a gmail account. Super tip, remember to keep the password stored as an environment variable so that it is not accidently commited to a public repository.

```javascript
function send_email (name, email, message) {
    return new Promise((resolve, reject) => {
        let mail = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.gmail_email,
                pass: process.env.password
            }
        });
  ...
```

#### 5. Construct the Email and Send

Following on from the previous step the email object is created, incorporating the data passed in as function parameters. Again I have used environment variables which give flexibility in changing the contact email address easily in the future. I should also note in this section of code that a HTML key can be specified in the mail options object, which allows nicer HTML formatting instead of plain text.


#### 6. Resolve Promise on Mail Send

The second half of this code block is the actual email sending, which if gets sent successfully resolves the promise. If the email fails to send (server error), the promise results in rejection, with the error passed through.

```javascript
var mailOptions = {
  from: process.env.gmail_email,
  to: process.env.contact_email,
  subject: 'Website Enquiry',
  text: `This is an enquiry made on the website
  Name: ${name}
  Email: ${email}
  Message: ${message}
  `
};

mail.sendMail(mailOptions, (error, info) => {
  if (error) {
      console.log(error);
      reject(error);
  } else {
      console.log('Email sent: ' + info.response);
      resolve('email sent');
  }
})


```


## In Closing

While this is not the most complex system to be ever created, it fits nicely in what the definition of a microservice aims to be. The simplicity of this Express app allows me to intergrate this easily into new applications or extend the functionality to fit project specifications. 

I didn't go into depth on how I managed the potential for the API to be abused, however, I did implement a neat package called express-rate-limit. The package allows the application to cap the number of requests one user can make in a given time period. I have set this on the more extreme side, as to eliminate the potential for spammers. 