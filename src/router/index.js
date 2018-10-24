import Vue from 'vue'
import Router from 'vue-router'
import Time from '@/views/Converter'
import Formatter from '@/views/Formatter'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', redirect: '/time'},
    {path: '/time', name: 'Time', component: Time},
    {path: '/formatter', name: 'Formatter', component: Formatter}
  ]
})
