// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import ui from '@/ui'
import VueI18n from 'vue-i18n'
import messages from '@/i18n'

Vue.config.productionTip = false

Vue.use(ui.plugin, ui.options)
Vue.use(VueI18n)

let lang = navigator.language || 'en'
if (lang.startsWith('zh')) {
  lang = 'zh'
}

const i18n = new VueI18n({
  locale: lang,
  messages
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  i18n
})
