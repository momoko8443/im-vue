import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import store from './store';
import io from 'socket.io-client';
const socket_domain = process.env.VUE_APP_SOCKET_SERVER;
const socket = io(socket_domain);
Object.defineProperty(Vue.prototype, '$socket', { value:  socket });
Vue.config.productionTip = false
Vue.use(Antd);
Vue.currentTarget = {};
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');


