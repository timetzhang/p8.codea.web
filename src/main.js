import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import router from './router'

import MuseUI from 'muse-ui'

Vue.use(MuseUI);
Vue.use(VueResource);
Vue.config.productionTip = false;

//Cookie API
import Cookie from './common/cookie'
Vue.prototype.$cookie = Cookie;

//数据库API
import Db from './common/db'
Vue.prototype.$db = Db;

//全站常量
import Config from '@/common/config'
Vue.prototype.$config = Config;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})