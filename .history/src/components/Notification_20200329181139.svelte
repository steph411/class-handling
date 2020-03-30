<script>
  export let title = "Notification";
  export let content = "";
  export let visible = false;
</script>

<style>
  .alert {
    position: absolute;
    top: 1rem;
    right: 0;
    display: none;
  }
  .visible {
    display: initial;
  }
</style>

<div
  class="px-4 py-3 text-blue-700 bg-blue-100 border-t border-b border-blue-500 alert"
  class:visible
  role="alert">
  <p class="font-bold">{title}</p>
  <p class="text-sm">{content}</p>
</div>
