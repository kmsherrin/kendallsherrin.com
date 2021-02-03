<script>
  import ProjectCard from "../../components/project_card.svelte";
</script>

<svelte:head>
  <title>Kendall Sherrin: Projects</title>
</svelte:head>

<main class="container m-1 flex flex-col mx-auto p-3">
  <div>
    <h1 class="text-5xl md:text-8xl m-5 font-bold mt-0 text-gray-800">
      Projects
    </h1>
  </div>
  <div id="projects" class="flex flex-wrap justify-center">
    <ProjectCard
      tag_list={['javascript', 'svelte', 'sapper']}
      title="Personal Website"
      image="/images/projects/website_logo.png"
      descrip="
      A short write-up on the tech stack powering this website and the considerations that were made in developing a highly performant and free to host static website."
      to="projects/website"
      github_link="https://github.com/kmsherrin" />
    
    <ProjectCard
    tag_list={['node', 'javascript', 'svelte']}
    title="JWT Auth App"
    image="/images/projects/jwt-project-image.png"
    descrip="Barebones news web app with JSON Web Token based authentication, used as a basis for more complex applications"
    to="projects/jwt-auth-app"
    github_link="https://github.com/kmsherrin/" />

    <ProjectCard
      tag_list={['python', 'flask']}
      title="DataBook "
      image="/images/projects/databook_logo.png"
      descrip="
        Intermediate project for getting a handle on the features in Flask. Project was centered on a data centric collaborative social network."
      to="projects/databook"
      github_link="https://github.com/kmsherrin/databook" />

    <ProjectCard
      tag_list={['javascript', 'vue']}
      title="Collatenator Frontend"
      image="/images/projects/collate_logo.png"
      descrip="
        A purely personal project for fulfilling a need of collating news and memes on one page. This part of the project was the frontend built-out with Vue to get a handle of the nuances."
      to="projects/collator"
      github_link="https://github.com/kmsherrin/collatenator" />

    <ProjectCard
      tag_list={['node', 'express']}
      title="Collatenator Backend"
      image="/images/projects/collate_backend_logo.png"
      descrip="
        The backend for the Collatenator project was written with Node and Express to scrape and provide a data API to the frontend. This backend scrapes various sites for information, stores it into MongoDB and returns structured data on request."
      to="projects/collator-backend"
      github_link="https://github.com/kmsherrin/datascrape_api" />

    <ProjectCard
      tag_list={['python', 'data']}
      title="Greyhound Racing Neural Network"
      image="/images/projects/greyhound_neural_logo.png"
      descrip="
        Neural network for the prediction of Australian greyhound races. The data is scraped from statistics sites and kept in SQLite database files. The prediction of greyhound performance is based on close to 20 factors."
      to="projects/greyhound"
      github_link="https://github.com/kmsherrin" />
  </div>
</main>
