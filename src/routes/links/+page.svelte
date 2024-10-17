<script>
  import { Avatar, IconLink } from "$lib/components";
  import { default as VideoCard } from "./video-card.svelte";
  import { default as PhotosCard } from "./photos-card.svelte";
  import { default as MusicCard } from "./music-card.svelte";
  import { default as LinkCard } from "./link-card.svelte";
  import { fade, slide } from "svelte/transition";

  let currentTab = "all";

  const tabs = ["all", "music", "videos", "projects"];

  function handleTabChange(e) {
    currentTab = e.target.innerText.toLowerCase();
  }
</script>

<main>
  <section>
    <div class="header-section">
      <div class="header-background">
        <div class="header-photo">
          <Avatar
            size="md"
            image="https://res.cloudinary.com/dchbfnubk/image/upload/v1706918133/portfolio/kfycg9upmihil4kbhvfl.jpg"
            title="Tanner Dolby"
          />
        </div>
      </div>
      <div class="header-content">
        <h5>Tanner Thomas</h5>

        <p>Photographer | Videographer | Developer | Golfer</p>

        <div class="header-icons">
          <IconLink href="github.com" icon="fa-brands fa-github" />
          <IconLink href="linkedin.com" icon="fa-brands fa-linkedin" />
          <IconLink href="twitter.com" icon="fa-brands fa-twitter" />
          <IconLink
            href="mailto:me@tannerthomas.dev"
            icon="fa-solid fa-envelope"
          />
          <IconLink
            href="mailto:me@tannerthomas.dev"
            icon="fa-brands fa-youtube"
          />
          <IconLink href="" icon="fa-brands fa-instagram" />
        </div>
      </div>
      <p class="header-tagline"><i>Lost in the sauce</i></p>
      <div class="tabs">
        {#each tabs as tab}
          <button class:active={currentTab === tab} on:click={handleTabChange}
            >{tab}</button
          >
        {/each}
      </div>
    </div>

    {#if currentTab === "all"}
      <div class="cards-section" transition:slide>
        <LinkCard
          title="My Portfolio"
          description="All things <code />"
          icon="code"
          color="var(--black-alpha-900)"
          background="var(--yellow-400)"
          altcolor="var(--black-alpha-700)"
        />

        <PhotosCard />
        <MusicCard />
        <VideoCard
          title="New York City Video"
          url="https://www.youtube.com/embed/0YUJQ5J4bjE?si=wEyKc2yS971-NqeC"
        />
      </div>
    {/if}
    {#if currentTab === "music"}
      <div class="cards-section" transition:slide>
        <MusicCard />
      </div>
    {/if}
    {#if currentTab === "videos"}
      <div class="cards-section" transition:slide>
        <VideoCard
          title="New York City Video"
          url="https://www.youtube.com/embed/0YUJQ5J4bjE?si=wEyKc2yS971-NqeC"
        />
      </div>
    {/if}
  </section>
</main>

<style lang="scss">
  main {
    width: 100%;
    height: 100vh;
    background: var(--black);
    display: flex;
    justify-content: center;
    align-items: flex-start;
    overflow: auto;
    padding: 1rem;
  }

  section {
    background: var(--brand-dark-gray);
    max-width: 50rem;
    width: 100%;
    min-height: 100%;
    border-radius: 1rem;
    overflow: hidden;
  }

  .tabs {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem;
    /* background: var(--brand-light-gray); */
    border-radius: 1rem;
    width: 100%;

    & button {
      background: var(--brand-light-gray);
      color: var(--white-alpha-600);
      padding: 0.5rem 1rem;
      border-radius: 1rem;
      border: none;
      cursor: pointer;
      font-weight: medium;
      text-transform: capitalize;
    }
  }

  .active {
    background: var(--yellow-400) !important;
    color: var(--black) !important;
  }

  .header-section {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
  }

  @media (max-width: 768px) {
    main {
      padding: 0;
    }
    section {
      border-radius: 0;
    }
  }

  .header-tagline {
    color: var(--yellow-400) !important;
    font-size: 0.8rem;
  }

  .header-background {
    width: 100%;
    height: 10rem;
    background: var(--yellow-400);
    position: relative;
  }

  .header-photo {
    border-radius: 50%;
    background: var(--yellow-400);
    position: absolute;
    bottom: -60%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .header-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    margin-top: 3rem;

    & h5 {
      color: var(--white);
      font-size: 2rem;
      font-weight: 800;
    }
  }

  .header-icons {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  .cards-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    padding: 1rem;
  }
</style>
