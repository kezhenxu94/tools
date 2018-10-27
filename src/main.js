// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import ui from '@/ui'
import store from '@/store'
import i18n from '@/i18n'

Vue.config.productionTip = false

Vue.use(ui.plugin, ui.options)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  i18n,
  store,
  beforeCreate () {
    this.$store.commit('initialiseStore')
    i18n.locale = this.$store.state.language.value
  }
})
