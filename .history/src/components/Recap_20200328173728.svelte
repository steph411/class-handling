<script>
  import { selectedStudentId, students } from "../store/main.js";
  let selectedStudent = $students.find(
    element => element.id == $selectedStudentId
  );
  $: studentName = (selectedStudent && `${selectedStudent.nom}`) || "";
</script>

<style>

</style>

<div class="p-2">

  <h2 class="p-3 text-xl text-center text-gray-700">Recap</h2>
  <hr />
  <h2 class="p-3 text-xl text-left text-green-500 uppercase">{studentName}</h2>
</div>
