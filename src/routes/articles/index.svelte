<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`articles.json`)
      .then((r) => r.json())
      .then((posts) => {
        return { posts };
      });
  }
</script>

<script>
  export let posts;
</script>

<style>
  .post-item-date {
    color: rgb(73, 73, 73);
    text-align: left;
    text-transform: uppercase;
    margin-right: 16px;
  }

  hr {
    margin: 40px auto;
  }
</style>

<svelte:head>
  <title>Kendall Sherrin: Articles</title>
</svelte:head>

<main class="container mx-auto items-center justify-center">
  <h1 class="text-5xl md:text-8xl m-5 font-bold mt-0 text-gray-800">Articles</h1>

  <div id="content" class="lg:max-w-5xl mx-auto mt-5 p-5">
    {#each posts as post, index}
      {#if index}
        <hr />  
      {/if}
      <div class="post-item bg-white rounded-xl shadow-md p-5 py-8">
        <span class="post-item-date font-mono pl-1 mb-5">{post.printDate}</span>
        <h2 class="text-5xl font-bold "><a rel="prefetch" href="articles/{post.slug}">{post.title}</a></h2>
        <p class="text-xl m-3">{post.excerpt}</p>
      </div>
    {/each}
  </div>
</main>
