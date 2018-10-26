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
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app flat>
      <v-toolbar-side-icon @click.stop="showDrawer=!showDrawer"></v-toolbar-side-icon>
      <v-toolbar-title>{{$t('app')}}</v-toolbar-title>
    </v-toolbar>
    <v-content class="content">
      <router-view></router-view>
    </v-content>
    <v-footer app>
      <v-layout justify-center row wrap>
        Copyright © 2018 Kid the Programmer
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
import VApp from 'vuetify/lib/components/VApp/VApp'
import VNavigationDrawer from 'vuetify/lib/components/VNavigationDrawer'
import {VToolbar, VToolbarTitle, VToolbarSideIcon} from 'vuetify/lib/components/VToolbar'
import {VList, VListTile, VListTileTitle, VListTileAvatar, VListTileContent, VListTileAction} from 'vuetify/lib/components/VList'
import VIcon from 'vuetify/lib/components/VIcon'
import VFooter from 'vuetify/lib/components/VFooter'
import {VLayout, VContent} from 'vuetify/lib/components/VGrid'
export default {
  name: 'App',
  components: {
    VApp,
    VNavigationDrawer,
    VToolbar,
    VToolbarTitle,
    VToolbarSideIcon,
    VList,
    VListTile,
    VListTileTitle,
    VListTileAvatar,
    VListTileContent,
    VListTileAction,
    VContent,
    VLayout,
    VIcon,
    VFooter
  },
  methods: {
    goHomePage: () => {
      window.location.href = 'https://kezhenxu94.me'
    }
  },
  data () {
    return {
      showDrawer: null,
      items: [
        { title: this.$t('converter.title'), icon: 'transform', path: '/converter' },
        { title: this.$t('formatter.title'), icon: 'text_format', path: '/formatter' },
        { title: this.$t('qrcode.title'), icon: 'code', path: '/qrcode' }
      ],
      right: null
    }
  }
}
</script>

<style lang="stylus">
#app {
  font-family Menlo, Monaco, Consolas, Monospaced, sans-serif
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
