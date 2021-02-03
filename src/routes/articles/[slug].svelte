<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].html
    const res = await this.fetch(`articles/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { post: data };
    } else {
      this.error(res.status, data.message);
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

</script>

<script>
  export let post
</script>


<svelte:head>
  <title>Kendall Sherrin: {post.title}</title>
</svelte:head>

<div id="markdown-page" class="">
  <header class="text-center">
    <p class="font-mono">{post.printDate} ~ {post.printReadingTime}</p>
    <h1 class="text-5xl md:text-7xl font-bold m-5 page-header">{post.title}</h1>
  </header>
  <div class="lg:max-w-4xl mx-auto">
    <article class="markdown-content text-xl px-5">
      {@html post.html}
    </article>
    <hr />
    
  </div>
  <div class="flex justify-center">
    <button on:click={topFunction} class="md:text-xl bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-8 border border-blue-500 hover:border-transparent rounded-full m-2 ">
      Top</button>
  </div>
</div>

 
<style>
  
  :global(.page-header) {
    @apply text-center;
  }

  .markdown-content :global(h1) {
    @apply text-5xl;
    @apply py-5;
    @apply pt-8;
    @apply font-bold;
    border-bottom: 1px solid rgb(34, 34, 34);
  }
  .markdown-content :global(h2) {
    @apply text-4xl;
    @apply py-3;
    @apply pl-1;
    @apply font-bold;
  }
  .markdown-content :global(h3) {
    @apply text-2xl;
    @apply py-3;
    @apply pl-2;
    @apply font-bold;
  }
  .markdown-content :global(h4) {
    @apply text-xl;
    @apply py-1;
    @apply pl-3;
    @apply font-bold;
  }
  .markdown-content :global(h5) {
    @apply text-lg;
    @apply py-1;
    @apply pl-4;
    @apply font-bold;
  }

  .markdown-content :global(p) {
    @apply antialiased;
    @apply py-5;
    @apply justify-center;
    @apply mx-auto;
    @apply text-lg;
  }

  .markdown-content :global(blockquote)  {
    background: #f9f9f9;
    border-left: 10px solid rgb(82, 101, 223);
    @apply rounded-md;
    @apply px-3;
    @apply py-0;
    @apply italic;
  }
  .markdown-content :global(blockquote p) {
    @apply p-2;
    @apply mt-4;
  }

  .markdown-content :global(a) {
    @apply underline;
  }

  .markdown-content :global(img) {
    max-height: 1450px;
    max-width: 100%;
    @apply py-5;
    @apply mx-auto;
  }

  .markdown-content :global(li) {
    @apply pl-5;
    @apply py-1;
    @apply text-lg;
  }

  .markdown-content :global(ol) {
    @apply p-3;
    line-height: 1.5;
  }
  .markdown-content :global(ol) {
    list-style-type: decimal;
    list-style-position: inside;
  }
  .markdown-content :global(ul) {
    list-style-type: circle;
    list-style-position: inside; 
  }
  .markdown-content :global(ol > li::marker) {
    font-weight: bold;
  }

  .markdown-content :global(code) {
    @apply text-sm;
  }

  .markdown-content :global(pre) {
    @apply bg-gray-50;
    @apply rounded-md;
    @apply shadow-sm;
    max-width: 90vw;
    }

  .markdown-content :global(iframe) {
    max-width: 56rem;
    width: 100%;
  }

</style>

