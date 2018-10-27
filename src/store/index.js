import Vue from 'vue'
import Vuex from 'vuex'
import i18n from '@/i18n'

Vue.use(Vuex)

const languages = {
  en: 'English',
  'zh-CN': '简体中文'
}

// noinspection JSUnusedLocalSymbols
// eslint-disable-next-line
const set = (state, name, value) => (state[name] = value)

const store = new Vuex.Store({
  state: {
    language: {
      label: languages[i18n.locale || 'en'],
      value: i18n.locale || 'en'
    }
  },

  mutations: {
    initialiseStore (state) {
      if (localStorage.getItem('store')) {
        this.replaceState(
          Object.assign(state, JSON.parse(localStorage.getItem('store')))
        )
      }
    },
    setLanguage: (state, value) => {
      state.language = value
      i18n.locale = state.language.value
    }
  }
})

store.subscribe((mutation, state) => {
  localStorage.setItem('store', JSON.stringify(state))
})

export default store
