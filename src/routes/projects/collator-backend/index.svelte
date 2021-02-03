<script>
    export let tag_list = ['javascript', 'node', 'express', 'cheerio', 'mongodb']
</script>


<main class="container m-1 flex flex-col flex-wrap mx-auto">
    
    <div>
        <h1 class="text-4xl md:text-8xl m-5 font-bold mt-0 text-gray-800">
            <a href="/projects" class="text-2xl underline">Projects/</a>Collatenator Backend</h1>
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

    <div id="content" class="lg:max-w-5xl lg:mx-auto text-lg m-5 flex-wrap  justify-center items-cente">
        
        <div class="flex justify-end">
            <h5>August 2020</h5>
        </div>

        <div class="flex flex-wrap justify-end my-10 text-right text-gray-500">
            <img src="https://small-bizsense.com/wp-content/uploads/2019/11/web-scrapping-technique.jpg" alt="">
            <p>Data scraping for a structured database and making an API from it</p>
        </div>
        
        <h1>Project Intro</h1>

        <p>
            In the vain of stepping away from Python, I wanted to get a feel for creating an accesible API from data scraped 
            off of various sources. This database and corresponding API would form the basis for a one stop shop of the day-to-day data 
            that I was interested in. 
        </p>

        <p>
           
        </p>

        <p>
            The aim for this backend was to make a frontend agnostic REST API that provided a simple interface for scraping parameterised 
            queries from a selection of websites. This would also store the data into a database where the history of what has been displayed 
            can be viewed at a later date.  
        </p>

        <div class="flex flex-wrap justify-end my-10 text-right text-gray-500">
            <img src="/images/projects/image.png" alt="">
            <p>Vue frontend desktop homescreen displaying the most recently top liked posts</p>
        </div>
        
        <h1>Motivation</h1>

        <p>
            Previously having made small REST APIs in Python and Flask, it was interesting to get into the Javascript/Node ecosystem for 
            backend systems. While Express isn't exactly the best in any one category, it is a fairly straight forward web framework that
            doesn't require much work to get up and running.  
        </p>

        <hr>
        <br><br>
        <h1>Project Overview</h1>

        <p>
            Backend: Node & Express (see other post) <br>
            Database: MongoDB (interfaced with Mongoose) <br>
            Frontend: Vue (2) & Custom CSS <br>
        </p>

        <p> 
           This backend currently supports scraping from 4 different sources, including BOM weather data, Reddid subreddit posts, ABC news nad Woolworths
           groceries data. It stores each data type into a single mongodb collection. 
        </p>
        <p>
           

        </p>

        <p>
          
        </p>
       
        Current features:
        <ul>
            <li>
                Responsive desktop and mobile UI
            </li>
            <li>
                Modular Vue components for displaying dashboard tiles
            </li>
            <li>
                Groceries display
            </li>
            <li>
                User configurable layout
            </li>
        </ul>

        <p>

        </p>

        <hr>
        <br><br>
        <h1>Deployment</h1>

        <p>
            I deployed this Express app onto Heroku, much like many of my other projects. Deploying a simple Express
            API with Heroku couldn't be any easier as it is basically one button press. Due to it being on the free 
            tier however, the container does get put to sleep pretty quickly - meaning quite often the backend has to 
            have a cold start back up and can take a while to load. 
        </p>

        <hr>
        <br><br>
        <h1 class="text-4xl md:text-6xl">Future and Improvements</h1>
        <p>
            Biggest improvement for this project would be intergrating some authentication and user preferences logging. 
            This would allow different users to login and setup the dashboard with the data they are interested in. Additionally
            some improvements to the retrieval of data could be done - providing some nicer queries for the data.
        </p>

    </div>

    </div>

</main>