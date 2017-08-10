// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Mint  from 'mint-ui'
import router from './router'
import axios from 'axios'
import Qs from 'qs'

Vue.config.productionTip = false
Vue.prototype.$http = axios
/*axios.defaults.baseURL = 'http://172.16.15.75:50600/api/';
//axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers={
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
}*/
Vue.use(Mint)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
export default{
    post:function(url,data){
        return axios({
            method:'post',
            url:url,
            data:data,
            timeout:10000,
            headers:{
               'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/json  charset=UTF-8' ,
               // "Access-Control-Allow-Origin":"*"
            }
        })
    }
}

