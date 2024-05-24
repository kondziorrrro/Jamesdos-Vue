import Vue from "vue";
import Router from "vue-router";
import Jamesdoscom390 from "./components/Jamesdoscom390";
import Jamesdoscom1440 from "./components/Jamesdoscom1440";
import Jamesdoscom768 from "./components/Jamesdoscom768";
import Jamesdoscom1024 from "./components/Jamesdoscom1024";
import { jamesdoscom390Data, jamesdoscom1440Data, jamesdoscom768Data, jamesdoscom1024Data } from "./data";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/jamesdosu46com-390",
      component: Jamesdoscom390,
      props: { ...jamesdoscom390Data },
    },
    {
      path: "/jamesdosu46com-1440",
      component: Jamesdoscom1440,
      props: { ...jamesdoscom1440Data },
    },
    {
      path: "/jamesdosu46com-768",
      component: Jamesdoscom768,
      props: { ...jamesdoscom768Data },
    },
    {
      path: "*",
      component: Jamesdoscom1024,
      props: { ...jamesdoscom1024Data },
    },
  ],
});
