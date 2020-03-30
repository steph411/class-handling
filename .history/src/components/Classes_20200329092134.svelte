<script>
  import Rule from "./Rule.svelte";
  import Modal from "./Modal.svelte";
  import Input from "./Input.svelte";
  import { classes, modal } from "../store/main.js";

  const classAttributes = ["nom", "coefficient", "professeur"];
  const handleAddClasses = () => {
    modal.set(true);
    console.log("adding classes");
  };
</script>

<style>
  button {
    border-radius: 100%;
  }
</style>

<div class="p-2 border-r-2 border-gray-500 border-solid">

  <h2 class="p-3 text-xl text-center text-gray-700 capitalize">classes</h2>
  <Rule />
  <input
    class="block w-full px-4 py-2 my-2 leading-normal bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:shadow-outline"
    type="text"
    id="search"
    placeholder="search" />

  <Rule />

  <!-- content here -->

  <table class="w-full table-auto">
    <thead>
      <tr class="w-full">
        <th class="w-1/2 px-4 py-2 text-left text-gray-700">Nom</th>
        <th class="w-1/2 px-4 py-2 text-left text-gray-700">Coefficient</th>
      </tr>
    </thead>
    <tbody>
      {#each $classes as item}
        <tr class="w-full border-t border-b cursor-pointer hover:bg-gray-100">
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
  <div class="flex justify-end mt-32">

    <button
      on:click={handleAddClasses}
      class="px-4 py-2 font-bold text-white bg-blue-500 button_add hover:bg-blue-700 hover:shadow-md">
      +
    </button>
  </div>
  <Modal>
    {#each classAttributes as item}
      <div class="p-4 ">

        <label class="text-gray-500 " for={item}>{item}</label>
        <Input placeholder={item} id={item} />
      </div>
    {/each}
    <button
      class="px-4 py-2 font-bold text-white capitalize bg-blue-500 rounded hover:bg-blue-700">
      ajouter
    </button>
  </Modal>
</div>
