import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from './views/home/HomePage.vue';
import Login from './views/auth/LoginPage.vue';
import MainLayout from './views/layout/MainLayout.vue';
import AboutPage from './views/home/AboutPage.vue';
import ContactPage from './views/home/ContactPage'
import AuthService from './services/AuthService';
import AddItemForm from './views/Item/AddItemForm.vue';
Vue.use(VueRouter);

const ifAuthenticated = (to, from, next) => {
  if (AuthService.isAuthenticated()) {
    next()
    return
  }
  next('/login')
}

const routes = [
  {
    path: '/',
    beforeEnter:ifAuthenticated,
    component: MainLayout,
    children: [
       {
        path: '/',
        component: HomePage,
        name:"home",
       } 
    ],
  },
  {
    path: '/about',
    beforeEnter:ifAuthenticated,
    component: MainLayout,
    children: [
       {
        path: '/about',
        component: AboutPage,
        name:"about",
       } 
    ],
  },
  {
    path: '/contact',
    beforeEnter:ifAuthenticated,
    component: MainLayout,
    children: [
       {
        path: '/contact',
        component: ContactPage,
        name:"contact",
       } 
    ],
  },
  {
    path: '/addItemForm',
    beforeEnter:ifAuthenticated,
    component: AddItemForm,
  },
  {
    path: '/login',
    component: Login,
    name: 'login'
  }
];


const router = new VueRouter({
  routes,
  base: process.env.VUE_APP_CONTEXT_PATH || '/',
  mode: 'history' 
});

export default router;