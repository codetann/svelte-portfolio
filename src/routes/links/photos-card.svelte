<script lang="ts">
  import { Icon } from "$lib/components";
  import { slide } from "svelte/transition";

  let open = true;

  function toggle() {
    open = !open;
  }
</script>

<div class="card">
  <div class="card-header">
    <div class="card-icon">
      <Icon name="camera" size={20} color="var(--white)" />
    </div>
    <p>Photos</p>
    <button class="toggle-icon" on:click={toggle} class:rotate={open}>
      <Icon name="chevron-down" size={12} color="var(--white)" />
    </button>
  </div>

  {#if open}
    <div class="toggle-content" transition:slide>
      <div class="photo-grid">
        <img
          src="https://www.adobe.com/content/dam/cc/us/en/creativecloud/photography/discover/stock-photography/thumbnail.jpeg"
          alt="grid-item"
          class="photo-item"
        />
        <img
          src="https://brandingforthepeople.com/wp-content/uploads/2019/04/Stock-Photography-vs-Real-Imagery.jpg"
          alt="grid-item"
          class="photo-item"
        />
        <img
          src="https://images.ctfassets.net/hrltx12pl8hq/3Mz6t2p2yHYqZcIM0ic9E2/3b7037fe8871187415500fb9202608f7/Man-Stock-Photos.jpg"
          alt="grid-item"
          class="photo-item"
        />
        <img
          src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg"
          alt="grid-item"
          class="photo-item"
        />
        <img
          src="https://assets-global.website-files.com/62d84e447b4f9e7263d31e94/637627ca9eebde45ae5f394c_Underwater-Nun.jpeg"
          alt="grid-item"
          class="photo-item"
        />
        <img
          src="https://st4.depositphotos.com/1017228/20160/i/450/depositphotos_201608550-stock-photo-image-amazing-young-pretty-woman.jpg"
          alt="grid-item"
          class="photo-item"
        />
      </div>
    </div>
  {/if}
</div>

<style lang="scss">
  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    background: var(--brand-light-gray);
    width: 100%;
    overflow: hidden;
    border-radius: 0.6rem;
  }

  .card-header {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
    width: 100%;
    padding: 0.7rem;

    & p {
      font-size: 1rem;
      font-weight: 600;
      color: white;
    }
  }

  .card-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background: var(--brand-dark-gray);
  }

  .toggle-icon {
    cursor: pointer;
    padding-right: 0.5rem;
    width: auto;
    background: none;
    border: none;
    margin-left: auto;
    transition: transform 0.1 s ease-in-out;
  }

  .toggle-content {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .rotate {
    transform: rotate(180deg);
    margin-right: 0.5rem;
  }

  .photo-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  .photo-item {
    aspect-ratio: 1/1;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
</style>
