<script>
function expand_resume() {
    console.log("clicing")
    let resume = document.getElementById("resume")
    let currHeight = resume.height;
    if (currHeight == 200) {
        resume.height = 800;
        document.getElementById("expand").innerHTML = "Contract"
    } else {
        resume.height = 200;
        document.getElementById("expand").innerHTML = "Expand"
    }
}

</script>
<style>
    p {
        @apply md:text-xl;
    }

    .expand_transition {
        transition: all 0.3s;
    }

    .pills-container span:hover {
        transform: scale(1.2);
        transition: all 0.2s;
        cursor: grab;
    }

</style>

<svelte:head>
  <title>Kendall Sherrin: About</title>
</svelte:head>


<main class="container mx-auto items-center justify-center text-justify">

    <h1 class="text-5xl md:text-8xl m-5 font-bold mt-0 text-gray-800">About</h1>
    
    <!-- Skill pills -->
	<div class="rounded-lg flex flex-wrap flex-col justify-center items-center md:mt-6 leading-8 mx-auto max-w-3xl">
		<h3 class="text-xl md:text-4xl my-2 font-bold justify-end text-right">Skills:</h3>
		<div class="flex flex-wrap justify-center font-mono pills-container">
			<span class="bg-yellow-500 font-semibold text-white px-6 border border-yellow-500 hover:border-transparent rounded-full m-2">Javascript</span>
			<span class="bg-orange-500 font-semibold text-white px-6 border border-orange-500 hover:border-transparent rounded-full m-2">Svelte</span>
			<span class="bg-green-500 font-semibold text-white px-6 border border-green-500 hover:border-transparent rounded-full m-2">Vue</span>
			<span class="bg-blue-700 font-semibold text-white px-6 border border-blue-700 hover:border-transparent rounded-full m-2">Python</span>
			<span class="bg-blue-500 font-semibold text-white px-6 border border-blue-500 hover:border-transparent rounded-full m-2">ML/AI</span>
			<span class="bg-pink-500 font-semibold text-white px-6 border border-pink-500 hover:border-transparent rounded-full m-2">Statistics</span>
			<span class="bg-green-600 font-semibold text-white px-6 border border-green-600 hover:border-transparent rounded-full m-2">Data Science</span>
			<span class="bg-indigo-500 font-semibold text-white px-6 border border-indigo-500 hover:border-transparent rounded-full m-2">Analytical Chemistry</span>	
		</div>
    </div>

    <!-- Text -->
    <div class="max-w-5xl mx-auto">
        <p class="m-5 mt-20">
            Hi, I am Kendall from Hobart, Australia. I currently work for <span>CSIRO</span> at the Battery Point Site.
        </p>
    
        <div class="max-w-5xl mx-auto justify-center flex mt-10">
            <a href="/contact">
                <button class="md:text-xl bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full m-2">
                    📨 Contact Me</button>
            </a>    
        </div>

        <p class="m-5 mt-10">
            I've got experience in an extremely wide range of specialities. Spanning basic statistics simulations, remote small boat field work to the development of advanced data processing software packages. 
            My work started primarily as a water chemist aboard RV Investigator but provided the opportunity to gain skills in different fields. I am quickly trying to pivot my career into 
            a developer first role, most of my free time as of late has been dedicated to learning as much as possible.
        </p>

        
        <p class="m-5 mt-10">
            Programming wise - I am most comfortable in 🐍 Python, with advanced skills covering all use cases of this language. I am heavily 
            interested in the use of ML and AI for new data science applications.
        </p>
        
        <p class="m-5 mt-10">
            Most recently I have been focussing on improving my skills in JS/web development and getting a hang of 
            some JS frontend frameworks, primarily <span class="text-green-500">Vue</span> 
            then <span class="text-orange-500">Svelte</span>, with some tinkering on <span class="text-blue-600">React (& React Native - this is v cool)</span>.
        </p>

        <p class="m-5 mt-10">
            If you are interested I have attached my resume which provides a good overview of the 
            skills and responsibilities that I have held at CSIRO. I am in transitional period 
            as I try to pivot my career fully into the software development world.
        </p>

        <div class="flex flex-wrap justify-center" style="width:100%;">
            <a href="/Kendall Sherrin Resume 2021 Public.pdf">
                <button class="md:text-lg bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded-full m-2">
                    Download Resume</button>
            </a>
        </div>
        <div class="flex flex-wrap justify-center" style="width:100%;">
            <iframe title="resume" class="expand_transition" id="resume" src="/Kendall Sherrin Resume 2021 Public.pdf" frameborder="0" height="200" style="width:100%;"></iframe>
            
        </div>
        <div class="flex flex-wrap justify-center" style="width:100%;">
            <button id="expand" on:click="{expand_resume}" class="md:text-sm bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded-full m-2">
                Expand</button>
        </div>

    </div>
</main>

