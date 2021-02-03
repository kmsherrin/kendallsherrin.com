<script>
  import { onMount } from "svelte";

  // Editable props for the Navbar
  export let logo_text = { label: "LOGO", href: "/" };
  export let nav_links = [
    { label: "About", href: "/about" },
    { label: "Articles", href: "/articles" },
    { label: "Projects", href: "/projects" },
    { label: "Gallery", href: "/pictures" },
    { label: "Contact Me", href: "/contact" },
  ];

  export let bg_color = "#1F2937";
  export let nav_max_width = "1440px";
  let open_nav = false;

  // functions of all event listners
  function allEventListners() {
    // toggler icon click event
    // nav links click event
    document
      .querySelectorAll(".site-navbar a")
      .forEach((elem) => elem.addEventListener("click", navLinkClick));
  }

  function togglerClick() {
    document.querySelector(".nav-toggler").classList.toggle("toggler-open");
    open_nav != open_nav;
    document.querySelector(".site-navbar ul").classList.toggle("open");
    document.querySelector(".site-navbar ul").classList.toggle("site-navbar-bg");
  }

  function navLinkClick() {
    if (document.querySelector(".site-navbar ul").classList.contains("open")) {
      document.querySelector(".nav-toggler").click();
    }
  }

  onMount(() => {
    // load all event listners
    allEventListners();
  });
</script>

<style>
  /* default css start */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: "Montserrat", sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }
  .navbar-container {
    width: 100%;
    margin: 0 auto;
    padding: 0 5px 0 15px;
  }
  /* default css end */

  .site-navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @apply py-2;
  }
  a.site-logo {
    font-size: 22px;
    @apply font-thin;
    font-family: 'Poppins', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-transform: uppercase;
    color: #b3b7be;
    text-decoration: none;
  }
  .site-navbar ul { 
    background-color: rgb(31, 41, 55);
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
  }
  .site-navbar-bg {
    font-size: 26px; 
    font-weight: 500;
    background-color: rgba(31, 41, 55, .98) !important; 
  }

  .site-navbar ul li a {
    color: #9CA3AF;
    font-family: 'Montserrat', sans-serif;
    @apply px-4;
    @apply py-2;
    @apply rounded-full;
    display: block;
    text-decoration: none;
  }
  
  .site-navbar ul li a:hover {
    background-color: #111827;
    color: #fff;
  }
  /* navbar regular css end */

  /* nav-toggler css start */
  .nav-toggler {
    border: 0px solid rgb(238, 238, 238);
    padding: 10px 15px 10px 20px;
    background-color: transparent;
    cursor: pointer;
    height: 40px;
    display: none;
  }
  .nav-toggler span {
    transition: 0.1s ease-in;
  }
  .nav-toggler span,
  .nav-toggler span:before,
  .nav-toggler span:after {
    width: 28px;
    height: 2px;
    background-color:  #9CA3AF;
    display: block;
    border-radius: 1rem;
  }

  .nav-toggler span:before,
  .nav-toggler span:after {
    transition: 0.4s ease-out;
  }

  .nav-toggler span:before {
    content: "";
    transform: translateY(-8px);
  }
  .nav-toggler span:after {
    content: "";
    transform: translateY(6px);
  }
  .nav-toggler.toggler-open span {
    background-color: transparent;
  }
  .nav-toggler.toggler-open span:before {
    transform: translateY(0px) rotate(45deg);
  }
  .nav-toggler.toggler-open span:after {
    transform: translateY(-3px) rotate(-45deg);
  }
  /* nav-toggler css start */

  /* mobile breakpoint start */
  @media screen and (max-width: 767px) {
    .navbar-container {
      max-width: 720px;
      font-size: 26px;
    }
    /* navbar css for mobile start */
    .nav-toggler {
      display: block;
    }
    .site-navbar {
      min-height: 60px;
      z-index: 900;
    }
    .site-navbar ul {
      position: absolute;
      width: 100%;
      height: 100vh;
      left: 0;
      top: 60px;
      flex-direction: column;
      align-items: center;
      border-top: 1px solid #444;
      max-height: 0;
      overflow: hidden;
      transition: 0.12s ease-out;
    }

    .site-navbar-listles {
      width: 100%;
      text-align: center;
    }
    .site-navbar ul li a {
      padding: 25px;
      transition: 0.5s;
    }
    .site-navbar ul li a:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
    .site-navbar ul.open {
      max-height: 100%;
      overflow: visible;
    }
    /* navbar css for mobile end */
  }
  /* mobile breakpoint end */

  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&family=Poppins:wght@500;600;700&display=swap");
</style>

<div class="block shadow-md">
  <header class="header-area z-50" style="background-color: {bg_color};">
    <!-- site-navbar start -->
    <div class="navbar-area">
      <div class="navbar-container" style="max-width: {nav_max_width}">
      <nav class="site-navbar">
          <!-- site logo -->
        <a href="{logo_text.href}" class="site-logo">{logo_text.label}</a>

          <!-- site menu/nav -->
          <ul class:open={open_nav} class:site-navbar-bg={open_nav} class="listles">
            {#each nav_links as item}
              <li class="listles">
                <a href={item.href}>{item.label}</a>
              </li>
          {/each}
          </ul>

          <!-- nav-toggler for mobile version only -->
          <button
            class="nav-toggler"
            on:click={togglerClick}
            class:toggler-open={open_nav}>
            <span />
          </button>
        </nav>
      </div>
    </div>
    <!-- navbar-area end -->

  </header>
</div>
