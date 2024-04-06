<script>
  import Avatar from "$lib/components/avatar.svelte";
  import Button from "$lib/components/button.svelte";
  import IconLink from "$lib/components/icon-link.svelte";
  export let image = "https://avatars.githubusercontent.com/u/5860073?v=4";
  export let title = "Project Title";
  export let description = "Project Description";
  export let url = "";
  export let icon = "";
</script>

<div class="container">
  <div class="avatar">
    <Avatar {icon} {title} />
  </div>
  <h5 class="title">{title}</h5>
  <p class="description">{description}</p>
  <div class="links">
    <Button width="100%">Demo</Button>
    <IconLink href="github.com" icon="fa-brands fa-github" />
  </div>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    height: 16rem;
    width: 100%;
    /* background: var(--white-alpha-50); */
    padding: 1.5rem;
    border-radius: var(--radius-xl);
    border: 1px solid var(--white-alpha-200);
    transition: all 0.1s ease-in-out;
  }
  .description {
    padding-top: 0.5rem;
    font-size: var(--font-size-sm);
  }
  .title {
    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-bold);
    color: var(--white-alpha-900);
    padding-top: 1rem;
  }
  .links {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: var(--spacing-4);
    margin-top: auto;
    color: var(--yellow-400);
  }
</style>
