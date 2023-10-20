<template>
  <div>
    <h1>Weather apps</h1>
    <div class="mainForm">
      <form @submit.prevent="searchWeather">
        <input type="text" v-model="city" />
        <button>Search City</button>
      </form>

      <div class="cityDetail">
        {{ temp }}
        {{ weather }}
        {{ cityName }}
        {{ cityTime }}
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import axios from "axios";
export default {
  name: "weather-apps",
  setup() {
    const city = ref("");
    const api_key = ref("ae3335d94a1cbbff33e8ba9bab5de492");
    const temp = ref("");
    const weather = ref("");
    const cityName = ref("");
    const cityTime = ref();
    const error = ref("");

    const api_url = computed(() => {
      return `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${api_key.value}`;
    });

    const searchWeather = async () => {
      try {
        if (city.value.trim() === "") {
          alert("input city please");
          return;
        }
        const response = await axios.get(api_url.value);
        console.log(response.data);
      } catch (error) {
        console.log(`errot: ${error}`);
      }
      city.value = ""
    };
    return {
      city,
      api_key,
      api_url,
      temp,
      weather,
      cityName,
      cityTime,
      searchWeather,
      error,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>