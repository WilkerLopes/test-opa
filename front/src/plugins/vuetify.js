import Vue from "vue"
import Vuetify from "vuetify/lib/framework"

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      options: { customProperties: true },
      light: {
        primary: "#444cf7",
      },
    },
  },
})
