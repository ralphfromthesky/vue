<template>
  <div>
    <form @submit.prevent="fetchData">
      <input type="text" v-model="searchCity" />
      <button>SEARCH</button>
    </form>
    <div>
        <h5>{{city }}</h5>
        <h5>{{ weather }}</h5>
        <h5>{{ temp }}</h5>
        <h5>{{ error }}</h5>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import axios from "axios";

export default {
  name: "weatherPractice",
  setup() {
    const city = ref("");
    const temp = ref("");
    const weather = ref("");
    const searchCity = ref("");
    const api_key = ref('ae3335d94a1cbbff33e8ba9bab5de492');
    const error = ref('');

    const api_url = computed(() => {
      return `https://api.openweathermap.org/data/2.5/weather?q=${searchCity.value}&appid=${api_key.value}`;
    });

    const fetchData = async () => {
      try {
        if (searchCity.value.trim() === "") {
          alert("input city!");
          return;
        }
        const response = await axios.get(api_url.value);
        console.log(response);
        city.value = response.data.name;
        weather.value = response.data.weather[0].main;
        temp.value = response.data.main.temp
        return response;
      } catch (error) {
        console.log(`error: ${error}`)
        error.value = `error ${error}`;
        alert('no such city!')
      }
      searchCity.value = '';
    };

    return {
      city,
      temp,
      weather,
      searchCity,
      api_key,
      api_url,
      error,
      fetchData,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>