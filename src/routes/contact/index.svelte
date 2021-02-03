<script>
    function send_form_data() {

        document.getElementById("loading_spinner").classList.toggle("hidden");

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;

        let form_data = {};
        form_data['name'] = name;
        form_data['email'] = email;
        form_data['message'] = message;

        fetch('https://kendallsherrin-messages.herokuapp.com/message', {
            method: 'POST',
            body: JSON.stringify(form_data),
            redirect: 'follow',
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'},
        })
        .then(response => response.json())
        .then(data => {
            document.getElementById("loading_spinner").classList.toggle("hidden");
            console.log(data);
            if (data.success) {
                alert("Message successfully sent!")
                location.reload();
            } else {
                alert("Error: message could not be sent at this time");
            }
        });

    }
</script>

<style>

    input {
        @apply font-mono;
    }
</style>

<svelte:head>
  <title>Kendall Sherrin: Contact</title>
</svelte:head>

<main class="container m-1 flex flex-col mx-auto justify-center">
    <div>
        <h1 class="text-5xl md:text-8xl m-5 font-bold mt-0 text-gray-800">
            Contact Me</h1>
    </div>

    <div id="content" class="lg:max-w-5xl mx-auto px-2">
        
        <p class="m-5 text-xl max-w-xl">
            If you would like to get in contact please fill in the form below and I will try to get back to you as soon as possible.
        </p>
        
        <div>
            <form class="flex flex-col max-w-sm mx-auto" action="">
                <label class="font-bold text-xl" for="name">Name:</label>
                <input class="text-xl rounded shadow-md p-3 " id="name" type="text">

                <label class="mt-5 font-bold text-xl" for="email">Email:</label>
                <input class="text-xl rounded shadow-md p-3 " id="email" type="text">

                <label class="mt-5 font-bold text-xl" for="mess">Message:</label>
                <textarea class="text-xl rounded shadow-md p-3 " name="mess" id="message" cols="30" rows="10"></textarea>

                <div class="flex flex-row-reverse">
                    <a class="mt-5" href="/contact">
                        <button on:click="{send_form_data}" class="md:text-xl bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full m-2">
                            Submit</button>
                    </a>   
                </div>
                 
            </form>
        </div>
            
    </div>

</main>

<div id="loading_spinner" class="hidden absolute w-screen h-screen z-30" style="background-color: rgb(50, 50, 50, 0.3);">
    <!--Loading spinner -->
    <div class="flex h-screen my-auto">
        <img class="mx-auto" src="https://s.svgbox.net/loaders.svg?ic=spinner&fill=000" width="150" height="150">
    </div>
</div>
