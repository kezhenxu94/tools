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
            <v-list-tile-title>Home</v-list-tile-title>
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
      <v-toolbar-title>Tools</v-toolbar-title>
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
export default {
  name: 'App',
  methods: {
    goHomePage: () => {
      window.location.href = 'https://kezhenxu94.me'
    }
  },
  data () {
    return {
      showDrawer: null,
      items: [
        { title: 'Time', icon: 'watch', path: '/time' },
        { title: 'Formatter', icon: 'text_format', path: '/formatter' }
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
}
.v-footer {
  font-size 11px
}
</style>
