<template>
  <div class="error-wrapper" :class="{ 'error-wrapper-active': message }">
    <span class="error-message">{{ message }}</span>
    <button @click="$emit('hide-banner')" class="error-btn">GOT IT</button>
  </div>
</template>

<script>
  export default {
    props: {
      message: {
        type: String,
        required: true
      }
    }
  };
</script>

<style scoped>
  .error-wrapper {
    position: fixed;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 5rem);
    width: 70%;
    background-color: crimson;
    color: white;
    height: 4rem;
    border-radius: 0.25rem 0.25rem 0 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 3rem;
    transition: transform 1s ease-in-out;
    z-index: 9;
  }

  .error-wrapper-active {
    transform: translate(-50%, 0);
  }

  .error-message {
    font-size: 1.25rem;
    letter-spacing: 0.1rem;
    text-transform: capitalize;
    line-height: 1.25rem;
    display: block;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 80%;
  }

  .error-btn {
    outline: none;
    border: none;
    padding: 1rem 1.5rem;
    background-color: rgba(255, 255, 255, 0.3);
    font-size: 1rem;
    font-weight: bold;
    color: white;
  }
  @media screen and (max-width: 959px) {
    .error-wrapper {
      padding: 20px;
      height: fit-content;
      width: fit-content;
    }
    .error-message {
      font-size: 1rem;
      width: auto;
      letter-spacing: 0;
      white-space: normal;
    }
  }
</style>
