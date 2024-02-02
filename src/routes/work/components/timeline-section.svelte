<script>
  import TimelineItem from "./timeline-item.svelte";
  import data from "../data/work.json";
</script>

<section>
  <div class="timeline">
    {#each data as item}
      <TimelineItem
        image={item.image}
        title={item.title}
        company={item.company}
        date={item.date}
        description={item.description}
        highlights={item.highlights}
      />
    {/each}
  </div>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    padding: 0 var(--spacing-16);
    gap: var(--spacing-8);
    padding-bottom: var(--spacing-28);
    margin-top: var(--spacing-16);
  }

  .timeline {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: var(--spacing-16);
    border-left: 1px solid var(--white-alpha-200);
    padding-left: var(--spacing-8);
  }

  @media (max-width: 768px) {
    section {
      padding: var(--spacing-6);
      padding-top: var(--spacing-18);

      padding-bottom: var(--spacing-28);

      margin-top: 5rem;
    }

    .timeline {
      padding-left: 0;
      border: none;
    }
  }
</style>
