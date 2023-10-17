
import { createApp, ref } from 'vue'
import App from './App.vue'
import { musicListData } from './musicList'
import './main.css'
//createApp(App).mount('#app') //dito ginawa nila is App ung parameter so walang const or declaration

const musicList = ref(musicListData);
const app = createApp(App); //kaya dito nagdeclare tau ng variable const app
app.provide('musicList', musicList);
app.mount('#app') // at dito kailgan din in mount ung app n deneclare na variable
