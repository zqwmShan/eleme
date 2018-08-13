import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
import goods from '@/components/goods/goods'
import ratings from '@/components/ratings/ratings'
import seller from '@/components/seller/seller'

import '@/common/less/index.less';

Vue.use(Router)
Vue.prototype.$http = axios



export default new Router({
  //mode: 'history',
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/goods',
      name: 'goods',
      component: goods
    },
    {
      path: '/ratings', 
      name: 'ratings',
      component: ratings
    },
    {
      path: '/seller',
      name: 'seller',
      component: seller
    }
  ]
})


