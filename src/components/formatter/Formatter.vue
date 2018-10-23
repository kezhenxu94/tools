<template>
  <v-container id="root-formatter">
    <ace-editor show-gutter
                v-model="content"
                :value="content"
                ref="editor"
                height="100%"
                theme="ace/theme/clouds_midnight"
                mode="ace/mode/json"></ace-editor>
  </v-container>
</template>

<script>
import {formatJson} from '@/lib/formatter/json'
import AceEditor from '@/components/ace-editor/AceEditor'
import 'brace/theme/clouds_midnight'
import 'brace/mode/json'

export default {
  name: 'Formatter',
  components: {AceEditor},
  mounted () {
    const editor = this.$refs['editor'].editor
    editor.commands.addCommand({
      name: 'Run',
      exec: () => {
        this.content = formatJson(this.content)
      },
      bindKey: {
        mac: 'cmd-enter',
        win: 'ctrl-enter'
      }
    })
    editor.focus()
  },
  beforeDestroy () {
  },
  data () {
    return {
      content: ''
    }
  }
}
</script>

<style scoped>
#root-formatter {
  height: 100%;
}
</style>
