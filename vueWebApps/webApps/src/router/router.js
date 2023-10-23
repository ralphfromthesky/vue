import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'
import todoApps from '../views/todoApps.vue'
import calculator from '../views/calculator.vue'
import weather from '../views/weather.vue'
import musicApp from  '../views/musicApp.vue'
import quizzApp from  '../views/quizzApp.vue'
import timer from '../views/timer.vue';


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      // {
      //   path: '/',
      //   name: 'mainBody',
      //   component: Homeview
      // },
      {
        path: '/home',
        name: 'home',
        component: home
      },
      {
        path: '/todo',
        name: 'todo',
        component: todoApps
      },
      {
        path: '/calculator',
        name: 'calculator',
        component: calculator
      },
      {
        path: '/weather',
        name: 'weather',
        component: weather
      },
      {
        path: '/music',
        name: 'music',
        component: musicApp
      },
      {
        path: '/quizz',
        name: 'quizz',
        component: quizzApp
      },
      {
        path: '/timer',
        name: 'timer',
        component: timer
      },
    ]
})

export default router;