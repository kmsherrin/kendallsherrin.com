<script>
    import TailwindStyles from "../TailwindStyles.svelte";
    import Background from "../background.svelte"
    import Nav from '../components/Nav.svelte';
    import Footer from '../components/Footer.svelte';
</script>

<style global>
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;500;600;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&family=Poppins:wght@200;300;400;500;600;700&display=swap');
    body {
        margin: 0;
        padding: 0;
    }
    * {
        margin: 0;
    }
    h1, h2, h3, h4, h5 {
        margin: 0;
        font-family: 'Montserrat', sans-serif;
    }
    p {
        margin: 0;
        padding: 0;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    a {
        margin: 0; 
        padding: 0;
    }

    .custom_scrollb::-webkit-scrollbar {
    width: 8px;
    }
    
    .custom_scrollb::-webkit-scrollbar-track {
    background-color: rgb(31, 41, 55);
    }
    
    .custom_scrollb::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    border-radius:0.2rem;
    }

</style>

<layout id="main_layout" class="font-sans justify-center mx-auto bg-gray-100 background-lines">    
    <Nav logo_text={{label: "Kendall Sherrin", href: "/"}} nav_max_width=""></Nav>
    
    <div id="primary" class="flex flex-wrap flex-col justify-center items-center pt-5">
        <slot>
    
        </slot>    
    </div>
   
    <Footer></Footer>
</layout>