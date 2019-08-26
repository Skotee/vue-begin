import Vue from "vue"
import VueI18n from "vue-i18n"

import pl from "./pl"
import en from "./en"


Vue.use(VueI18n);

const messages = {
  en,
  pl
}

export default new VueI18n({
    locale: 'en', // set locale
    messages, // set locale messages
  })
