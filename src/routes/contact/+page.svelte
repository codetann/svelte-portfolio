<script>
  import { Layout } from "$lib/components";
  import HeaderSection from "./components/header-section.svelte";
  import FormSection from "./components/form-section.svelte";

  /** @type {import('./$types').ActionData} */
  export let form;
</script>

<Layout>
  <HeaderSection />
  {#if form}
    <p>{form?.body.message}</p>
  {/if}

  {#if !form}
    <FormSection />
  {/if}
</Layout>
