<template>
  <v-card hover>
    <v-snackbar v-model="hasError" color="error" top>
      {{ errorMessage }}
      <v-btn color="white" flat @click="errorMessage=undefined">Close</v-btn>
    </v-snackbar>
    <v-card-title primary-title>
      <v-icon>transform</v-icon><h3 class="headline mb-0">&nbsp;Converter</h3>
    </v-card-title>
    <v-divider></v-divider>
    <v-card-text>
      <v-text-field prepend-icon="S" label="Time in seconds" v-model="timestamp" mask="##########"></v-text-field>
      <v-text-field prepend-icon="watch" label="Human readable time" v-model="time"></v-text-field>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn flat color="orange" @click="timestamp=currentTimestamp">Now: {{ currentTimestamp }}</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import moment from 'moment'
const possibleTimeFormats = [
  'YYYY/MM/DD HH:mm:ss',
  'YYYY-MM-DD HH:mm:ss',
  'MM/DD/YYYY HH:mm:ss',
  'MM-DD-YYYY HH:mm:ss',
  'YYYY-MM-DD\'T\'HH:mm:ssZ',
  'YYYY/MM/DD\'T\'HH:mm:ssZ',
  'ddd MMM DD YYYY HH:mm:ss'
]
export default {
  name: 'time-converter',
  watch: {
    time () {
      if (this.time === moment.unix(this.timestamp).format('YYYY/MM/DD HH:mm:ss')) {
        return
      }
      const m = moment(this.time, possibleTimeFormats)
      if (!m.isValid()) {
        this.errorMessage = `'${this.time}' is not a valid time`
        return
      }
      this.timestamp = m.unix()
    },
    timestamp () {
      if (this.timestamp === moment(this.time, possibleTimeFormats).unix()) {
        return
      }
      this.time = moment.unix(this.timestamp).format('YYYY/MM/DD HH:mm:ss')
    }
  },
  computed: {
    hasError: {
      get () {
        return this.errorMessage !== undefined && this.errorMessage.length > 0
      },
      set (val) {
        if (!val) {
          this.errorMessage = undefined
        }
      }
    }
  },
  data () {
    return {
      time: moment().format('YYYY/MM/DD HH:mm:ss'),
      timestamp: moment().unix(),
      currentTimestamp: moment().unix(),
      timer: undefined,
      errorMessage: undefined
    }
  },
  beforeCreate () {
    this.timer = setInterval(() => (this.currentTimestamp = moment().unix()), 1000)
  },
  beforeDestroy () {
    clearInterval(this.timer)
  }
}
</script>

<style scoped>

</style>
