<template>
  <div>
    <h1>weather app3</h1>
    <form @submit.prevent="searchCity">
      <input type="text" v-model="city" />
      <button>search</button>
    </form>
    <div>
      <h3>{{ cityName }}</h3>
      <h3>{{ temp }}</h3>
      <h3>{{ weather }}</h3>
      <h1>{{ error }}</h1>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import axios from "axios";
export default {
  name: "weatherApp2",
  setup() {
    const city = ref("");
    const cityName = ref("");
    const error = ref('')
    const temp = ref("");
    const weather = ref("");
    const api_key = ref("738195d7d8a19a58640aa42cb1613026");

    const api_url = computed(() => {
      return `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${api_key.value}`;
    });

    const searchCity = async () => {
      try {
        if (city.value.trim() === "") {
          alert("input city");
          return;
        }
        const response = await axios.get(api_url.value);
        console.log(response.data);
        cityName.value = response.data.name;
        weather.value = response.data.weather[0].main
        temp.value = response.data.main.temp
        
      } catch (error) {
        console.log(`error: ${error}`)
        if(error) {
            alert('no such city!')

        }
      }
    };

    return {
      searchCity,
      city,
      temp,
      weather,
      api_key,
      api_url,
      cityName,
      error
    };
  },
};
</script>

<style lang="scss" scoped>
</style>