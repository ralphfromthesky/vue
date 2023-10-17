<template>
  <div>
    <form @submit.prevent="weatherData">
      <input type="text" v-model="city" />
      <button>search</button>
    </form>
    <div>
      {{ cityName }} <br />
      {{ weather }} <br />
      {{ temp }}
      {{ error }}
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref, computed } from "vue";

export default {
  name: "weather",
  setup() {
    const city = ref("");
    const api_key = ref("c2e4c23be599e1bbe78694650c043123");
    const cityName = ref("");
    const weather = ref("");
    const temp = ref("");
    const error = ref('')

    const api_url = computed(() => {
      return `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${api_key.value}`;
    });

    const weatherData = async () => {
      try {
        if (city.value.trim() === "") {
          alert("input city");
          return;
        }
        const response = await axios.get(api_url.value);
        cityName.value = response.data.name;
        weather.value = response.data.main.temp;
        temp.value = response.data.weather[0].main;
        // localStorage.setItem('city', cityName.value)
        console.log(response.data);
        city.value = '';
        return response.data;
      } catch (e) {
        console.log(`error ${e}`);
        alert('No such city')

      }
    };

    return {
      api_key,
      api_url,
      weatherData,
      city,
      cityName,
      weather,
      temp,
      error
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
