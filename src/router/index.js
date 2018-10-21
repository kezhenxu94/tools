import Vue from 'vue'
import Router from 'vue-router'
import Time from '@/components/time/Time'
import Formatter from '@/components/formatter/Formatter'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', redirect: '/time'},
    {path: '/time', name: 'Time', component: Time},
    {path: '/formatter', name: 'Formatter', component: Formatter}
  ]
})
