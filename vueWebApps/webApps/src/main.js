
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'

// createApp(App).mount('#app')

// App.use(router);

const app = createApp(App)
app.use(router)
app.mount('#app')
