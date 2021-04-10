import VueRouter from "vue-router";
import home from "../view/home.vue";
import user from "../view/user.vue";

export default new VueRouter({
  routes: [
    {
      path: "/",
      component: home,
      meta: {
        title: "主页",
      },
    },
    {
      path: "/user",
      component: user,
      meta: {
        title: "用户",
      },
    },
  ],
});
