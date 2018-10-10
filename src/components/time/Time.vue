<template>
  <div>
    <v-flex xs8 sm4 xs12>
      <time-converter></time-converter>
    </v-flex>
  </div>
</template>

<script>
import TimeConverter from './Converter'
export default {
  name: 'k-time',
  components: {TimeConverter}
}
</script>

<style lang="stylus" scoped>
#comp-time {
  height 100%
  width 100%
}
</style>
