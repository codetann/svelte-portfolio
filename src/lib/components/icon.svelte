<script lang="ts">
  export let name: keyof typeof icons = "twitter";
  export let size = 24;
  export let color = "var(--white)";
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
    ["svelte"]: "devicon-svelte-plain colored",
    ["ghost"]: "fa-solid fa-ghost",
    ["flutter"]: "devicon-flutter-plain colored",
    ["react"]: "devicon-react-original colored",
    ["typescript"]: "devicon-typescript-plain colored",
    ["javascript"]: "devicon-javascript-plain colored",
    ["python"]: "devicon-python-plain colored",
    ["nodejs"]: "devicon-nodejs-plain colored",
    ["php"]: "devicon-php-plain colored",
    ["dart"]: "devicon-dart-plain colored",
  };
</script>

<i class={icons[name]} style="--size:{size}px; --color:{color}"></i>

<style>
  i {
    font-size: var(--size);
    color: var(--color);
  }
</style>
