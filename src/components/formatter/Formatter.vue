<template>
  <v-container id="root-formatter">
    <v-textarea autofocus clearable dark no-resize box
                v-model="content"
                label="Text to Format"
                hint="Press Ctrl (or Command on Mac) and Enter to format"
                @keydown="onkeydown"></v-textarea>
  </v-container>
</template>

<script>
export default {
  name: 'Formatter',
  methods: {
    onkeydown (event) {
      if ((event.metaKey || event.ctrlKey) && event.keyCode === 13) {
        try {
          this.content = JSON.stringify(JSON.parse(this.content), null, 2)
        } catch (e) {
        }
      }
    }
  },
  data () {
    return {
      content: undefined
    }
  }
}
</script>

<style scoped>
#root-formatter {
  height: 100%;
}
.v-textarea {
  height: 100%;
}
.v-textarea >>> .v-input__control {
  height: calc(100%);
}
.v-textarea >>> .v-input__slot {
  height: calc(100% - 40px);
}
</style>
