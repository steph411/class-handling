<script>
  import Classes from "./components/Classes.svelte";
  import Students from "./components/Students.svelte";
  import Recap from "./components/Recap.svelte";
</script>

<style>
  section {
    height: 100vh;
    width: 100vw;
    padding: 1rem;
    box-sizing: border-box;
  }
  div {
    display: grid;
    grid-template-columns: 15% 25% 1fr;
    border-radius: 12px;
    background: linear-gradient(145deg, #ffffff, #e6e6e6);
    box-shadow: 19px 19px 39px #cccccc, -19px -19px 39px #ffffff;
    width: 100%;
    height: 100%;
  }
</style>

<section>
  <div>

    <Classes />
    <Students />
    <Recap />
  </div>
</section>
