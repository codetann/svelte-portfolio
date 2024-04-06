<script>
  import Icon from "./icon.svelte";
  export let size = "sm";
  export let image = false;
  export let icon = "";
  export let title = "Avatar";
</script>

<div class={size}>
  {#if image}
    <img src={image} alt={title} />
  {/if}
  {#if icon}
    <Icon name={icon} />
  {/if}
</div>

<style>
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: var(--white-alpha-300);
    padding: var(--spacing-1-5);
  }

  img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .xs {
    width: 40px;
    height: 40px;
    padding: var(--spacing-1);
  }

  .sm {
    width: 50px;
    height: 50px;
    padding: var(--spacing-1);
  }

  .md {
    width: 100px;
    height: 100px;
    padding: var(--spacing-1-5);
  }

  .lg {
    width: 150px;
    height: 150px;
  }
</style>
