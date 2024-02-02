<script>
  import { AnimatedIcon } from "$lib/components";
</script>

<section>
  <span class="icons">
    <AnimatedIcon icon="flutter" color="#54c0f4" label="Flutter" />
    <AnimatedIcon icon="react" color="#04d8f9" label="React" />
    <AnimatedIcon icon="typescript" color="#007acc" label="Typescript" />
    <AnimatedIcon icon="javascript" color="#e8c012" label="Javascript" />
    <AnimatedIcon icon="python" color="#f9c646" label="Python" />
    <AnimatedIcon icon="nodejs" color="#8cc84b" label="Nodejs" />
    <AnimatedIcon icon="svelte" color="#ff3e00" label="Svelte" />
    <AnimatedIcon icon="dart" color="#00b4ab" label="Dart" />
    <AnimatedIcon icon="php" color="#8993be" label="PHP" />
  </span>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: var(--spacing-16);
    gap: var(--spacing-8);
    overflow: hidden;
    padding-top: var(--spacing-6);

    padding-bottom: var(--spacing-28);
  }

  .icons {
    display: flex;
    gap: var(--spacing-8);
  }

  /* mobile media query */
  @media (max-width: 768px) {
    .icons {
      width: 100%;
      transform: scale(1);
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      gap: var(--spacing-8);
    }
  }
</style>
