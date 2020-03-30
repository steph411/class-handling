<script>
  export let title = "Notification";
  export let content = "";
  export let visible = false;
  import { fly } from "svelte/transition";
  import { onMount } from "svelte";

  onMount(() => {
    setTimeout(() => {
      visible = false;
    }, 3000);
  });
</script>

<style>
  .alert {
    position: absolute;
    top: 1rem;
    right: 4rem;
    transition: all 2s ease-in-out;
    display: none;
  }
  .visible {
    display: initial;
  }
</style>

<div
  in:fly={{ duration: 300, x: 500 }}
  out:fly={{ duration: 300, x: 0 }}
  class="px-4 py-3 text-blue-700 bg-blue-100 border-t border-b border-blue-500 alert"
  class:visible
  role="alert">
  <p class="font-bold">{title}</p>
  <p class="text-sm">{content}</p>
</div>
