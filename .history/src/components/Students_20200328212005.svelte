<script>
  import Input from "./Input.svelte";
  import Rule from "./Rule.svelte";
  import { students } from "../store/main.js";
  import { selectedStudentId } from "../store/main.js";
  let studentAttributes = ["nom", "prenoms", "age", "moyenne"];

  const handleSelectStudent = event => {
    event.preventDefault();
    selectedStudentId.set(event.currentTarget.id);
    console.log($selectedStudentId);
    // selectedStudentId.set(event.target.id);
  };

  const handleAddStudents = () => {
    console.log("adding classes...");
  };
</script>

<style>
  .student_container {
    min-height: 8rem;
    position: relative;
    transition: all 200ms ease;
  }

  .student_list_container {
    max-height: 75vh;
  }
  .button_add {
    border-radius: 100%;
  }
</style>

<div class="p-2 border-r-2 border-gray-500">

  <h2 class="p-3 text-xl text-center text-gray-700 ">Students</h2>
  <Rule />
  <Input id="search-students" />
  <Rule />
  <div class="overflow-y-scroll student_list_container ">

    {#each $students as item, indexStud}
      <!-- content here -->
      <div
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
      on:click={handleAddStudents}
      class="px-4 py-2 font-bold text-white bg-blue-500 button_add hover:bg-blue-700 hover:shadow-md">
      +
    </button>
  </div>

</div>
