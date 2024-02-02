<script>
  import Icon from "./icon.svelte";
</script>

<footer>
  <div class="links">
    <a href="/" class="link">Home</a>
    <a href="/work" class="link">Work</a>
    <a href="/projects" class="link">Projects</a>
    <a href="/contact" class="link">Contact</a>
  </div>
  <div class="message">
    <p>made with</p>
    <Icon name="svelte" />
  </div>
</footer>

<style>
  footer {
    width: 100%;
    border-top: 1px solid var(--white-alpha-200);
    height: 7rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 var(--spacing-16);
    margin-top: 1rem;
  }

  .links {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  .links div {
    cursor: pointer;
  }

  .link {
    opacity: 0.5;
    cursor: pointer;
    transition: all 0.1s ease-in-out;
    color: white;
    text-decoration: none;
  }

  .link:hover {
    opacity: 1;
  }

  .message {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }

  @media (max-width: 768px) {
    footer {
      padding: 0 var(--spacing-6);
    }
  }
</style>
