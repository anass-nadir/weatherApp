<template>
  <div class="main__container">
    <div class="signup-card">
      <main class="signup-content">
        <span class="signup-header">Signup</span>
        <form class="signup-form" @submit.prevent="signup">
          <input
            v-model="email"
            type="email"
            autofocus
            placeholder="Email"
            name="email"
            class="signup-input"
            required
            autocomplete
          />
          <input
            v-model="password"
            type="password"
            placeholder="Password"
            name="password"
            class="signup-input"
            minlength="6"
            required
            autocomplete
          />
          <input
            v-model="passwordConfirm"
            type="password"
            placeholder="Password Confirmation"
            class="signup-input"
            minlength="6"
            required
            autocomplete
          />
          <input
            type="submit"
            name="submit"
            value="Signup"
            class="signup-btn"
          />
        </form>
        <div class="login-link-wrapper">
          <span class="login-notice">Already Have an account?</span>
          <a class="login-link" @click="$router.push({ path: '/login' })"
            >login</a
          >
        </div>
      </main>
      <aside class="signup-aside">
        <div class="signup-aside-overlay"></div>
        <h1 class="signup-welcome-text">Welcome Back!</h1>
        <hr class="signup-aside-hr" />
      </aside>
    </div>
    <error v-if="error" @hide-banner="error = ''" :message="error" />
    <spinner v-if="loading" />
  </div>
</template>

<script>
  import firebase from 'firebase/app';
  import Error from '../components/Error';
  import Spinner from '../components/Spinner';
  export default {
    name: 'Register',
    components: { Error, Spinner },
    data() {
      return {
        email: '',
        password: '',
        passwordConfirm: '',
        error: '',
        loading: false
      };
    },
    methods: {
      signup() {
        if (!this.email || !this.password || !this.passwordConfirm) {
          this.error = 'please fill all the fields';
          return;
        } else if (this.password !== this.passwordConfirm) {
          this.error = 'passwords mismatch';
          return;
        }
        this.loading = true;
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .catch((err) => {
            this.error = err.message;
          })
          .finally(() => (this.loading = false));
      }
    }
  };
</script>

<style scoped>
  .main__container {
    min-height: 90vh;
    width: 90vw;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    margin: 20px 0;
  }

  .signup-card {
    position: relative;
    display: flex;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    width: 85%;
    min-height: 80vh;
    animation: fadein 1s ease-in-out;
  }

  .signup-header {
    display: block;
    margin-bottom: 2rem;
    font-size: 2.5rem;
    color: #0c1066;
    letter-spacing: 0.2rem;
    font-weight: bold;
    animation: slidedown 1.5s ease-in-out;
  }

  .signup-content {
    flex: 2 2;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    animation: fadein 1.5s ease-in-out;
    min-height: 100%;
    padding: 40px 0;
  }

  .signup-form {
    display: flex;
    flex-flow: column;
    width: 80%;
    align-items: center;
    animation: slidedown 2s ease-in-out;
  }

  .signup-aside {
    animation: fadein 2.25s ease-in-out;
    flex: 3 3;
    display: flex;
    justify-content: flex-end;
    flex-flow: column;
    min-height: 100%;
    border-radius: 0 10px 10px 0;
    background: url('https://source.unsplash.com/random/1200x900?mountain')
      no-repeat center center;
    background-size: cover;
    position: relative;
  }

  .signup-aside-overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.15);
    border-radius: 0 10px 10px 0;
  }

  .signup-aside-hr {
    height: 0.5rem;
    width: 8rem;
    border: none;
    outline: none;
    background-color: white;
    position: relative;
    z-index: 5;
    margin: 0 0 8rem 3rem;
    animation: slideright 4s ease-out;
  }

  .signup-welcome-text {
    color: white;
    letter-spacing: 0.03rem;
    margin: 0 0 2rem 3rem;
    font-size: 2.75rem;
    position: relative;
    z-index: 5;
    animation: slideright 2s ease-out;
  }

  .signup-input {
    margin: 1rem 0;
    padding: 1.5rem;
    border-radius: 2rem;
    outline: none;
    border: none;
    box-shadow: 0 0 2rem rgba(0, 0, 255, 0.3);
    width: 80%;
  }

  .signup-btn {
    background-color: #00ff9b;
    padding: 1rem;
    border-radius: 2rem;
    outline: none;
    border: none;
    color: white;
    font-size: 1.1rem;
    cursor: pointer;
    margin-top: 1.5rem;
    width: 50%;
    box-shadow: 0 0 2rem rgba(0, 0, 255, 0.1);
  }

  .signup-btn:hover {
    background: linear-gradient(to right, #03a9f4, #00ff9b);
  }

  .signup-input::placeholder {
    color: #39437a;
    font-size: 0.9rem;
  }

  .btn-disabled {
    background-color: lightgray;
  }

  .btn-disabled:hover {
    background: lightgray;
  }

  .login-link-wrapper {
    margin-top: 3rem;
    animation: slideup 1s ease-in-out;
  }

  .login-link {
    text-transform: uppercase;
    margin-top: 1rem;
    text-decoration: none;
    color: #ff3a82;
    margin-left: 1rem;
    cursor: pointer;
  }
   @media screen and (max-width: 959px) {
    .signup-aside {
      display: none;
    }
  }
</style>
