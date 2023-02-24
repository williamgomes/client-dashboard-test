import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/main'
import store from './store/index.js';
import axios from 'axios';
import DOMPurify from "dompurify";

axios.defaults.baseURL = 'https://localhost';
axios.defaults.withCredentials = true;
axios.defaults.headers.Accept = 'application/json';
axios.defaults.headers.Authorization = `Bearer ${localStorage.getItem('api-xsrf-token')}`;

let app = createApp(App);

app.directive("sane-html", (el, binding) => {
    el.innerHTML = DOMPurify.sanitize(binding.value);
});

app.config.globalProperties.axios = axios;

app.use(router)
    .use(store)
    .mount('#app')