<script>
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
</script>

<style global>
  p {
    margin: 20px 0 20px 0;
    @apply text-lg;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 40px 0 20px 0;
  }


  h1 {
  @apply text-4xl;
  @apply font-bold;
  }
  h2 {
    @apply text-3xl;
    @apply font-bold;
  }
  h3 {
    @apply text-2xl;
  }
  h4 {
    @apply text-xl;
  }
  h5 {
    @apply text-lg;
  }

  @screen md{
    h1 {
    @apply text-6xl;
    @apply font-bold;
    }
    h2 {
      @apply text-5xl;
      @apply font-bold;
    }
    h3 {
      @apply text-3xl;
    }
    h4 {
      @apply text-2xl;
    }
    h5 {
      @apply text-xl;
    }
  }

  ul {
    list-style: circle;
    margin-top: 20px;
    margin-left: 30px;
  }
  li {

    padding: 0 0 0 10px;
  }
</style>

<slot />

<button on:click={topFunction} class="md:text-xl bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full">
  Top</button>


    