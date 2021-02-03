<script>
    export let picture = "";
    export let descrip = "";  

    export function open_modal_picture () {
        console.log('Hello');
        //let el = document.getElementById("modal_");
        //el.classList.toggle("hidden");
    };
</script>

<div class="max-w-md rounded-sm m-3 cursor-pointer shadow-md" >
    <p class="absolute m-5 px-3 py-1 rounded-md font-mono z-10" style="background-color: rgb(255,255,255,0.5);">{descrip}</p>
    <img on:click={open_modal_picture} class="rounded-md" data={picture} src="/images/gallery/{picture}" alt="">
</div>

