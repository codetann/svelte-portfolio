<section>
  <h2>A breif look at my employment history.</h2>
  <p>
    Over the years I have worked with many talented individuals and companies
    and have gained a wealth of experience in the process. I have worked in a
    variety of roles and have been involved in many different projects and used
    many different technologies.
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
