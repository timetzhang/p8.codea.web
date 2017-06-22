import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import router from './router'

import MuseUI from 'muse-ui'

Vue.use(MuseUI);
Vue.use(VueResource);
Vue.config.productionTip = false

import Cookie from './common/cookie'
Vue.prototype.$cookie = Cookie;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})