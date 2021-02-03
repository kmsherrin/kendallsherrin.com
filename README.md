# Personal Website

I built this primarily as a portfolio page, but also wanted to include the ability for writing blog-style posts on things that I found interesting. I've used Tailwind CSS to help with styling, this was the first project I used Tailwind on and I very much liked it. I need to pull in a formatter like Headwind though to make everything consistent...

This website is built on a Svelte/Sapper framework and is exported as a statically generated website. The whole thing is hosted on an AWS S3 bucket. It is incredible performant due to this, realistically the only way I can get the content to peoples screens is by deploying the files across a CDN.


TODOs:
- Enable CDN for even faster load times
- Add Github action for automatic exports upon pushes to master branch
- Clean up the visual UI a bit more
- Introduce code formatting for TailwindCSS

A big TODO that you will notice when going to the site is that it isn't using HTTPS.. I need to figure out have to link this all up between my domain manager and the S3 bucket, it might be that I need to deliver from the CDN to accomplish this. 
