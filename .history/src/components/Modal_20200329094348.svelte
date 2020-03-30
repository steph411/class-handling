<script>
  import { modal } from "../store/main.js";
  export let visible = false;
  const handleClose = event => {
    console.log(event);
    if (event.target.id != "content") {
      visible = false;
    }
  };
</script>

<style>
  .modal {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: grid;
    place-items: center;
    background: rgba(0, 0, 0, 0.7);
    z-index: 1000;
    display: none;
  }

  .visible {
    display: grid;
  }
  .content {
    width: 25rem;
    height: 35rem;
    background: white;
    border-radius: 10px;
    padding: 2rem;
    text-align: center;
  }
</style>

<div class="modal" on:click|preventDefault={handleClose} class:visible>
  <div class="content" id="content">

    <slot />
  </div>

</div>
