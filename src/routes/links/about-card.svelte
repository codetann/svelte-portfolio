<script>
  import { Icon } from "$lib/components";
  let open = false;

  function toggle() {
    open = !open;
  }
</script>

<div class="about-card">
  <div class="about-grid">
    <div class="about-item">
      <div class="about-icon">
        <Icon name="camera" size={20} color="var(--yellow-400)" />
      </div>
      <p>Photographer</p>
    </div>
    <div class="about-item">
      <div class="about-icon">
        <Icon name="video" size={20} color="var(--yellow-400)" />
      </div>
      <p>Videographer</p>
    </div>
    <div class="about-item">
      <div class="about-icon">
        <Icon name="code" size={20} color="var(--yellow-400)" />
      </div>
      <p>Developer</p>
    </div>
    <div class="about-item">
      <div class="about-icon">
        <Icon name="golf" size={20} color="var(--yellow-400)" />
      </div>
      <p>Golfer</p>
    </div>
  </div>
</div>

<style lang="scss">
  .about-card {
    display: flex;

    align-items: center;
    justify-content: center;
    gap: 1rem;
    /* background: var(--brand-light-gray); */
    width: 100%;

    text-align: center;
    border-radius: 1rem;

    & p {
      color: var(--white);
      font-size: 0.8rem;
    }
  }

  .about-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4rem;
    height: 4rem;
  }

  .about-grid {
    // create a grid layout with 2x2 columns
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .about-item {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    flex: 1;
    /* background: var(--brand-gray); */
    padding: 1rem;
    border-radius: 1rem;
  }
</style>
