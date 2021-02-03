<script>
    export let tag_list = ['python', 'flask', 'postgres', 'bootstrap', 'flask-forms', 'sql-alchemy']
</script>


<main class="container flex flex-wrap flex-col">
    <div>
        <h1 class="text-5xl md:text-8xl m-5 font-bold mt-0 text-gray-800">
            <a href="/projects" class="text-2xl underline">Projects/</a>DataBook</h1>
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
            <h5>September 2020</h5>
        </div>

        <!-- Header image -->
        <div class="flex flex-wrap justify-end my-5 text-right text-gray-500 px-3">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Flask_logo.svg/1200px-Flask_logo.svg.png" alt="">
            <p>The "lightweight" option for Python web development</p>
        </div>
        
        <!-- Link to deployed live version -->
        <div class="flex flex-wrap justify-center" style="width:100%;">
            <a href="http://databook-live.herokuapp.com/">
                <button class="md:text-xl bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full m-2">
                    Deployed Here!</button>
            </a>
        </div>

        <!-- Project write up conent -->

        <h1>Project Intro</h1>

        <p>
            This project started as a deep dive into some more intermediate functionality of Flask. Previously I'd 
            used Django for all Python web stuff - but the more modular Flask approach interested me. 
        </p>

        <p>
            The aim for this project was to intergrate a relational database with a UI that allowed users to make 
            posts and interact with other users through these posts. For the backend, Flask would handle much of the heavy lifting, 
            including authentication, view routing, form handling and database interactivity. 
        </p>

        <div class="flex flex-wrap justify-end lg:my-5 text-right text-gray-500">
            <img src="/images/projects/databook-2.png" alt="">
            <p>Desktop homescreen displaying the most recently top liked posts</p>
        </div>
        
        <h1>Motivation</h1>
        <p>
            My personal aim and gain for this project was to get a handle on the micro-framework architechure of Flask. In the past
            for Python web development I had always stuck with Django - mainly due to their better first party documentation. However the 
            one downfall (if you can call it that) is Django comes shipped with a ton of features and functionality that can be quite overwhelming.
            While on the other hand Flask offers the bare essentials, which more often than not are all I need. 

        </p>

        <p>
            The other driver for wanting to check out Flask is also the addition of another tool to the belt. Flask is quite commonly used as a 
            a quick and easy way to setup a web API for consumption. Particularly for ML/AI applications. This is definitely changing throughout 2020 however,
            a notable alternative (that I need to check out) is FastAPI. 
        </p>

        <hr>
        <br><br>
        <h1>Project Overview</h1>

        <ul>
            <li>
                Backend: Flask (+ Gunicorn)
            </li>
            <li>
                Database: PostgresSQL (interfaced with ORM sql-alchemy)
            </li>
            <li>
                Frontend: Bootstrap 5 HTML templated with Jinja from Flask
            </li>
            
        </ul>

        <p> 
            In stark contrast to the direction in general web development is heading, this project was poised to be a monolith from the start. 
            Developing all of the functionality from within one Flask application. Implementing this stack in 2020 seems a little bizarre but it provided an excellent opportunity to explore and push the boundries of 
            what Flask can really do. 

        </p>
        <p>
            I would consider the project to have met the minimum viable product (not that the product is very good) criterion, not so much 
            due to the end-user functionality but moreso from a learning standpoint. More features and functionality would have just been repeating 
            and extending the features already builtin. 
        </p>
       
        <p>
            Current features:                                
        </p>
        <ul>
            <li>
                User signup, login, password reset
            </li>
            <li>
                Posts can be created, edited and update
            </li>
            <li>
                Posts can be liked and sorted on like amount and date period
            </li>
            <li>
                Comments onto posts can be made, comment replies can also be made
            </li>
            <li>
                Tags and category system
            </li>
        </ul>

        <p>


        </p>

        <hr>
        <br><br>
        <h1>Deployment</h1>

        <p>
            With the help of Heroku and the handy Github intergration, deploying Databook was extrememly straightforward 
            (for this small scale stuff anyways...). 
            Commiting to Github actions a build action which then links into the Heroku deployment and spins it up on their machines.
            Gunicorn acts as the web server gateway for Flask, with the PostgresSQL database hosted serverless-ly over on ElephantSQL. 
        </p>

        <hr>
        <br><br>
        <h1 class="text-4xl md:text-6xl">Future Improvements</h1>
        <p>
            Many improvements could be made to make this a much better "product", perhaps the bigget non end-user improvement would 
            be the implementation of tests that are ran before the build cycle commences
        </p>
        <p>
            If I were to create a similar product - I would without a doubt move away from a singular application. There are just so many more 
            quality of life and usuability improvements that could be made with a more micro-service type framework. Abstracting each significant action 
            into it's own API would provide a great development environment especially if multiple people are commiting changes. A great example, from 
            the experience in this project would be the implementation of a Like/Unlike API. Currently I tried implementing a non-view endpoint in the same
            Flask application as the overall app but this is a suitable action that could be containerised into it's own app. This approach would be infinitely 
            easier to scale than the one slow giant Flask application 
        </p>
    </div>

</main>