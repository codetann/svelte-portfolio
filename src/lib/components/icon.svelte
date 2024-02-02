<script lang="ts">
  export let name: keyof typeof icons = "twitter";
  export let size = 24;
  export let color = "var(--white)"
  const icons = {
    ["twitter"]: "fa-brands fa-twitter",
  ["facebook"]: "fa-brands fa-facebook-f",
  ["chevron-down"]: "fa-solid fa-chevron-down",
  ["chevron-right"]: "fa-solid fa-chevron-right",
  ["chevron-up"]: "fa-solid fa-chevron-up",
  ["chevron-left"]: "fa-solid fa-chevron-left",
  ["arrow-down"]: "fa-solid fa-arrow-down",
  ["arrow-right"]: "fa-solid fa-arrow-right",
  ["arrow-up"]: "fa-solid fa-arrow-up",
  ["arrow-left"]: "fa-solid fa-arrow-left",
  ["breifcase"]: "fa-solid fa-briefcase",
  ["envelope"]: "fa-solid fa-envelope",
  ["node"]: "fa-brands fa-node-js",
  ["javascript"]: "fa-brands fa-js-square",
  ["typescript"]: "fa-brands fa-ts-square",
  ["python"]: "fa-brands fa-python",
  ["svelte"]: "devicon-svelte-plain colored",
  };
</script>

<i class={icons[name]}></i>

<style define:vars={{ size: `${size}px`, color }}>
  i {
    font-size: var(--size);
    color: var(--color);
  }
</style>