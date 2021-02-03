<script>

    export function preload({ params, query }) {
        return this.fetch("sitemap.xml");
    }
    
    import { onMount } from 'svelte';
    onMount(async () => {
        let parallaxBox = document.getElementById('home-main');
        let c1left = document.getElementById('l1').offsetLeft;
	    let c1top = document.getElementById('l1').offsetTop;
	    let c2left = document.getElementById('l2').offsetLeft;
        let c2top = document.getElementById('l2').offsetTop;
        let c3left = document.getElementById('l3').offsetLeft;
        let c3top = document.getElementById('l3').offsetTop;

        parallaxBox.onmousemove = function ( event ) {
		event = event || window.event;
		let x = event.clientX - parallaxBox.offsetLeft;
		let y = event.clientY - parallaxBox.offsetTop;
		
		mouseParallax ( 'l1', c1left, c1top, x, y, 20 );
		mouseParallax ( 'l2', c2left, c2top, x, y, 48 );
        mouseParallax ( 'l3', c3left, c3top, x, y, 68 );
	    };
    })

    function mouseParallax (id, left, top, mouseX, mouseY, speed) {
        let obj = document.getElementById (id);
        let parentObj = obj.parentNode,
        containerWidth = parseInt( parentObj.offsetWidth ),
        containerHeight = parseInt( parentObj.offsetHeight );
        obj.style.left = left - ( ( ( mouseX - ( parseInt( obj.offsetWidth ) / 2 + left ) ) / containerWidth ) * speed ) + 'px';
        obj.style.top = top - ( ( ( mouseY - ( parseInt( obj.offsetHeight ) / 2 + top ) ) / containerHeight ) * speed ) + 'px';
    }

</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&family=Poppins:wght@200;300;400;500;600;700&display=swap');
</style>

<svelte:head>
  <title>Kendall Sherrin</title>
</svelte:head>

<main id="home-main" class="items-center justify-center mx-auto" style="max-width: 1700px;">
    <div class="flex flex-col items-center">
        <div class="mx-3 lg:ml-5 lg:w-90 my-auto flex flex-col lg:mt-40 lg:grid lg:grid-cols-2 background-lines">
            <div class="flex-wrap col-span-1">
                <header class="mt-1 pt-3">
                    <h1 class="tracking-wide text-7xl ml-2 md:text-8xl md:ml-1 text-gray-800 font-bold z-50 antialiased flex" style="font-family: 'Poppins', sans-serif;  text-shadow: 3px 2px #eeeeee;">Kendall Sherrin 
                    </h1>
                </header>
                
                <p class="flex flex-wrap ml-2 pt-6 text-xl md:text-1xl font-bold antialiased" style="font-family: 'Poppins', sans-serif;">
                    Data Scientist  <small class="px-3">┃</small>  Data Analyst  <small class="px-3">┃</small>  Analytical Chemist  <small class="px-3">┃</small>  Software Developer
                </p>
                <div class="col-span-2 justify-center flex items-center flex-col m-5 mt-8 md:mt-16">
                    <h2 class="font-bold text-xl md:text-3xl m-3 justify-start text-left">
                        Tourist Attractions
                    </h2>
                    <div>
                        <div class="mb-auto flex flex-wrap justify-center">
							<a href="/projects">
								<button class="text-lg md:text-xl bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-5 border border-blue-500 hover:border-transparent rounded-full m-3">
									🔨 Projects</button>
							</a>
                            <a href="/articles">
								<button class="text-lg md:text-xl bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-5 border border-blue-500 hover:border-transparent rounded-full m-3">
									📚 Articles</button>
							</a>
                            <a href="/pictures">
								<button class="text-lg md:text-xl  bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-5 border border-blue-500 hover:border-transparent rounded-full m-3">
									📷 Things I've Seen</button>
							</a>
                        </div>
                    </div>
                </div>
               
            </div>
            <div id="parallax-box" class="hidden lg:flex justify-center items-center flex-wrap z-0 pl-10">
                <span id="l1" class="absolute">
                    <svg width="400" height="400" viewBox="0 0 180 180" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#2766cc" d="M26.6,-42.3C37.9,-39.5,52.9,-39.4,59.5,-32.7C66.2,-26.1,64.5,-13.1,60.4,-2.3C56.4,8.4,50,16.8,41.5,20.1C32.9,23.5,22.3,21.8,15,29.4C7.8,37,3.9,53.9,-0.4,54.6C-4.7,55.3,-9.3,39.7,-18.6,33.3C-27.8,26.8,-41.7,29.4,-48.6,25.4C-55.6,21.4,-55.6,10.7,-55.4,0.1C-55.1,-10.4,-54.7,-20.8,-53,-34C-51.3,-47.2,-48.5,-63.1,-39.5,-67.2C-30.4,-71.3,-15.2,-63.5,-3.8,-56.9C7.6,-50.4,15.3,-45,26.6,-42.3Z" transform="translate(60 70)" />
                      </svg>
                </span>
                <span id="l2" class="absolute">
                    <svg width="400" height="400" viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#3b82f6" d="M39.4,-39.6C54.8,-24.1,73.6,-12,72.1,-1.5C70.6,9,48.8,18,33.4,31.1C18,44.1,9,61.1,-5,66.2C-19.1,71.2,-38.2,64.2,-50.5,51.2C-62.9,38.2,-68.5,19.1,-62.9,5.7C-57.2,-7.8,-40.2,-15.5,-27.9,-31C-15.5,-46.5,-7.8,-69.8,2.1,-71.9C12,-74.1,24.1,-55.1,39.4,-39.6Z" transform="translate(75 75)" />
                    </svg>
                </span>
               
                <span id="l3" class="text-9xl module absolute"><img title="I didn't make this, credit to unDraw.co" width="400" src="/images/spreadsheets_guy.svg" alt=""></span>
            </div>
           
            <div class="col-span-3 justify-center flex items-center flex-col m-1 lg:pt-36">
                <h2 class="font-bold text-xl md:text-2xl m-3">
                   External Links
                </h2>
    
                <div class="mb-auto">
					<a href="https://github.com/kmsherrin/">
						<button class="text-lg md:text-xl flex items-center bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full m-2">
							<svg xmlns="http://www.w3.org/2000/svg" class="mx-1 hover:stroke-current hover:text-white" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
								<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
								<path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
							  </svg> 
									 Github</button>
					</a>
                </div>
            </div>
        </div>
    </div>
</main>