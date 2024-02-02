<script>
  import { Input, Textarea, Button } from "$lib/components";
</script>

<section>
  <form method="post" action="/contact">
    <Input name="name" placeholder="Name" />
    <Input name="email" placeholder="Email" />
    <Textarea name="message" placeholder="Message" />
    <Button type="submit">Submit</Button>
  </form>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: var(--spacing-8);
  }
  form {
    width: 100%;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-6);
  }
</style>
