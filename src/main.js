import { createApp } from 'vue'
import App from './App.vue'
import MusicChetVue from '../dist/music-chet-vue.es'
import '../dist/style.css'

const app = createApp(App)
app.use(MusicChetVue).mount('#app')
