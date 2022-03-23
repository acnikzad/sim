import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'animate.css';
import 'popper.js';
import 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap-vue/dist/css/bootstrap-vue.css';

createApp(App).use(router).mount('#app')

// import 'bootstrap/dist/js/bootstrap.js'; 