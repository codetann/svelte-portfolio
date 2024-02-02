<script>
  import { Avatar } from "$lib/components";
  export let company = "Google";
  export let title = "Software Engineer";
  export let date = "2021 - Present";
  export let image =
    "https://media.licdn.com/dms/image/C4E03AQEIMEQE0WtHkg/profile-displayphoto-shrink_400_400/0/1639533909203?e=1702512000&v=beta&t=Qwa1k62bhNIc2MbYX6XQQqdt2siy1fFKQquwRz3FaPU";
</script>

<div class="container">
  <div class="date-container">
    <p class="date">{date}</p>
  </div>
  <div class="details-container">
    <div class="avatar">
      <Avatar {image} title={company} />
    </div>
    <div class="details">
      <h6 class="company">{company}</h6>
      <p class="title">{title}</p>
      <p class="description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
        incidunt quod soluta quisquam, velit at sapiente distinctio dicta ab
        ullam a inventore porro, eos laboriosam corrupti nobis voluptate
        voluptatem omnis.
      </p>
    </div>
  </div>
</div>

<style>
  .container {
    display: flex;
    width: 100%;
  }
  .date-container {
    width: 30%;
  }
  .details-container {
    width: 100%;
    display: flex;
    gap: 1rem;
  }

  .avatar {
  }

  .details {
    display: flex;
    flex-direction: column;
    max-width: 600px;
  }

  .company {
    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-bold);
    color: var(--white-alpha-900);
  }

  .date {
    font-size: var(--font-size-sm);
    color: var(--white-alpha-600);
  }

  .title {
    color: var(--yellow-400);
    margin-bottom: 0.5rem;
  }

  .description {
    font-size: var(--font-size-sm);
  }

  @media (max-width: 768px) {
    .container {
      flex-direction: column;
    }

    .date-container {
      width: 100%;
      padding-left: 1rem;
      margin-bottom: 1rem;
      border-left: 2px solid var(--white-alpha-200);
    }
  }
</style>
