<script>

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
    background: rgba(0, 0, 0, 0.3);
  }

  .content {
    width: 10rem;
    height: 20rem;
  }
</style>

<div class="modal">
  <div class="content">

    <slot />
  </div>

</div>
