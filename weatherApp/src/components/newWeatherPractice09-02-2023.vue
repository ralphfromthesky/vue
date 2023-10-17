<template>
  <div>
    <form @submit.prevent="weatherData">
      <input type="text" v-model="searchCity" />
      <button>search</button>
    </form>
    <div>
      <h5>{{ city }}</h5>
      <h5>{{ weather }}</h5>
      <h5>{{ temp }}</h5>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import axios from "axios";
export default {
  name: "weather",
  setup() {
    const searchCity = ref("");
    const city = ref("");
    const temp = ref("");
    const weather = ref("");
    const api_key = ref("ae3335d94a1cbbff33e8ba9bab5de492");

    const api_url = computed(() => {
      return `https://api.openweathermap.org/data/2.5/weather?q=${searchCity.value}&appid=${api_key.value}`;
    });

    const weatherData = async () => {
      try {
        if (searchCity.value.trim() === "") {
          alert("input city");
          return;
        }
        const response = await axios.get(api_url.value);
        console.log(response.data);
        city.value = response.data.name
        weather.value = response.data.weather[0].main
        temp.value = response.data.main.temp
        return;
      } catch (error) {
        console.log(`error: ${error}`);
      }
    };

    return {
      city,
      temp,
      weather,
      searchCity,
      api_key,
      api_url,
      weatherData,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>