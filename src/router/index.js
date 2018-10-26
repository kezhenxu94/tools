import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Converter = () => import('@/views/Converter')
const Formatter = () => import('@/views/Formatter')
const QRCode = () => import('@/views/QRCode')

export default new Router({
  routes: [
    {path: '/', redirect: '/converter'},
    {path: '/converter', name: 'Converter', component: Converter},
    {path: '/formatter', name: 'Formatter', component: Formatter},
    {path: '/qrcode', name: 'QRCode', component: QRCode}
  ]
})
