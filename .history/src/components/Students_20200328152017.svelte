<script>
  import Input from "./Input.svelte";
  import Rule from "./Rule.svelte";

  let studentAttributes = ["noms", "prenoms", "age", "moyenne"];
  let students = [
    {
      nom: "etaba andela",
      prenoms: "lionel stephane",
      age: 26,
      moyenne: 16.5
    },
    {
      nom: "Marjory",
      prenoms: " Okuneva",
      age: 17,
      moyenne: 12.5
    },
    {
      nom: "Aric ",
      prenoms: "Macejkovic",
      age: 22,
      moyenne: 11
    },
    {
      nom: "etaba andela",
      prenoms: "lionel stephane",
      age: 26,
      moyenne: 16.5
    },
    {
      nom: "shields",
      prenoms: "Jena",
      age: 18,
      moyenne: 15.5
    },
    {
      nom: "Harman Lima",
      prenoms: "Roberto",
      age: 28,
      moyenne: 13.5
    },
    {
      nom: "Ledner",
      prenoms: "Garrison",
      age: 16,
      moyenne: 15.5
    },
    {
      nom: "Stanton",
      prenoms: "Ebba",
      age: 14,
      moyenne: 16.5
    },
    {
      nom: "Collier",
      prenoms: "Bud",
      age: 120,
      moyenne: 12.5
    },
    {
      nom: "Kunze",
      prenoms: "Walter",
      age: 15,
      moyenne: 17.5
    }
  ];
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
  {#each students as item, indexStud}
    <!-- content here -->

    <div class="student_container" key={indexStud}>
      {#each studentAttributes as attr, indexAttr}
        <!-- content here -->
        <p class="flex justify-between " key={indexAttr}>
          <span class="text-lg text-gray-600 ">{attr}</span>
          <span class="text-lg text-gray-600 text-blue-300 ">{item[attr]}</span>
        </p>
      {/each}
    </div>
  {/each}

</div>
