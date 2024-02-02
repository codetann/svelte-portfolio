<script>
  import Job from "./job.svelte";
  import { Testimonial, Icon, Button } from "$lib/components";
  import data from "../data/testimonial.json";
</script>

<section>
  <div class="details">
    <div class="testimonials">
      {#each data as testimonial}
        <Testimonial
          name={testimonial.name}
          title={testimonial.title}
          image={testimonial.image}
          quote={testimonial.quote}
        />
      {/each}
    </div>
  </div>
  <aside class="work__card">
    <span>
      <Icon size={22} name="breifcase" color="var(--yellow-400)" />
      <p>Work</p>
    </span>
    <div class="jobs">
      <Job
        image="https://res.cloudinary.com/dchbfnubk/image/upload/f_auto,q_auto/v1/portfolio/bkgshybmsknhuexsrstx"
        title="Fullstack Engineer"
        company="Paymentbox"
        date="2023 - Present"
      />
      <Job
        image="https://res.cloudinary.com/dchbfnubk/image/upload/f_auto,q_auto/v1/portfolio/x3ljguevxahb0qgx3v63"
        title="Frontend Engineer"
        company="National Processing"
        date="2022 - Present"
      />
      <Job
        image="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQka5gKFH5wutdc3Taqch-_DrTFbJSy31Z7Dti9fnGfFQ-Kk7tz"
        title="Software Engineer"
        company="Impact Suite"
        date="2021 - 2022"
      />
      <Job
        image="https://d92mrp7hetgfk.cloudfront.net/images/sites/misc/devmountain/original.png?1568083750"
        title="Developer / Mentor"
        company="Devmountain"
        date="2021 - 2021"
      />
    </div>

    <Button rightIcon="arrow-down" onClick={() => null} width="100%">
      Download CV
    </Button>
  </aside>
</section>

<style>
  section {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    padding: var(--spacing-16);
    gap: var(--spacing-16);
  }

  @media (max-width: 768px) {
    section {
      padding: var(--spacing-4);
    }
  }

  .time {
    display: flex;
    /* background: #1d1d1f; */
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: var(--spacing-2);
    height: 100%;
    border-radius: var(--radius-xl);
    /* border: 1px solid var(--white-alpha-200); */
    min-height: 10rem;
  }

  .heading__text p {
    max-width: 750px;
  }
  .heading__icons {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    gap: var(--spacing-8);
  }

  .details {
    display: flex;
    gap: var(--spacing-16);
  }

  .jobs {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-4);
    width: 100%;
  }

  .testimonials {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-16);
  }

  .detail__cards {
    flex: 3;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-8);
  }

  .contact__card {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    gap: var(--spacing-4);
    border: 1px solid var(--white-alpha-200);
    border-radius: var(--radius-xl);
    padding: var(--spacing-4);
  }

  .work__card {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    gap: var(--spacing-4);
    border: 1px solid var(--white-alpha-200);
    border-radius: var(--radius-xl);
    padding: var(--spacing-4);
  }
  aside > span {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: var(--spacing-2-5);
    margin-bottom: 0.5rem;
    margin-left: 0.5rem;
  }
  aside > span > p {
    color: var(--white);
    font-weight: var(--font-weight-medium);
  }

  .icons {
    display: flex;
    gap: var(--spacing-8);
  }

  @media screen and (max-width: 1000px) {
    section {
      flex-direction: column;
      gap: var(--spacing-24);
    }
  }
</style>
