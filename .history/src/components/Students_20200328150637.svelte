<script>
  import Input from "./Input.svelte";
  import Rule from "./Rule.svelte";
</script>

<style>
  .student_container {
    min-height: 8rem;
  }
</style>

<div class="p-2 border-r-2 border-gray-500">

  <h2 class="p-3 text-xl text-center text-gray-700 ">Students</h2>
  <Rule />
  <Input />
  <Rule />

  <div class="student_container" />

</div>
