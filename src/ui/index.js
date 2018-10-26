import Vuetify from 'vuetify/lib/components/Vuetify'
import 'vuetify/dist/vuetify.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@/style/common.styl'
import colors from 'vuetify/es5/util/colors'

export default {
  plugin: Vuetify,
  options: {
    theme: {
      primary: colors.amber.base
    }
  }
}
