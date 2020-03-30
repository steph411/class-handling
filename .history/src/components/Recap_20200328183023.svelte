<script>
  import Rule from "../components/Rule.svelte";
  import Input from "../components/Input.svelte";
  import { selectedStudentId, students, classes } from "../store/main.js";

  let selectedStudent = $students.find(
    element => element.id == $selectedStudentId
  );
  $: studentName = (selectedStudent && `${selectedStudent.nom}`) || "";
  $: studentPrenom = (selectedStudent && `${selectedStudent.prenoms}`) || "";
  $: fail = selectedStudent.moyenne < 10;
</script>

<style>
  .input_classes {
    flex-basis: 25%;
  }
  .class_name {
    justify-self: left;
  }
  .notes_input {
    display: grid;
    grid-template-columns: 1fr 20% 1fr;
    align-items: center;
    justify-items: center;
  }
  .notes_list {
    max-height: 80vh;
    overflow-y: scroll;
    width: 100%;
  }
  * {
    box-sizing: border-box;
  }
</style>

<div class="w-full p-2">

  <h2 class="p-3 text-xl text-center text-gray-700">Recap</h2>
  <Rule />
  <h2
    class="flex items-center justify-between p-3 text-xl text-left text-gray-600 uppercase">
    <span>
      {studentName}
      <span class="text-xl text-gray-600 capitalize">{studentPrenom}</span>
    </span>
    <span
      class="text-2xl align-middle"
      class:text-red-500={fail}
      class:text-green-500={!fail}>
      {selectedStudent.moyenne}
    </span>
  </h2>
  <Rule />
  <div class="w-full notes_list">

    {#each $classes as item}
      <!-- content here -->
      <div class="notes_input">
        <span class="font-bold text-gray-600 capitalize class_name">
          {item.nom}
        </span>
        <Input placeholder="note" classes="input_classes" />
        <span class="text-gray-600 ">{19}</span>
      </div>
      <Rule />
    {/each}
  </div>
</div>
