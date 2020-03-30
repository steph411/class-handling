<script>
  import Input from "./Input.svelte";
  import Rule from "./Rule.svelte";

  let studentAttributes = ["nom", "prenoms", "age", "moyenne"];
  let students = [
    {
      id: 1,
      nom: "etaba andela",
      prenoms: "lionel stephane",
      age: 26,
      moyenne: 16.5
    },
    {
      id: 2,
      nom: "Marjory",
      prenoms: " Okuneva",
      age: 17,
      moyenne: 12.5
    },
    {
      id: 3,
      nom: "Aric ",
      prenoms: "Macejkovic",
      age: 22,
      moyenne: 11
    },
    {
      id: 4,
      nom: "etaba andela",
      prenoms: "lionel stephane",
      age: 26,
      moyenne: 16.5
    },
    {
      id: 5,
      nom: "shields",
      prenoms: "Jena",
      age: 18,
      moyenne: 15.5
    },
    {
      id: 6,
      nom: "Harman Lima",
      prenoms: "Roberto",
      age: 28,
      moyenne: 13.5
    },
    {
      id: 7,
      nom: "Ledner",
      prenoms: "Garrison",
      age: 16,
      moyenne: 15.5
    },
    {
      id: 8,
      nom: "Stanton",
      prenoms: "Ebba",
      age: 14,
      moyenne: 16.5
    },
    {
      id: 9,
      nom: "Collier",
      prenoms: "Bud",
      age: 120,
      moyenne: 12.5
    },
    {
      id: 10,
      nom: "Kunze",
      prenoms: "Walter",
      age: 15,
      moyenne: 17.5
    }
  ];
  let selectedStudentId = 1;
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

    {#each students as item, indexStud}
      <!-- content here -->
      <div
        class:bg-blue-200={selectedStudentId == item.id}
        class="p-2 border-t border-b border-gray-500 border-solid cursor-pointer hover:bg-gray-100 student_container"
        key={indexStud}>
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
