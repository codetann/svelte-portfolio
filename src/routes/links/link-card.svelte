<script lang="ts">
  import { Icon } from "$lib/components";
  import { slide } from "svelte/transition";

  export let icon: any = "camera";
  export let title = "";
  export let description = "";
  export let url = "";
  export let color = "var(--white)";
  export let altcolor = "var(--gray-400)";
  export let background = "var(--brand-light-gray)";

  function toggle() {
    open = !open;
  }
</script>

<div class="card" style="background-color: {background};">
  <div class="card-header">
    <div class="card-icon">
      <Icon name={icon || "arrow-down"} size={20} {color} />
    </div>
    <div class="card-details">
      <p style="color: {color}">{title}</p>
      <span style="color: {altcolor};">{description}</span>
    </div>
    <button class="toggle-icon">
      <Icon name="link" size={12} color="var(--white)" />
    </button>
  </div>
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
