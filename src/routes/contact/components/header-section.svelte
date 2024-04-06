<section>
  <h2>Let's get in touch.</h2>
  <p>
    I'm always open to new projects and opportunities. If you have a project
    that you want to get started, think you need my help with something or just
    fancy saying hey, then get in touch.
  </p>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    padding: var(--spacing-16);
    gap: var(--spacing-4);

    margin-top: var(--spacing-28);
  }
  h2 {
    max-width: 800px;
    color: var(--yellow-400);
  }

  p {
    max-width: 750px;
  }

  @media (max-width: 768px) {
    h2 {
      width: 100%;
      font-size: 2.5rem;
      text-align: left;
      font-weight: var(--font-weight-black);
    }

    section {
      padding: var(--spacing-6);
      padding-top: var(--spacing-18);
      gap: var(--spacing-4);

      /* padding-bottom: var(--spacing-28); */

      margin-top: 10rem;
    }
  }
</style>
