// Import css styling from assets folder
import './assets/main.css'

// Import createApp function from Vue (magic spell)
import { createApp } from 'vue'

// Import App.vue as "App"
// This is saying "give me info to display from App.vue
import App from './App.vue'

// Import router (magic spell)
import router from './router'

// Declares our Vue app I guess (magic spell)
const app = createApp(App)

// Tells our Vue app to use router that we imported
app.use(router)

// Mounts the app in the HTML to be displayed in the browser!
app.mount('#app')
