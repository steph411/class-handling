<script>
  import Input from "./Input.svelte";
  import Rule from "./Rule.svelte";
  import { students } from "../store/main.js";
  import { selectedStudentId } from "../store/main.js";
  let studentAttributes = ["nom", "prenoms", "age", "moyenne"];

  const handleSelectStudent = event => {
    console.log(event.target.id);
    selectedStudentId.set(Number(event.target.id));
  };
</script>

<style>
  .student_container {
    min-height: 8rem;
    position: relative;
  }

  .student_list_container {
    max-height: 80vh;
  }
</style>

<div class="p-2 border-r-2 border-gray-500">

  <h2 class="p-3 text-xl text-center text-gray-700 ">Students</h2>
  <Rule />
  <Input />
  <Rule />
  <div class="overflow-y-scroll student_list_container ">

    {#each $students as item, indexStud}
      <!-- content here -->
      <div
        class:bg-blue-200={$selectedStudentId == item.id}
        class="p-2 border-t border-b border-gray-500 border-solid cursor-pointer hover:bg-gray-100 student_container"
        key={indexStud}
        on:click={handleSelectStudent}
        id={`${item.id}`}>
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

</div>
