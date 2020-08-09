import Vue from 'vue';
import VueRouter from 'vue-router';
import firebase from 'firebase/app';
import store from './store';

import Home from './pages/Home';
import AddCity from './pages/AddCity';
import Details from './pages/Details';
import Login from './pages/Login';

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
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

router.beforeEach((to, from, next) => {
  if (
    to.matched.some((item) => item.meta.auth) &&
    !store.getters.user
  ) {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        next({
          path: '/login'
        });
      } else {
        store.dispatch('fetchUser', user);
        next();
      }
    });
  } else if (to.matched.some((item) => !item.meta.auth)) {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        next();
      } else {
        !store.getters.user && store.dispatch('fetchUser', user);
        next({
          path: '/'
        });
      }
    });
  } else {
    next();
  }
});
export default router;