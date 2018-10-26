<template>
  <v-card hover>
    <v-card-title>
      <v-icon>link</v-icon><h3>&nbsp;{{$t('converter.url.title')}}</h3>
    </v-card-title>
    <v-divider></v-divider>
    <v-card-text>
      <v-text-field prepend-icon="D" :label="$t('converter.url.decoded')" v-model="decoded"></v-text-field>
      <v-text-field prepend-icon="E" :label="$t('converter.url.encoded')" v-model="encoded"></v-text-field>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn flat color="red" @click="encoded=''"><v-icon>clear</v-icon>{{$t('clear')}}</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import {VCard, VCardTitle, VCardText, VCardActions} from 'vuetify/lib/components/VCard'
import VDivider from 'vuetify/lib/components/VDivider'
import VIcon from 'vuetify/lib/components/VIcon'
import VBtn from 'vuetify/lib/components/VBtn'
import VTextField from 'vuetify/lib/components/VTextField'
import {VSpacer} from 'vuetify/lib/components/VGrid'

export default {
  name: 'url-converter',
  components: {
    VCard,
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
    encoded: {
      handler () {
        if (decodeURI(this.encoded) === this.decoded) {
          return
        }
        this.decoded = decodeURI(this.encoded)
      },
      immediate: true
    },
    decoded: {
      handler () {
        if (encodeURI(this.decoded) === this.encoded) {
          return
        }
        this.encoded = encodeURI(this.decoded)
      },
      immediate: true
    }
  },
  data () {
    return {
      encoded: 'https://kezhenxu94.me',
      decoded: 'https://kezhenxu94.me'
    }
  }
}
</script>

<style scoped>

</style>
