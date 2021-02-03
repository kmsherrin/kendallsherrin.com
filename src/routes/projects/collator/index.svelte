<script>
    export let tag_list = ['javascript', 'vue']
</script>


<main class="container m-1 flex flex-col flex-wrap mx-auto">
    
    <div>
        <h1 class="text-4xl md:text-8xl m-5 font-bold mt-0 text-gray-800">
            <a href="/projects" class="text-2xl underline">Projects/</a>Collatenator Frontend</h1>
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

    <div id="content" class="lg:max-w-5xl lg:mx-auto text-lg m-5 flex-wrap  justify-center items-center">
        
        <!-- Project Date -->
        <div class="flex justify-end">
            <h5>August 2020</h5>
        </div>

        <!-- Header image -->
        <div class="flex flex-wrap justify-end my-10 text-right text-gray-500">
            <img src="https://miro.medium.com/max/3920/1*oZqGznbYXJfBlvGp5gQlYQ.jpeg" alt="">
            <p>The second (or third) most popular Javascript frontend framework, most Github stars though ⭐</p>
        </div>
        
        <!-- Link to deployed live version -->
        <div class="flex flex-wrap justify-center" style="width:100%;">
            <a href="https://collatenator.herokuapp.com/">
                <button class="md:text-xl bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full m-2">
                    Deployed Here!</button>
            </a>
        </div>

        <!-- Project write up content -->


        <article class="block">
            <h1>🙋‍♂️ Project Intro</h1>

            <p>
                Stepping away from Python and wanting to get into more of the modern web dev ecosystem (yay for JS...), I started 
                to take a look at the Javascript frontend frameworks, considering I already had quite a good base knowledge of Frontend
                Javascript from Python web projects.
            </p>
    
            <p>
                I had a close look at all of the popular frameworks and played around in all of their interactive editors to 
                get a feel for each. I chose to dodge Angular, primarily because of it's negative perception from the community (also see: 
                stack overflow developer survey). I wanted to go with React due to the sheer popularity above everything else - however 
                due to the more community driven development of Vue, I fell towards this. Adding to this choice, in comparison to React the 
                framework just makes more sense.
            </p>
    
            <p>
                The aim for this project was to make a one stop shop for looking at all the common websites I consume information from 
                on a daily basis. I wanted this to be a modular setup, so that I could add or remove dashboard tiles as needed. Additionally
                I also added a page for tracking grocery prices, which is helpful for things that when on special save me a good chunk of 💰
            </p>
    
            <div class="flex flex-wrap justify-end my-10 text-right text-gray-500">
                <img src="/images/projects/image.png" alt="">
                <p>Desktop homescreen displaying the most recently top liked posts</p>
            </div>
            
            <h1>Motivation</h1>
    
            <p>
                Biggest motivator for undertaking a project like this is getting a grasp on the capabilities that a Javascript framework
                can provide. The Vue framework syntax and structuring is definitely, in my opinion, very user friendly and provides excellent feedback
                along the way. 
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
                The frontend for the Collatenator was setup to work both on desktop and mobile. I tried to optimise the desktop sizing for 2560 pixels wide 
                as that is the horizontal resolution of my monitor. 
            </p>
            <p>
                For the mobile UI I took a sort of tinder swipe approach, where each card can be swiped to the side and the next stickies itself to the center 
                of the screen. I implemented this for the vertical scrolling as well, with each of the posts for the cards. This isn't perfect however, with 
                some longer posts on Reddit not looking as great.
            </p>
    
            <p>
                Currently the project has 3 different sources available for populating dashboard tiles. This includes BOM weather data, ABC news and Reddit 
                subreddit posts. Along with the dashboard sources, I have also got an additional page for tracking specific groceries that I am
                interested, particularly when if they are on special.
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
                Deploying a small scale Vue app to Heroku is dead easy. The project code is of course hosted on Github, so one-click
                intergration to Heroku is available. As for actually serving the content when accessed a short and small Express server is 
                created. The Express server only serves the static files produced by the app build.
            </p>
    
            <hr>
            <br><br>
            <h1 class="text-4xl md:text-6xl">Future and Improvements</h1>
            <p>
                I would like to continue with this project some day to try and clean the overall UI up and make it less buggy. Optimisation 
                for other resolutions would also be nice. The project was also built upon Vue 2, it would be interesting to upgrade the Vue version
                and make use of the new composition API in Vue 3.
            </p>
    
            <p>
                Stretch goals for the project would actually include creating a landing page nad implementing some sort of user authentication
                and customisation. At the moment the project is only really setup to serve one person. 
            </p>
    

        </article>
        
    </div>

    </div>

</main>