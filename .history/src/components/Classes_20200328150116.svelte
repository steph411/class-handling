<script>
  let classes = [
    { nom: "maths", description: "maths", coefficient: 4, professeur: "prof" },
    {
      nom: "anglais",
      description: "anglais",
      coefficient: 2,
      professeur: "prof"
    },
    {
      nom: "français",
      description: "français",
      coefficient: 3,
      professeur: "prof"
    },
    {
      nom: "espagnol",
      description: "espagnol",
      coefficient: 2,
      professeur: "prof"
    },
    {
      nom: "littérature",
      description: "littérature",
      coefficient: 2,
      professeur: "prof"
    },
    {
      nom: "physique",
      description: "physique",
      coefficient: 4,
      professeur: "prof"
    },
    {
      nom: "chimie",
      description: "chimie",
      coefficient: 3,
      professeur: "prof"
    },
    {
      nom: "chimie",
      description: "chimie",
      coefficient: 3,
      professeur: "prof"
    },
    {
      nom: "chimie",
      description: "chimie",
      coefficient: 3,
      professeur: "prof"
    },
    {
      nom: "SVT",
      description: "sciences naturelles",
      coefficient: 5,
      professeur: "prof"
    }
  ];
</script>

<style>

</style>

<div class="p-2 border-r-2 border-gray-500 border-solid">

  <h2 class="p-3 text-xl text-center text-gray-700">classes</h2>
  <hr class="w-full" />
  <input
    class="block w-full px-4 py-2 my-2 leading-normal bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:shadow-outline"
    type="text"
    placeholder="search" />
  <hr />

  <!-- content here -->

  <table class="w-full table-auto">
    <thead>
      <tr class="w-full">
        <th class="w-1/2 px-4 py-2 text-left">Nom</th>
        <th class="w-1/2 px-4 py-2 text-left">Coefficient</th>
      </tr>
    </thead>
    <tbody>
      {#each classes as item}
        <tr class="w-full border-t border-b cursor-pointer hover:bg-blue-100">
          <td class="w-1/2 px-4 py-4 text-left capitalize">{item.nom}</td>
          <td class="w-1/2 px-4 py-4 text-left text-blue-400 text">
            {item.coefficient}
          </td>
        </tr>
      {/each}

    </tbody>
  </table>
  <!-- <div class="flex justify-between ">
      <div>
        <h3 class="text-lg text-gray-600 ">Nom</h3>
        <br />
        <p class="text-blue-400 ">{item.nom}</p>
      </div>
      <div>
        <h3 class="text-lg text-gray-600 ">coefficient</h3>
        <br />
        <p class="text-blue-400 ">{item.coefficient}</p>
      </div>
    </div> -->
</div>
