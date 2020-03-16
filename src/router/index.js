import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Result from "../views/Result";
import Detail from '../views/Detail';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/result",
    name:"Result",
    component: Result
  },
  {
    path:"/detail/:index",
    name: "Detail",
    component: Detail
  }
];

const router = new VueRouter({
  routes
});

export default router;
