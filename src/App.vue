<template>
  <v-app id="app" dark>
    <v-navigation-drawer app :value.sync="showDrawer" @input="showDrawer=$event">
      <v-toolbar flat>
        <v-list>
          <v-list-tile>
            <v-list-tile-title class="title">Useful Tools</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-list>
        <v-list-tile v-for="item in items" :key="item.title" @click="$router.push(item.path)">
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
    </v-toolbar>
    <v-content class="content">
      <router-view></router-view>
    </v-content>
    <v-footer app>
      <v-layout justify-center row wrap>&copy; kezhenxu94@2018</v-layout>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      showDrawer: null,
      items: [
        { title: 'Time', icon: 'watch', path: '/time' },
        { title: 'Formatter', icon: '', path: '/formatter' }
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
</style>
