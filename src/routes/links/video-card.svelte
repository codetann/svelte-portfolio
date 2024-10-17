<script lang="ts">
  import { Icon } from "$lib/components";
  import { slide } from "svelte/transition";

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
      <Icon name="youtube" size={20} color="var(--white)" />
    </div>
    <div class="card-details">
      <p>{title}</p>
      <span>Youtube</span>
    </div>
    <button class="toggle-icon" on:click={toggle} class:rotate={open}>
      <Icon name="chevron-down" size={12} color="var(--white)" />
    </button>
  </div>

  {#if open}
    <div class="toggle-content" transition:slide>
      <iframe
        width="560"
        height="315"
        src={url}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
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
    background: var(--red-600);
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
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .rotate {
    transform: rotate(180deg);
    margin-right: 0.5rem;
  }

  iframe {
    width: 100%;
    height: 315px;
  }
</style>
