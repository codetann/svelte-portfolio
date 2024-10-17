<script lang="ts">
  export let onClick = () => {};
  export let width = "fit";
  export let rightIcon = "";
  export let leftIcon = "";
  export let type: any = "button";
  export let variant: any = "primary";
  export let className = "";

  const styleVars = `--width: ${width};`;
</script>

<button class="{variant} {className}" {type} on:click={onClick}>
  {#if leftIcon}
    <i class={leftIcon} style={styleVars} />
  {/if}

  <slot />

  {#if rightIcon}
    <i class={rightIcon} style={styleVars} />
  {/if}
</button>

<style>
  button {
    color: var(--white-alpha-700);
    background: #1d1d1f;
    width: 100%;
    border: 1px solid #1d1d1f;
    padding: 0.75rem 1.5rem;
    border-radius: var(--radius-md);
    cursor: pointer;
    transition: all 0.1s ease-in-out;
    font-weight: semi-bold;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-size: var(--font-size-sm);
  }

  button:hover {
    transform: translateY(-1px);
    color: var(--white-alpha-900) !important;
  }

  button:active {
    transform: scale(0.98);
    color: var(--white-alpha-900);
  }

  button:focus {
    outline: none;
    border: 1px solid var(--yellow-400);
  }

  .secondary {
    background: var(--yellow-400);
    color: var(--black-alpha-900);
    border: 1px solid var(--yellow-400);
  }
</style>
