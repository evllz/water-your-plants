import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import WaveUI from 'wave-ui'
import 'wave-ui/dist/wave-ui.css'

const app = createApp(App)

new WaveUI(app, {
    //Option can be added here from https://antoniandre.github.io/wave-ui/getting-started
})

app.use(store)
app.use(router)

app.mount('#app')
