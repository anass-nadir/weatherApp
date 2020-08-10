<template>
  <div>
    <Menu
      :showMenu="showMenu"
      :toggleMenu="toggleMenu"
      :darkModeActive="darkModeActive"
    />
    <main
      :class="[{ 'root__container-dark': darkModeActive }, 'root__container']"
    >
      <header
        :class="[{ 'main__header-dark': darkModeActive }, 'main__header']"
        v-if="loggedIn"
      >
        <div class="left__section">
          <svg
            @click="toggleMenu"
            class="hamburger__icon"
            id="Menu_Burger_Icon"
            data-name="Menu Burger Icon"
            viewBox="31.5 30 49.9 32"
          >
            <defs />
            <rect
              id="Rectangle_9"
              width="49.9"
              height="4"
              :class="[
                { 'hamburger__icon__fill-dark': darkModeActive },
                'hamburger__icon__fill'
              ]"
              data-name="Rectangle 9"
              rx="2"
              transform="translate(31.5 58)"
            />
            <rect
              id="Rectangle_10"
              width="49.9"
              height="4"
              :class="[
                { 'hamburger__icon__fill-dark': darkModeActive },
                'hamburger__icon__fill'
              ]"
              data-name="Rectangle 10"
              rx="2"
              transform="translate(31.5 44)"
            />
            <rect
              id="Rectangle_11"
              width="49.9"
              height="4"
              :class="[
                { 'hamburger__icon__fill-dark': darkModeActive },
                'hamburger__icon__fill'
              ]"
              data-name="Rectangle 11"
              rx="2"
              transform="translate(31.5 30)"
            />
          </svg>
        </div>

        <h3 class="date__text">Today</h3>

        <div class="mode-toggle__container">
          <span class="mode-toggle__text">Light</span>

          <label class="toggle-button__container">
            <input
              @click="$store.commit('SWITCH_DARK_MODE')"
              type="checkbox"
              class="mode-toggle__input"
            />
            <span
              :class="[
                { 'mode-toggle__bg-checked': darkModeActive },
                'mode-toggle__bg'
              ]"
            ></span>
            <span
              :class="[
                { 'mode-toggle__circle-checked': darkModeActive },
                'mode-toggle__circle'
              ]"
            ></span>
          </label>

          <span class="mode-toggle__text">Dark</span>
        </div>
      </header>
      <div class="main-container__bg">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script>
  import Menu from './components/Menu';
  export default {
    name: 'App',
    components: {
      Menu
    },
    data() {
      return {
        showMenu: false,
        userEmail: '',
        loggedIn: true
      };
    },
    computed: {
      darkModeActive() {
        return this.$store.getters.darkMode;
      }
    },
    methods: {
      toggleMenu() {
        this.showMenu = !this.showMenu;
      }
    }
  };
</script>

<style>
  body {
    font-family: sans-serif;
    margin: 0;
    padding: 0;
    min-height: 100vh;
    width: 100vw;
    overflow-x: hidden;
  }
  .root__container {
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    flex-flow: column;
    transition: background 300ms linear;
    background-image: linear-gradient(to top, #5ee7df 0%, #66a6ff 100%);
  }

  .root__container-dark {
    background: linear-gradient(to bottom, #372865, #000000);
  }
  /*Header*/
  .main__header {
    background-color: #fff;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 0.25fr;
    box-shadow: 0 0 2rem rgba(0, 0, 255, 0.1);
    margin: 0;
    min-height: 4rem;
    align-items: center;
    animation: slidedown 0.5s ease-in-out, fadein 1s ease-in-out;
  }

  .main__header-dark {
    background-color: #2b244d;
    color: white;
  }

  .toggle-button__container {
    cursor: pointer;
    position: relative;
    margin: 0 0.75rem 0 0.25rem;
    display: inline-flex;
  }

  .mode-toggle__container {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
  }

  .mode-toggle__input {
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  .mode-toggle__bg {
    height: 1rem;
    width: 2rem;
    border-radius: 0.5rem;
    background-color: rgba(0, 0, 0, 0.5);
    display: inline-block;
    transition: background-color 300ms linear;
  }

  .mode-toggle__circle {
    height: 1.3rem;
    width: 1.3rem;
    background-color: #2b244d;
    position: absolute;
    top: -0.18rem;
    border-radius: 50%;
    box-shadow: 0 0 0 rgba(0, 0, 255, 0.5);
    transition: left 300ms linear;
    left: 0.2rem;
  }

  .mode-toggle__circle-checked {
    background-color: white;
    left: 1.5rem;
  }

  .mode-toggle__bg-checked {
    background-color: #ff0070;
  }

  .mode-toggle__text {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
  }

  /*Content*/
  .left__section {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    max-width: 5rem;
  }

  .date__text {
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    display: inline;
    margin: 0.5rem 0;
  }

  /*SVGs*/
  .hamburger__icon {
    position: relative;
    z-index: 50;
    height: 1rem;
    padding: 0.5rem 1.5rem;
    margin-right: 1rem;
    cursor: pointer;
  }

  .hamburger__icon__fill {
    fill: #2b244d;
  }

  .hamburger__icon__fill-dark {
    fill: #ffff;
  }

  /*
================
    Body
================
*/
  .main-container__bg {
    min-height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .copyright__text {
    display: block;
    text-align: center;
  }
  @media screen and (max-width: 959px) {
    .main__header {
      grid-template-columns: 1fr;
      justify-items: center;
      padding: 1rem 0;
      min-height: 8rem;
    }

    .left__section {
      justify-self: start;
      max-width: none;
      grid-template-columns: 0 5fr;
      width: 100%;
    }

    .hamburger__icon {
      margin-right: 0;
    }

    .menu-header {
      display: flex;
      flex-wrap: wrap;
      flex-flow: column;
      align-items: center;
      justify-content: space-around;
    }
  }

  .hamburger__icon__fill {
    fill: #594e78;
  }
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slidedown {
    from {
      transform: translateY(-25%);
    }
    to {
      transform: translateY(0);
    }
  }

  @keyframes slideup {
    from {
      transform: translateY(50%);
    }
    to {
      transform: translateY(0);
    }
  }
</style>
