<script lang="ts">
  import { Icon } from "$lib/components";
  import { slide, fade } from "svelte/transition";

  export let title = "";
  export let url = "";

  let open = false;

  function toggle() {
    open = !open;
  }
</script>

<div class="card">
  <div class="card-header">
    <div class="card-icon">
      <Icon name="spotify" size={20} color="var(--white)" />
    </div>
    <div class="card-details">
      <p>Favorite music</p>
      <span>Spotify</span>
    </div>
    <button class="toggle-icon" on:click={toggle} class:rotate={open}>
      <Icon name="chevron-down" size={12} color="var(--white)" />
    </button>
  </div>

  {#if open}
    <div class="toggle-content" transition:slide>
      <iframe
        transition:fade={{ duration: 500, delay: 0.5 }}
        style="border-radius:12px"
        src="https://open.spotify.com/embed/track/0QZ5yyl6B6utIWkxeBDxQN?utm_source=generator&theme=1"
        width="100%"
        height="152"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
      <iframe
        style="border-radius:12px"
        src="https://open.spotify.com/embed/track/0gKiONJeEtwb3hps4sUgyn?utm_source=generator"
        width="100%"
        height="152"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  {/if}
</div>

<style>
  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    background: var(--brand-light-gray);
    width: 100%;
    padding: 0.7rem;
    border-radius: 0.6rem;
  }

  .card-details {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;

    & span {
      font-size: 0.8rem;
      color: var(--gray-400);
    }
  }

  .card-header {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
    width: 100%;

    & p {
      font-size: 1rem;
      font-weight: 600;
      color: white;
    }
  }

  .card-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background: var(--green-500);
  }

  .toggle-icon {
    cursor: pointer;
    padding-right: 0.5rem;
    width: auto;
    background: none;
    border: none;
    margin-left: auto;
    transition: transform 0.1 s ease-in-out;
  }

  .toggle-content {
    width: 100%;
    height: 352px;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
  }

  .rotate {
    transform: rotate(180deg);
    margin-right: 0.5rem;
  }

  iframe {
    height: 152px;
  }
</style>
