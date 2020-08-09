<template>
  <aside
    :class="[
      { 'side-menu__container-active': showMenu },
      'side-menu__container'
    ]"
    @click="toggleMenu"
  >
    <nav
      :class="[
        {
          'slide-menu-active': showMenu,
          'slide-menu-active-dark': darkModeActive
        },
        'slide-menu'
      ]"
    >
      <section :class="[{ 'menu-header-dark': darkModeActive }, 'menu-header']">
        <span class="greeting__text">Welcome Back</span>
        <template v-if="userEmail">
          <div class="profile-image__container">
            <img
              src="https://www.jamf.com/jamf-nation/img/default-avatars/generic-user-purple.png"
              alt="profile-image"
              class="profile__image"
            />
          </div>
          <div class="account-details">
            <span class="name__text">{{ userEmail }}</span>
            <span class="email__text">Free Plan</span>
          </div>
        </template>
      </section>
      <section class="menu-body">
        <ul
          v-if="userEmail"
          :class="[{ 'menu-links-dark': darkModeActive }, 'menu-links']"
        >
          <router-link
            tag="li"
            class="menu-link"
            exact-active-class="link-active"
            @click="toggleMenu"
            to="/"
            >Home</router-link
          >
          <router-link
            class="menu-link"
            exact-active-class="link-active"
            @click="toggleMenu"
            tag="li"
            to="/add"
            >Add City</router-link
          >
          <li @click="logout" class="menu-link">Logout</li>
        </ul>
        <ul
          v-else
          :class="[{ 'menu-links-dark': darkModeActive }, 'menu-links']"
        >
          <router-link
            tag="li"
            class="menu-link"
            exact-active-class="link-active"
            @click="toggleMenu"
            to="/login"
            >Login</router-link
          >
        </ul>
      </section>
      <section class="menu-footer">
        <small class="copyright__text"
          >Copyright © {{ new Date().getFullYear() }}</small
        >
      </section>
    </nav>
  </aside>
</template>

<script>
  import firebase from 'firebase/app';

  export default {
    props: ['toggleMenu', 'showMenu', 'darkModeActive'],
    computed: {
      userEmail() {
        return this.$store.getters.user?.email || null;
      }
    },
    methods: {
      logout() {
        firebase
          .auth()
          .signOut()
          .then(() => {
            this.$store.dispatch('fetchUser');
            this.$nextTick(() =>
              this.$router.push({
                path: '/login'
              })
            );
          });
      }
    }
  };
</script>

<style>
  .side-menu__container {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    overflow: hidden;
    pointer-events: none;
    z-index: 50;
  }

  .side-menu__container-active {
    pointer-events: auto;
  }

  .side-menu__container::before {
    content: '';
    cursor: pointer;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #0c1066;
    opacity: 0;
    transition: opacity 300ms linear;
    will-change: opacity;
  }

  .side-menu__container-active::before {
    opacity: 0.3;
  }
  .slide-menu {
    box-sizing: border-box;
    transform: translateX(-200%);
    position: relative;
    top: 0;
    left: 0;
    z-index: 50;
    min-height: 100vh;
    width: 90%;
    max-width: 26rem;
    background-color: white;
    box-shadow: 0 0 2rem rgba(0, 0, 255, 0.1);
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 2fr 4fr 1fr;
    grid-gap: 1rem;
    transition: transform 300ms linear;
    will-change: transform;
  }

  .slide-menu-active {
    transform: none;
  }

  .slide-menu-active-dark {
    background-color: #2b244d;
  }
  .menu-header {
    background: linear-gradient(to right, #00ff9b, #5f84fb);
    display: grid;
    grid-template-rows: 1fr 4fr;
    grid-template-columns: 1fr 4fr;
    grid-template-areas: 'greeting greeting' 'image details';
    box-sizing: border-box;
    width: 100%;
    align-content: center;
    color: white;
    box-shadow: 0 0.5rem 2rem rgba(0, 0, 255, 0.2);
  }

  .menu-header-dark {
    background: linear-gradient(to top, #30cfd0 0%, #330867 100%);
  }
  .greeting__text {
    grid-area: greeting;
    font-size: 1.25rem;
    letter-spacing: 0.15rem;
    text-transform: uppercase;
    margin-top: 1rem;
    justify-self: center;
    align-self: center;
  }
  .account-details {
    grid-area: details;
    display: flex;
    flex-flow: column;
    margin-left: 1rem;
    align-self: center;
  }

  .name__text {
    font-size: 1.15rem;
    margin-bottom: 0.5rem;
  }

  .email__text {
    font-size: 0.9rem;
    letter-spacing: 0.1rem;
  }

  .menu-body {
    display: grid;
    width: 100%;
  }

  .menu-links {
    display: flex;
    flex-flow: column;
    list-style: none;
  }
  .menu-links-dark {
    color: white;
  }

  .link-active {
    color: #495cfc;
    border-bottom: 1px solid #495cfc;
  }

  .menu-link {
    outline: none;
    font-size: 1rem;
    padding: 1rem 0;
    margin: 0.5rem 0;
    cursor: pointer;
  }

  .profile-image__container {
    grid-area: image;
    margin-right: 0.5rem;
    border-radius: 50%;
    height: 4rem;
    width: 4rem;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    align-self: center;
    margin-left: 2rem;
  }

  .profile__image {
    max-width: 4rem;
  }
  @media only screen and (max-width: 300px) {
    .slide-menu {
      width: 100%;
    }
  }
</style>
