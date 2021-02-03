<script>
    export let tag_list = ['node', 'express', 'svelte']
</script>

<main class="container flex flex-wrap flex-col">
    <div>
        <h1 class="text-5xl md:text-8xl m-5 font-bold mt-0 text-gray-800">
            <a href="/projects" class="text-2xl underline">Projects/</a>JWT Auth App</h1>
    </div>
    <div id="pills" class="mx-auto">
        <div class="py-1 pl-8 pr-10" style="">
            <div class="flex flex-wrap">
                {#each tag_list as tag}
                    <span class="bg-gray-600 uppercase tracking-wide text-xs text-white rounded-full px-4 m-1">
                        {tag}
                    </span>
                {/each}
            </div>
    </div>

    <div id="content" class="lg:max-w-5xl lg:mx-auto flex flex-wrap text-lg m-5 px-justify-center items-center">
        
        <!-- Project Date -->
        <div class="ml-auto justify-end">
            <h5>January 2021</h5>
        </div>

        <!-- Header image -->
        <div class="flex flex-wrap justify-end my-5 text-right text-gray-500 px-3">
            <img src="https://cdn.auth0.com/blog/jwtc/jwt_05.jpg" alt="">
            <p>The modern method of verifying information from sources</p>
        </div>
        
        <!-- Link to deployed live version -->
        <div class="flex flex-wrap justify-center" style="width:100%;">
            <a href="http://svelte-jwt-auth-app.herokuapp.com/">
                <button class="md:text-xl bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full m-2">
                    Deployed Here!</button>
            </a>
        </div>

        <!-- Project write up conent -->

        <h1>Project Intro</h1>

        <p>
            I used this short project as a chance to check out how JSON Web Tokens can be implemented for 
            authentication purposes. The basis of the project is the stock standard Svelte/Sapper template 
            providing a basic framework and routing. I also set this project up as a SSR project - which has some
            implications for the JWT usage.
        </p>

        <p>
            The end goal for this project was to have a production-ready authentication 
            microservice (plus minus a little bit extra) backend that when pinged would provide a 
            means for creating and verifying JWTs.
        </p>

        <div class="flex flex-wrap justify-end lg:my-5 text-right text-gray-500">
            <img src="https://artsy.github.io/images/2016-10-26-jwt-artsy-journey/jwt-example.png" alt="">
            <p>The structure of a JSON web token in both the encoded and decoded forms.</p>
        </div>
        
        <h1>Motivation</h1>
        <p>
            In the pursuit of learning more about modern web application development and the need for 
            decentralised techniques I need to learn about implementing JSON web tokens. The benefit of
            JWTs is that they are completely self contained - removing the need for a central truth database 
            used to store user sessions in a typical multi-processed monolith structure. JWTs allow an array
            of microservices to all independently verify a users session. This has huge implications for creating
            extremely scalable web applications.
        </p>

        <hr>
        <br><br>
        <h1>Project Overview</h1>

        For this project I did minimal work on the frontend, it was more a case of 
        doing just enough to produce a MVP.

        <ul>
            <li>
                Backend: Express server
            </li>
            <li>
                Database: MongoDB (interfaced with ORM Mongoose)
            </li>
            <li>
                Frontend: Svelte and Sapper, no CSS library
            </li>
            
        </ul>

        <p> 
            Managing state with Svelte and Sapper is incredibly easy, instead of
            relying on complicated state-management packages like other Javascript 
            frameworks, Svelte and Sapper make it incredibly straightforward. It 
            is quite enjoyable in comparison.
        </p>

        <p>
           
        </p>
       <br>
        <p>
            Current features:                                
        </p>
        <ul>
            <li>
                User signup and login
            </li>
            <li>
                Store JWT as secure cookie 🍪
            </li>
            <li>
                Update UI based on logged in state
            </li>
            <li>
                Make, edit, delete, comment and reply on posts
            </li>
        </ul>
    
        <p>
        </p>

        <hr>
        <br><br>
        <h1>Deployment</h1>

        <p>
            If you've read my other project posts, you might see a trend. Heroku's deploy from 
            Github functionality is soo good that I can't stop using it. Which is exactly what I've done for this 
            project. It was slightly different as I had to build the SSR app first then deploy the 
            result - but still very much straight forward.
        </p>

        <hr>
        <br><br>
        <h1 class="text-4xl md:text-6xl">Future Improvements</h1>
        <p>
            Future improvements for this project could be quite a long list - but really wouldn't meet the
            aim of this project. Pertaining to the use of the JWT, I am sure there is slight improvements that 
            I could make, such as including state information within the token, including a better refresh token 
            mechanism and also considering a logout on all devices functionality (blacklist database). 
            
            I think for future projects, JWT will be a go-to for me.

            I will write more here if I can get the time to, I would like to put some code snips in (K.S 25-01-21)
        </p>
        <p>
        </p>
    </div>

</main>