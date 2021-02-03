<script>
    export let tag_list = ['javascript', 'svelte', 'sapper']
</script>


<main class="container m-1 flex flex-col flex-wrap mx-auto">
    
    <div>
        <h1 class="text-5xl md:text-8xl m-5 font-bold mt-0 text-gray-800">
            <a href="/projects" class="text-2xl underline">Projects/</a>Personal Website</h1>
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
            <h5>November 2020</h5>
        </div>

        <div class="flex flex-wrap justify-end my-10 text-right text-gray-500">
            <img src="https://miro.medium.com/max/1000/1*dvszV2jKE6yX9Fk0WNRhHw.png" alt="">
            <p>Static site generation power couple</p>
        </div>
        
        <h1>Project Intro</h1>

        <p>
            I needed a personal website and I wanted it to be ultra lightweight so it costs nothing
            to host. It took me a while to settle on a static site generator that I was happy with and
            provided the features I was after. This site was initially going to be ran on Vue, but after reading some
            interesting articles on Svelte, I decided to take the plunge. 
        </p>

        <p>
            The aim for this project was to provide a simple static site framework that exported to 
            a tiny file size, but also had the capability to produce blog-style pages from markdown files. 
        </p>


        <div class="flex flex-wrap justify-end my-10 text-right text-gray-500">
            <img src="/images/projects/website_screencap.png" alt="">
            <p>The landing page that you likely saw when you arrived</p>
        </div>
        
        <h1>Motivation</h1>
        <p>
            I wanted to make a static website that was fairly lightweight and could be deployed for free on an Amazon S3 bucket. I also needed the site
            to be able to generate content from markdown files, which I would aim to have as sort of reference articles (for my own information) as well as 
            blog style posts.  

        </p>
        <p>
            My existing skills could have implemented a straightforward static site from Markdown using Pelican in Python - which I had done a very 
            long time ago - but I wanted to learn some new tricks from this project. This requirement led me down the path of investigation static site 
            generators in the Javascript ecosystem, most notably Next.JS. I thought this could finally be the project where I really sink some time into 
            React, which definitely wouldn't have been a bad thing... However research into more static site generators pointed me into Svelte territory
            and the benefits of Sapper. A few articles highlighted the tiny export size of sites generated from Sapper, especially into comparison with 
            more common SSG. 
        </p>

        <hr>
        <br><br>
        <h1>Project Overview</h1>

        <p>
            Backend: None 😊<br>
            Database: None <br>
            Frontend: Svelte & Sapper <br>
        </p>

        <p> 
            
        </p>
        <p>
            
        </p>
       
        Current features:
        <ul>
            <li>
                Static site hosted on Amazon S3 bucket
            </li>
            <li>
                Contact form with microservice
            </li>
            
        </ul>

        <p>


        </p>

        <hr>
        <br><br>
        <h1>Deployment</h1>

        <p>
            This was a little bit trickier than I thought it would be... Not so much the actual deployment of the static site to an S3 bucket
            (which is a breeze 💨) but domain and DNS configurations. Sapper supports a static site script, export, which bundles and generates all
            the static files including converting the markdown pages into HTML. This export folder can then be placed onto an S3 bucket with public
            access and configured to act as a static site 👍 - too easy.
        </p>

        <p>
            The part which was monumentally much harder was something that I had little to no experience in, domain and DNS management. I have 
            purchased this domain through namecheap, because as the name suggests they are cheap. However linking the domain to the S3 bucket 
            URL, then applying for a HTTPS certificate and enabling this functionality was incredibly frustrating. 
        </p>

        <hr>
        <br><br>
        <h1 class="text-4xl md:text-6xl">Future and Improvements</h1>
        <p>
            I will continue to add more content to this website in an attempt to bolster my online presence. The overall style and theme of the site
            is not set in stone either - I'm just not set on a clear direction.
        </p>

        <p>
            Technical aspects of the site which can improve is perhaps the compression of files, I will be looking into the delivery of compressed JS 
            and CSS files from the S3 for faster loading. Along with this, a consideration to put the site into a true CDN is an option. This could 
            potentially increase site access speeds dramatically - depending on where you, the reader, is accessing from.
        </p>
    </div>

</main>