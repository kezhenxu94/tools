<template>
  <v-container>
    <v-flex sm6 xs12>
      <time-converter></time-converter>
    </v-flex>
  </v-container>
</template>

<script>
import TimeConverter from '@/components/time/Converter'
export default {
  name: 'k-time',
  components: {TimeConverter}
}
</script>

<style lang="stylus" scoped>
</style>
