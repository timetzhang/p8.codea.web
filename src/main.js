import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import router from './router'

import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-carbon.css' // 使用 carbon 主题

Vue.use(MuseUI);
Vue.use(VueResource);
Vue.config.productionTip = false

import Cookie from './common/cookie'
Vue.prototype.$cookie = Cookie;
import Db from './common/db'
Vue.prototype.$db = Db;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})