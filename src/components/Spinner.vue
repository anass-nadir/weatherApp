<template>
  <div :class="[{ dark: darkMode }, 'spinner-overlay']">
    <div class="spinner-container" />
  </div>
</template>

<script>
  export default {
    name: 'Spinner',
    computed: {
      darkMode() {
        return this.$store.getters.darkMode;
      }
    }
  };
</script>

<style scoped>
  .spinner-overlay {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0.5;
    z-index: 99;
  }
  .spinner-overlay.dark {
    background: linear-gradient(to bottom, #372865, #000000);
  }
  .spinner-container {
    display: inline-block;
    width: 50px;
    height: 50px;
    border: 3px solid rgb(195, 195, 195);
    border-radius: 50%;
    border-top-color: #636767;
    animation: spin 1s ease-in-out infinite;
    -webkit-animation: spin 1s ease-in-out infinite;
  }
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }

  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
</style>
