<script>
  import { selectedStudentId, students } from "../store/main.js";
  let selectedStudent = $students.find(
    element => element.id == selectedStudentId
  );
  let studentName = (selectedStudent && selectedStudent.nom) || "";
</script>

<style>

</style>

<div class="p-2">

  <h2 class="p-3 text-xl text-center text-gray-700">Recap</h2>
  <hr />
  <h2 class="p-3 text-xl text-center text-blue-800">{studentName}</h2>
</div>
