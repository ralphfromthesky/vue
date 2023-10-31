
import { createApp, ref } from 'vue'
import App from './App.vue'
import router from './router/router'
import { musicList } from './musicList'

// createApp(App).mount('#app')

// App.use(router);
const musicSongList = ref(musicList)

const app = createApp(App)
app.use(router)
app.mount('#app')

app.provide('musicList', musicSongList)
