import Vue from 'vue'
import Router from 'vue-router'
import Converter from '@/views/Converter'
import Formatter from '@/views/Formatter'
import QRCode from '@/views/QRCode'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', redirect: '/converter'},
    {path: '/converter', name: 'Converter', component: Converter},
    {path: '/qrcode', name: 'QRCode', component: QRCode},
    {path: '/formatter', name: 'Formatter', component: Formatter}
  ]
})
