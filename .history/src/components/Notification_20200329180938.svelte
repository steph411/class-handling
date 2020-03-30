<script>
  export let message;
  export let title = "Notification";
  export let content = "";
</script>

<style>

</style>

<div
  class="px-4 py-3 text-blue-700 bg-blue-100 border-t border-b border-blue-500"
  role="alert">
  <p class="font-bold">{title}</p>
  <p class="text-sm">{content}</p>
</div>
