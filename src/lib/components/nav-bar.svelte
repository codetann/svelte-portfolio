<script lang="ts">
  import { page } from "$app/stores";
  import { onMount } from "svelte";

  onMount(() => {
    window.addEventListener("scroll", () => {
      const nav = document.querySelector("nav") as any;

      if (window.scrollY < 20) {
        nav.classList.toggle("scroll", true);
      } else {
        nav.classList.toggle("scroll", false);
      }
    });
  });
</script>

<nav class="scroll">
  <a class={$page.url.pathname === "/" ? "current" : ""} href="/">Home</a>
  <a class={$page.url.pathname === "/work" ? "current" : ""} href="/work"
    >Work</a
  >
  <a
    class={$page.url.pathname === "/projects" ? "current" : ""}
    href="/projects">Projects</a
  >
  <!-- <a class={$page.url.pathname === "/contact" ? "current" : ""} href="/contact"
    >Contact</a
  > -->
</nav>

<style>
  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    border-radius: 2rem;
    height: 2.5rem;

    background: #202021;
    border: 1px solid var(--white-alpha-100);
    blur: 5px;
    position: fixed;
    top: 1rem;
    right: 50%;
    transform: translateX(50%) scale(1) translateY(1px);
    box-shadow: var(--shadow-md);
    z-index: 9999;
    padding: var(--spacing-5) var(--spacing-4);
    transition: all 0.15s ease-out;
  }

  .scroll {
    background: transparent;
    border: 1px solid transparent;
    box-shadow: none;

    transform: translateX(50%) scale(0.99);
  }

  a {
    color: white;
    font-size: var(--font-size-sm);
    opacity: 0.5;
    text-decoration: none;
    transition: all 0.1s ease-in-out;
  }

  a:hover {
    opacity: 1;
  }

  .current {
    color: var(--yellow-400);
    opacity: 1;
  }
</style>
