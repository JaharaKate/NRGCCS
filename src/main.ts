<<<<<<< HEAD
import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

loadFonts()

createApp(App)
  .use(vuetify)
  .mount('#app')
=======
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue' //This stays red, but still works?

createApp(App).mount('#app')
>>>>>>> parent of 6732e5a (firebase connectivity test)
