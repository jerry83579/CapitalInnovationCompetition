import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'
//BOOTSTRAP
import jQuery from 'jquery'
window.$ = window.jQuery = jQuery
Vue.use(BootstrapVue)
    //JQUERY
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.prototype.axios = axios
Vue.use(VueAxios, axios)
    //AXIOS
import vuetify from '@/plugins/vuetify'
//vuetify
import VideoPlayer from 'vue-video-player-vjs'
import 'video.js/dist/video-js.css'
import 'vue-video-player-vjs/styles/index.css'
Vue.use(VideoPlayer)
    //vedio.js
    // import VueSmoothScroll from 'vue3-smooth-scroll'
    // Vue.use(VueSmoothScroll)
    // import vuescroll from 'vuescroll';
    // Vue.use(vuescroll)
var VueScrollTo = require('vue-scrollto');
Vue.use(VueScrollTo)

import VueD3 from 'vue-d3'
Vue.use(VueD3)

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
//AOS


Vue.config.productionTip = false

new Vue({
    created() {
        AOS.init()
    },
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')