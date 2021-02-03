<script>
    export let title = "";
    export let descrip = "";
    export let github_link = "https://github.com";

    export let tag_list = [];

    export let image = "";

    export let to = "/about";

</script>

<style global>
    .python {
        @apply bg-blue-700;
    }
    .flask {
        @apply bg-blue-400;
    }
    .node {
        @apply bg-green-700;
    }
    .express {
        @apply bg-blue-900;
    }
    .vue {
        @apply bg-green-500;
    }
    .svelte {
        @apply bg-orange-500;
    }
    .javascript {
        @apply bg-yellow-400;
    }
    .data {
        @apply bg-pink-500;
    }
    .sapper {
        background-color: #449296;
    }
</style>

<div class="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4 lg:min-w-min">
    <div class="md:flex">
      <div class="md:flex-shrink-0">
        <img class="h-40 md:h-80 w-full object-cover md:w-48 m-2 rounded-md" src="{image}" alt="Project image">
      </div>
      <div class="flex flex-col flex-wrap py-1 pl-8 pr-10">
        <div class="flex pt-2">
            {#each tag_list as tag}
                <span class="{tag} uppercase tracking-wide text-xs text-white rounded-full px-4 m-1">
                    {tag}
                </span>
            {/each}
        </div>
        
        <!-- This is the project title-->
        <a href="{to}" class="block mt-1 leading-tight text-2xl md:text-3xl text-black hover:underline" style="font-family: 'Montserrat', sans-serif;">{title}</a>
        
        <!-- The project short description -->
        <p class="mt-2 text-gray-500 text-lg md:text-xl">{descrip}</p>

        <!-- Link to the github repo -->
        <div class="flex justify-end pb-3 mt-auto">
            <a href="{github_link}">
                <button class="flex items-center bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white px-4 border border-blue-500 hover:border-transparent rounded-full">
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

