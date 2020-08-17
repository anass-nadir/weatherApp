import Vue from 'vue';
import VueRouter from 'vue-router';
import firebase from 'firebase/app';
import store from './store';

import Home from './pages/Home';
import AddCity from './pages/AddCity';
import Details from './pages/Details';
import Login from './pages/Login';
import Register from './pages/Register';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      auth: true
    }
  },
  {
    path: '/add',
    name: 'addCity',
    component: AddCity,
    meta: {
      auth: true
    }
  },
  {
    path: '/details/:city',
    name: 'details',
    component: Details,
    meta: {
      auth: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((item) => item.meta.auth)) {
    if (store.getters.user) return next();
    firebase.auth().onAuthStateChanged((user) => {
      if (!user)
        return next({
          path: '/login'
        });
      store.dispatch('fetchUser', user);
      next();
    });
  } else {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) return next();
      next({
        path: '/'
      });
    });
  }
});
export default router;
