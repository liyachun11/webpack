/*
 * @Author: liyachun
 * @Date:   2021-03-08 17:42:30
 * @Last Modified by:   liyachun
 * @Last Modified time: 2021-03-18 09:22:53
 */
import { cc } from "./a.js";
console.log(22, cc);
// var aa = {
// 	name:"这是第一个"
// }
// function applyFont (a,b){
// 	console.log(a,this.name,b)
// }

// applyFont.apply(aa,["A" ,"B"])//A 这是第一个 B
// applyFont.call(aa,"A" ,"B")

var ff = ["1", "2"];
var dd = ["3", "4"];
Array.prototype.push.apply(ff, dd); // Array.prototype.push 合并数组
console.log(ff); //['1','2','3','4']

//vue的使用
import Vue from "vue";
import router from "./routes/index";
import App from "./App.vue";

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
