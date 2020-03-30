<script>
  import { modal } from "../store/main.js";
  const handleClose = event => {
    if (!(event.target.id == "content")) {
      modal.set(false);
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

<div class="modal" on:click|preventDefault={handleClose}>
  <div class="content" id="content">

    <slot />
  </div>

</div>
