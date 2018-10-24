<template>
  <v-card hover>
    <v-card-title>
      <v-icon>transform</v-icon><h3>&nbsp;Encoder</h3>
    </v-card-title>
    <v-divider></v-divider>
    <v-card-text>
      <v-text-field prepend-icon="E" label="Decoded" v-model="decoded"></v-text-field>
      <v-text-field prepend-icon="D" label="Encoded" v-model="encoded"></v-text-field>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn flat color="red" @click="encoded=''"><v-icon>clear</v-icon>Clear</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'url-converter',
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
