<script>
  import Avatar from "$lib/components/avatar.svelte";
  export let image = "https://avatars.githubusercontent.com/u/5860073?v=4";
  export let title = "Project Title";
  export let description = "Project Description";
  export let url = "";
</script>

<div class="container">
  <div class="avatar">
    <Avatar {image} {title} />
  </div>
  <h5 class="title">{title}</h5>
  <p class="description">{description}</p>
  <a>{url}</a>
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
  a {
    margin-top: auto;
    color: var(--yellow-400);
  }
</style>
