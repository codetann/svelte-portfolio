<script>
  export let href = "";
  export let icon = "fa fa-github";
</script>

<a {href} target="_blank">
  <i class={icon} aria-hidden="true"></i>
</a>

<style>
  a {
    background: var(--white-alpha-50);
    padding: 0.5rem;
    border-radius: var(--radius-lg);
  }

  a:hover {
    background: var(--white-alpha-50);

    & > i {
      color: var(--yellow-400);
      transform: scale(0.95);
    }
  }

  i {
    color: var(--white-alpha-800);
    font-size: 1.3rem;
    transition: all 0.1s ease-in-out;
  }
</style>
