<script>
  import { Avatar } from "$lib/components";
  export let company = "Google";
  export let title = "Software Engineer";
  export let date = "2021 - Present";
  export let image =
    "https://media.licdn.com/dms/image/C4E03AQEIMEQE0WtHkg/profile-displayphoto-shrink_400_400/0/1639533909203?e=1702512000&v=beta&t=Qwa1k62bhNIc2MbYX6XQQqdt2siy1fFKQquwRz3FaPU";
</script>

<div class="container">
  <div class="img">
    <Avatar size="xs" {image} title="logo" />
  </div>
  <div class="details">
    <p class="company">{company}</p>
    <p class="title">{title}</p>
  </div>
  <div class="spacer"></div>
  <p class="date">{date}</p>
</div>

<style>
  .container {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 1rem;
    justify-content: space-between;
    width: 100%;
  }

  .details {
    margin-left: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;
  }

  .details p {
    line-height: 0;
  }

  .company {
    color: var(--white);
  }

  .title {
    color: var(--white-alpha-600);
    font-size: var(--font-size-sm);
  }

  .date {
    color: var(--white-alpha-600);
    font-size: var(--font-size-sm);
    margin-left: auto;
    white-space: nowrap;
  }
</style>
