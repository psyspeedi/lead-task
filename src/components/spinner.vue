<template>
  <div class="spinner">
    <md-progress-spinner md-mode="indeterminate"></md-progress-spinner>
  </div>
</template>

<script>
  export default {
    name: 'Spinner'
  }
</script>

<style scoped>
  .spinner {
    position: absolute;
    top: 50%;
    left: 50%;
  }
</style>
