<script>
  import { selectedStudentId, students } from "../store/main.js";
  let selectedStudent = $students.find(
    element => element.id == $selectedStudentId
  );
  $: studentName = (selectedStudent && selectedStudent.nom) || "not yet";
</script>

<style>

</style>

<div class="p-2">

  <h2 class="p-3 text-xl text-center text-gray-700">Recap</h2>
  <hr />
  <h2 class="p-3 text-xl text-center text-green-500">{studentName}</h2>
</div>
