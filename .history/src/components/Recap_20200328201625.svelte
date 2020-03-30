<script>
  import Rule from "../components/Rule.svelte";
  import Input from "../components/Input.svelte";
  import { selectedStudentId, students, classes } from "../store/main.js";

  $: selectedStudent = $students.find(
    element => element.id == $selectedStudentId
  );
  $: studentName = (selectedStudent && `${selectedStudent.nom}`) || "";
  $: studentPrenom = (selectedStudent && `${selectedStudent.prenoms}`) || "";
  $: fail = selectedStudent.moyenne < 10;
  $: console.log({ studentName, fail });

  $: notes = $classes.map(element => ({ nom: element.nom, value: 0 }));

  const onChange = event => {
    let obj = notes.find(el => el.nom == event.target.id);
    obj.value = event.target.value;
    console.log({ obj, notes });
  };

  const handleSave = event => {
    event.preventDefault();
    console.log(notes);
  };
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
    max-height: 70vh;
    overflow-y: scroll;
    width: 100%;
  }
  .save_buttons {
    display: flex;
    justify-content: end;
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

    {#each notes as item}
      <!-- content here -->
      <div class="w-full notes_input">
        <span class="pl-4 font-bold text-gray-600 capitalize class_name">
          {item['nom']}
        </span>
        <Input
          placeholder="note"
          classes="input_classes"
          id={item.nom}
          val={''}
          {onChange} />
        <span class="text-gray-600 ">{item['value']}</span>
      </div>
      <Rule />
    {/each}
  </div>
  <div class="p-8 save_buttons">
    <button
      on:click={handleSave}
      class="px-4 py-2 mr-4 font-bold text-gray-500 bg-white rounded hover:bg-grey-200">
      annuler
    </button>
    <button
      on:click={handleSave}
      class="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
      sauvegarder
    </button>
  </div>
</div>
