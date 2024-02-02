<script>
  import Navbar from "./nav-bar.svelte";
  import Footer from "./footer.svelte";

  // your script goes here
</script>

<main>
  <div>
    <Navbar />
    <slot />
    <Footer />
  </div>
</main>

<style scoped>
  main {
    width: 100%;
    height: 100%;
    background: var(--black);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  div {
    background: var(--brand-dark-gray);
    height: 100%;
    min-height: 100vh;
    width: 100%;
    max-width: 1200px;
    border-left: 1px solid var(--brand-light-gray);
    border-right: 1px solid var(--brand-light-gray);
  }
</style>
