<template>
  <v-layout class="root" grid-list-md text-xs-center row wrap>
    <v-flex xs12 sm6 md4 xl3>
      <v-container>
        <v-card hover>
          <v-card-title>
            <v-icon>code</v-icon>&nbsp;
            <h3>{{$t('qrcode.title')}}</h3>
          </v-card-title>
          <v-divider></v-divider>
          <img :src="dataURL" class="full-width">
          <v-divider></v-divider>
          <v-card-text>
            <v-text-field :label="$t('qrcode.inputLabel')" v-model="value"></v-text-field>
          </v-card-text>
        </v-card>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
import QRCode from 'qrcode'

import {VCard, VCardTitle, VCardText} from 'vuetify/lib/components/VCard'
import VDivider from 'vuetify/lib/components/VDivider'
import VIcon from 'vuetify/lib/components/VIcon'
import VTextField from 'vuetify/lib/components/VTextField'
import {VLayout, VContainer, VFlex, VSpacer} from 'vuetify/lib/components/VGrid'

export default {
  name: 'QRCode',
  components: {
    VCard,
    VCardTitle,
    VCardText,
    VDivider,
    VIcon,
    VTextField,
    VLayout,
    VContainer,
    VFlex,
    VSpacer
  },
  watch: {
    value: {
      handler () {
        QRCode.toDataURL(this.value, {
          errorCorrectionLevel: 'H',
          type: 'image/jpeg',
          rendererOpts: {
            quality: 1
          }
        }).then(url => {
          this.dataURL = url
        }).catch(err => {
          console.log(err)
        })
      },
      immediate: true
    }
  },
  data () {
    return {
      value: 'https://kezhenxu94.me/tools',
      dataURL: undefined
    }
  }
}
</script>

<style scoped>
</style>
