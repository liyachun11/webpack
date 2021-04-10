<template>
  <div>
    <router-view></router-view>
    <router-link tag="button" exact-active-class="zz" to="/">主页</router-link>
    <router-link tag="button" exact-active-class="zz" to="/user">用户</router-link>
    <div>{{ msg }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Hello world!",
    };
  },
};
</script>

<style></style>
