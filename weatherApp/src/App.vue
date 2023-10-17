<template>
  <div>
    <!-- <weatherVue />
    <newWeatherAppVue />
    <weatherApp2Vue />
    <jsonPlaceHolderVue /> <br />
    <h1>weatherAppPracticse</h1>
    <weatherAppPracticseVue />
    <h1>weatherAppPracticse 09-02-2023</h1>
    <newWeatherPractice09022023Vue /> -->
    <!-- <h1>weatherAppPracticse 09-07-2023</h1>
    <weatherAppPractice2Vue/> -->
    <weatherAxiosPracticeVue/>
  </div>
</template>

<script>
import jsonPlaceHolderVue from "./components/jsonPlaceHolder.vue";
import newWeatherAppVue from "./components/newWeatherApp.vue";
import newWeatherPractice09022023Vue from "./components/newWeatherPractice09-02-2023.vue";
import weatherVue from "./components/weather.vue";
import weatherApp2Vue from "./components/weatherApp2.vue";
import weatherAppPractice2Vue from './components/weatherAppPractice2.vue';
import weatherAppPracticseVue from "./components/weatherAppPracticse.vue";
import weatherAxiosPracticeVue from './components/weatherAxiosPractice.vue';


export default {
  name: "app",
  components: {
    weatherVue,
    newWeatherAppVue,
    weatherApp2Vue,
    jsonPlaceHolderVue,
    weatherAppPracticseVue,
    newWeatherPractice09022023Vue,
    weatherAppPracticseVue,
    weatherAppPractice2Vue,
    weatherAxiosPracticeVue
  },
};
</script>

<style lang="scss" scoped>
</style>