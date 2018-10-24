import Vue from 'vue'
import Router from 'vue-router'
import Converter from '@/views/Converter'
import Formatter from '@/views/Formatter'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', redirect: '/time'},
    {path: '/converter', name: 'Converter', component: Converter},
    {path: '/formatter', name: 'Formatter', component: Formatter}
  ]
})
