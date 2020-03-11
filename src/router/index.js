import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from '../views/MainPage/Main.vue';
import Home from '../views/MainPage/Home.vue';
import SignUp from '../views/Authentication/SignUp.vue';
import LogIn from '../views/Authentication/LogIn.vue';
import Search from '../views/Search/Search.vue';
import Genres from '../views/Genres/Genres.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    children: [
      { path: '/', name: 'home', component: Home },
      { path: '/search', name: 'search', component: Search },
      { path: '/genre/:id', name: 'genres', component: Genres },
    ],
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp,
  },
  {
    path: '/login',
    name: 'LogIn',
    component: LogIn,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
