<template>
  <v-layout class="root" grid-list-md text-xs-center row wrap>
    <v-flex xs12 sm6 md6 lg6 xl4>
      <v-container>
        <time-converter></time-converter>
      </v-container>
    </v-flex>
    <v-flex xs12 sm6 md6 lg6 xl4>
      <v-container>
        <url-converter></url-converter>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
import TimeConverter from '@/components/time/Converter'
import UrlConverter from '@/components/url/Converter'
export default {
  name: 'converter',
  components: {UrlConverter, TimeConverter}
}
</script>

<style lang="stylus" scoped>
.root {
  height 100%
  overflow auto
}
</style>
