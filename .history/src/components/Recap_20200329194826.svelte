<script>
  import Rule from "../components/Rule.svelte";
  import Input from "../components/Input.svelte";

  import {
    selectedStudentId,
    studentsStore,
    classesStore,
    loading
  } from "../store/main.js";

  import { onMount } from "svelte";

  $: selectedStudent = $studentsStore.find(
    element => element.id == $selectedStudentId
  );
  $: studentName = (selectedStudent && `${selectedStudent.nom}`) || "";
  $: studentPrenom = (selectedStudent && `${selectedStudent.prenoms}`) || "";
  $: fail = selectedStudent && selectedStudent.moyenne < 10;
  $: console.log({ studentName, fail });

  // maybe make a mergeMap or combineLatest operation here for the streams of classes and notes from the
  // selected student to have the right value at the begenning, preferably in the store
  $: notes = $classesStore.map(element => ({
    nom: element.nom,
    value:
      (selectedStudent &&
        selectedStudent.notes &&
        selectedStudent.notes.find(el => el.nom == element.nom)) ||
      0,
    coefficient: element.coefficient
  }));
  let average;
  $: undefinedAverage = average == undefined;
  onMount(() => {});
  const computeAverage = () => {
    let sumNotes = notes.reduce(
      (acc, curr) => acc + curr.value * curr.coefficient,
      0
    );
    let sumCoeff = notes.reduce((acc, curr) => acc + curr.coefficient, 0);
    return sumNotes / sumCoeff;
  };
  const onChange = event => {
    let obj = notes.find(el => el.nom == event.target.id);
    obj.value = event.target.value;
    notes = [...notes];
    average = computeAverage();
  };

  const handleSave = event => {
    event.preventDefault();
    studentsStore.update(selectedStudent.id, {
      notes: notes,
      moyenne: average
    });
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
    overflow-x: hidden;
  }
  .save_buttons {
    display: flex;
    justify-content: space-between;
  }
  .undefindedAverage {
    display: none;
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
      {(selectedStudent && selectedStudent.moyenne) || ''}
    </span>
  </h2>
  <Rule />
  <div class=" notes_list">

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
        <span class="font-medium text-gray-600 ">
          {(selectedStudent && selectedStudent.notes.find(el => el.nom == item.nom).value) || 0}
        </span>
      </div>
      <Rule />
    {/each}
  </div>
  <div class="p-8 save_buttons">
    <span
      class="text-2xl "
      class:text-red-500={average < 10}
      class:text-green-500={average >= 10}>

      <span class="text-gray-600 capitalize">Moyenne:</span>
      <span class:undefindedAverage={undefinedAverage}>{average}</span>
    </span>
    <div>
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
</div>
