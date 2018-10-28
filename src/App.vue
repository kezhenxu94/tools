<template>
  <v-app id="app" dark>
    <v-navigation-drawer app :value.sync="showDrawer" @input="showDrawer=$event">
      <v-toolbar flat>
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="https://www.gravatar.com/avatar/a14e62dda940324d878be1499c064432">
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>Kid the Programmer</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-list>
        <v-list-tile @click="goHomePage">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{$t('home')}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-for="item in items" :key="item.title" :to="item.path">
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{$t(item.title)}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app flat>
      <v-toolbar-side-icon @click.stop="showDrawer=!showDrawer"></v-toolbar-side-icon>
      <v-toolbar-title>{{$t('app')}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-menu>
          <v-btn slot="activator" flat>
            {{language.label}}
            <v-icon right>arrow_drop_down</v-icon>
          </v-btn>
          <v-list>
            <v-list-tile v-for="l in languages" :key="l.value" @click="language=l">
              <v-list-tile-title>{{l.label}}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </v-toolbar-items>
    </v-toolbar>
    <v-content class="content">
      <router-view></router-view>
    </v-content>
    <v-footer app class="hidden-sm-and-down">
      <v-layout justify-center row wrap>
        Copyright &copy;2018 Kid the Programmer
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
import VApp from 'vuetify/lib/components/VApp/VApp'
import VNavigationDrawer from 'vuetify/lib/components/VNavigationDrawer'
import {VToolbar, VToolbarTitle, VToolbarSideIcon, VToolbarItems} from 'vuetify/lib/components/VToolbar'
import {VList, VListTile, VListTileTitle, VListTileAvatar, VListTileContent, VListTileAction} from 'vuetify/lib/components/VList'
import VIcon from 'vuetify/lib/components/VIcon'
import VFooter from 'vuetify/lib/components/VFooter'
import VMenu from 'vuetify/lib/components/VMenu'
import VBtn from 'vuetify/lib/components/VBtn'
import {VLayout, VContent, VSpacer} from 'vuetify/lib/components/VGrid'

export default {
  name: 'App',
  components: {
    VApp,
    VNavigationDrawer,
    VToolbar,
    VToolbarTitle,
    VToolbarSideIcon,
    VToolbarItems,
    VList,
    VListTile,
    VListTileTitle,
    VListTileAvatar,
    VListTileContent,
    VListTileAction,
    VContent,
    VLayout,
    VIcon,
    VFooter,
    VMenu,
    VBtn,
    VSpacer
  },
  methods: {
    goHomePage: () => {
      window.location.href = 'https://kezhenxu94.me'
    }
  },
  computed: {
    language: {
      get () {
        return this.$store.state.language
      },
      set (val) {
        this.$store.commit('setLanguage', val)
      }
    }
  },
  data () {
    return {
      showDrawer: null,
      items: [
        { title: 'converter.title', icon: 'transform', path: '/converter' },
        { title: 'formatter.title', icon: 'text_format', path: '/formatter' },
        { title: 'qrcode.title', icon: 'code', path: '/qrcode' }
      ],
      right: null,
      languages: [
        {label: 'English', value: 'en'},
        {label: '简体中文', value: 'zh-CN'}
      ]
    }
  }
}
</script>

<style lang="stylus">
#app {
  font-family Menlo, Monaco, Consolas, Monospaced, sans-serif
  font-size 11px
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  height 100vh
}
.v-footer {
  font-size 11px
}
.content {
  height 100%
}
</style>
