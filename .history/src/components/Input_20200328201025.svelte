<script>
  export let classes = "";
  export let placeholder = "search";
  export let val = "";
  export let onChange = e => console.log(e);
  export let id;
</script>

<style>

</style>

<input
  class={` ${classes} block w-full px-4 py-2 my-2 leading-normal bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:shadow-outline`}
  type="text"
  {id}
  on:change={onChange}
  {placeholder} />

<!-- bind:value={val} -->
