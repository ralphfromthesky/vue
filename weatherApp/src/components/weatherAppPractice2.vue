<template>
  <div>
    <form @submit.prevent="searchCity">
      <input type="text" v-model="city_input" />
      <button>Search</button>
    </form>
    {{ error }}
    {{ city }} <br>
    {{ weather }} <br>
    {{ temp }}
  </div>
</template>

<script>
import { ref, computed } from "vue";
import axios from "axios";

export default {
  name: "fetch data practice",
  setup() {
    const city_input = ref("");
    const city = ref("");
    const weather = ref("");
    const temp = ref("");
    const api_key = ref("ae3335d94a1cbbff33e8ba9bab5de492");
    const errors = ref('');
    const api_url = computed(() => {
      return `https://api.openweathermap.org/data/2.5/weather?q=${city_input.value}&appid=${api_key.value}`;
    });

    const searchCity = async () => {
      try {
        if(city_input.value.trim() === ''){
            alert(`input city`);
            return;
        }
        const response = await axios.get(api_url.value);
        console.log(response);
        city.value = response.data.name;
        weather.value = response.data.weather[0].main;
        temp.value = response.data.main.temp;
        return;
      } catch (error) {
        console.log(`error: ${error}`)
        alert(`No such city ${error}`)
    }
    };

    return {
      city,
      city_input,
      temp,
      weather,
      api_key,
      api_url,
      searchCity,
      errors
    };
  },
};
</script>

<style lang="scss" scoped>
</style>