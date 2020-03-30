<script>
  import { selectedStudentId, students } from "../store/main.js";
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
  <hr />
  <h2 class="p-3 text-xl text-left text-gray-600 uppercase">
    {studentName}
    <span capitalize text-xl text-gray-600>{studentPrenom}</span>
  </h2>
</div>
