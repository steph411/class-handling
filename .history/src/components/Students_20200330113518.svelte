<script>
  import Input from "./Input.svelte";
  import Rule from "./Rule.svelte";
  import Modal from "./Modal.svelte";
  import { fly } from "svelte/transition";

  import { onMount } from "svelte";
  import { studentsStore, selectedStudentId, loading } from "../store/main.js";

  onMount(() => {
    loading.set(true);
    studentsStore.getData();
  });

  let studentAttributes = ["nom", "prenoms", "age", "moyenne"];

  let visible = false;
  $: students = $studentsStore;
  const handleSelectStudent = event => {
    event.preventDefault();
    selectedStudentId.set(event.currentTarget.id);
  };

  let newStudent = { nom: "", prenoms: 1, age: "", moyenne: undefined };

  const hanldeChange = event => {
    newStudent[event.target.id] = event.target.value;
    newStudent = { ...newStudent };
  };

  const handleSearch = event => {
    students = $studentsStore.filter(el => el.nom.includes(event.target.value));
  };

  const handleAddStudent = () => {
    studentsStore.add({
      ...newStudent,
      moyenne: 0,
      age: Number(newStudent.age),
      notes: [""]
    });
    visible = false;
  };
</script>

<div class="p-2 border-r-2 border-gray-500">

  <h2 class="p-3 text-xl text-center text-gray-700 ">Students</h2>
  <Rule />
  <Input id="search-students" onChange={handleSearch} />
  <Rule />
  <div class="overflow-y-scroll student_list_container ">

    {#each students as item, indexStud}
      <!-- content here -->
      <div
        in:fly={{ x: 100, duration: 300 }}
        class:bg-blue-200={$selectedStudentId == item.id}
        class="p-2 border-t border-b border-gray-500 border-solid rounded cursor-pointer student_container"
        key={indexStud}
        on:click={handleSelectStudent}
        id={item.id}>
        {#each studentAttributes as attr, indexAttr}
          <!-- content here -->
          <p class="flex justify-between p-1 " key={indexAttr}>
            <span class="text-gray-600 capitalize">{attr}:</span>
            <span class="text-base text-blue-400 capitalize ">
              {item[attr]}
            </span>
          </p>
        {/each}
      </div>
    {/each}

  </div>
  <div class="flex justify-end py-2">

    <button
      on:click={() => (visible = true)}
      class="px-4 py-2 font-bold text-white bg-blue-500 button_add hover:bg-blue-700 hover:shadow-md">
      +
    </button>
  </div>

  <Modal bind:visible>
    {#each studentAttributes.filter(attr => attr != 'moyenne') as item}
      <div class="p-2 text-left capitalize ">

        <label class="text-gray-500 " for={item}>{item}</label>
        <Input onChange={hanldeChange} placeholder={item} id={item} />
      </div>
    {/each}
    <div class="flex items-end pt-4 pl-1">
      <button
        on:click|preventDefault={handleAddStudent}
        class="px-4 py-2 font-bold text-white capitalize bg-blue-500 rounded-lg hover:bg-blue-700">
        ajouter
      </button>

    </div>
  </Modal>

</div>

<style>
  .student_container {
    min-height: 8rem;
    position: relative;
    transition: all 200ms ease;
  }

  .student_list_container {
    height: 72vh;
  }
  .button_add {
    border-radius: 100%;
  }
</style>
