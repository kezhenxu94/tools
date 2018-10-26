<template>
  <v-card hover>
    <v-card-title>
      <v-icon>access_time</v-icon><h3>&nbsp;{{$t('converter.time.title')}}</h3>
    </v-card-title>
    <v-divider></v-divider>
    <v-card-text>
      <v-text-field prepend-icon="S" :label="$t('converter.time.timeInSeconds')" v-model="timestamp" mask="##########"></v-text-field>
      <v-text-field prepend-icon="watch" :label="$t('converter.time.readableTime')" v-model="time" :error="hasError" :error-messages="errorMessage"></v-text-field>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn flat color="amber" @click="timestamp=currentTimestamp">{{$t('converter.time.now')}}: {{ currentTimestamp }}</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import moment from 'moment'
import {possibleTimeFormats} from '@/lib/time/converter'

import {VCard, VCardMedia, VCardTitle, VCardText, VCardActions} from 'vuetify/lib/components/VCard'
import VDivider from 'vuetify/lib/components/VDivider'
import VIcon from 'vuetify/lib/components/VIcon'
import VBtn from 'vuetify/lib/components/VBtn'
import VTextField from 'vuetify/lib/components/VTextField'
import {VSpacer} from 'vuetify/lib/components/VGrid'

export default {
  name: 'time-converter',
  components: {
    VCard,
    VCardMedia,
    VCardTitle,
    VCardText,
    VCardActions,
    VDivider,
    VIcon,
    VBtn,
    VTextField,
    VSpacer
  },
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
      this.errorMessage = undefined
      this.timestamp = m.unix()
    },
    timestamp () {
      if (this.timestamp === moment(this.time, possibleTimeFormats).unix()) {
        return
      }
      this.errorMessage = undefined
      this.time = moment.unix(this.timestamp).format('YYYY/MM/DD HH:mm:ss')
    }
  },
  computed: {
    hasError () {
      return this.errorMessage !== undefined && this.errorMessage.length > 0
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
