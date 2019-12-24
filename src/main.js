import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import store from './store';
import io from 'socket.io-client';
const socket = io('http://localhost:3000');
Object.defineProperty(Vue.prototype, '$socket', { value:  socket });
Vue.config.productionTip = false
Vue.use(Antd);
Vue.currentTarget = {};
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');


