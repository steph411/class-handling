<script>
  import { selectedStudentId, students } from "../store/main.js";
  import Rule from "../components/Rule.svelte";

  let selectedStudent = $students.find(
    element => element.id == $selectedStudentId
  );
  $: studentName = (selectedStudent && `${selectedStudent.nom}`) || "";
  $: studentPrenom = (selectedStudent && `${selectedStudent.prenoms}`) || "";
</script>

<style>

</style>

<div class="p-2">

  <h2 class="p-3 text-xl text-center text-gray-700">Recap</h2>
  <Rule />
  <h2
    class="flex items-center justify-between p-3 text-xl text-left text-gray-600 uppercase">
    <span>
      {studentName}
      <span class="text-xl text-gray-600 capitalize">{studentPrenom}</span>
    </span>
    <span class="p-2 text-2xl align-middle">{selectedStudent.moyenne}</span>
  </h2>
  <Rule />
</div>
