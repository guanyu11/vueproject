// import "./main.css"
console.log(123)
// import Message from "./plugins/message/index.js"
// Vue.prototype.$message = Message;
import Vue from "vue"
// import App from "./app.vue"
import App from "./step.vue"
Vue.prototype.$observer=new Vue();
console.dir(Vue,"Vue");
new Vue({
    render:h=>h(App)
}).$mount("#app")