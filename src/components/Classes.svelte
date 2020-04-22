<script>
  import Rule from "./Rule.svelte";
  import Modal from "./Modal.svelte";
  import Input from "./Input.svelte";
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";

  import { classesStore, loading } from "../store/main.js";
  import { database } from "../firebase.js";

  $: classes = $classesStore;

  onMount(() => {
    loading.set(true);
    classesStore.getData();
  });
  let visible = false;
  const classAttributes = ["nom", "description", "coefficient", "professeur"];
  const handlToggleModal = () => {
    visible = true;
  };
  let newClass = { nom: "", coefficient: 1, professeur: "", description: "" };

  const hanldeChange = event => {
    newClass[event.target.id] = event.target.value;
    newClass = { ...newClass };
  };

  const handleSearch = event => {
    classes = $classesStore.filter(el =>
      el.nom.toLowerCase().includes(event.target.value.toLowerCase())
    );
  };

  const handleAddClasses = () => {
    loading.set(true);
    console.log("adding class...");
    classesStore.add(newClass);
    visible = false;
    console.log($loading);
  };
</script>

<div class="p-2 border-r-2 border-gray-500 border-solid">

  <h2 class="p-3 text-xl text-center text-gray-700 capitalize">classes</h2>
  <Rule />
  <input
    class="block w-full px-4 py-2 my-2 leading-normal bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:shadow-outline"
    type="text"
    id="search"
    on:input={handleSearch}
    placeholder="search" />

  <Rule />

  <!-- {@debug classes, database} -->
  <!-- content here -->
  <div class="table_container">
    <table class="w-full">
      <thead>
        <tr class="w-full">
          <th class="w-1/2 px-4 py-2 text-left text-gray-700">Nom</th>
          <th class="w-1/2 px-4 py-2 text-left text-gray-700">Coefficient</th>
        </tr>
      </thead>
      <tbody>
        {#each classes as item}
          <tr
            in:fly={{ x: 100, duration: 300 }}
            class="w-full border-t border-b cursor-pointer hover:bg-gray-100">
            <td class="w-1/2 px-4 py-4 text-left text-gray-600 capitalize">
              {item.nom}
            </td>
            <td class="w-1/2 px-4 py-4 text-left text-blue-400 text">
              {item.coefficient}
            </td>
          </tr>
        {/each}

      </tbody>
    </table>
  </div>
  <div class="flex justify-end mt-8">



    
    <button
      on:click={handlToggleModal}
      class="px-4 py-2 font-bold text-white bg-blue-500 add_button button_add hover:bg-blue-700 hover:shadow-md">
      +
    </button>
  </div>
  <Modal bind:visible>
    {#each classAttributes as item}
      <div class="p-2 text-left capitalize ">

        <label class="text-gray-500 " for={item}>{item}</label>
        <Input onChange={hanldeChange} placeholder={item} id={item} />
      </div>
    {/each}
    <div class="flex items-end pt-4 pl-1">
      <button
        on:click|preventDefault={handleAddClasses}
        class="px-4 py-2 font-bold text-white capitalize bg-blue-500 rounded-lg hover:bg-blue-700">
        ajouter
      </button>

    </div>
  </Modal>
</div>

<style>
  .add_button {
    border-radius: 100%;
  }
  .table_container {
    height: 73%;
    max-height: 93%;
    overflow-y: scroll;
    overflow-x: hidden;
  }
</style>
