<template>
  <div>
    <h1>weather practise sep 14, 2023</h1>
    <form @submit.prevent="findCity">
      <input type="text" v-model="cityName" />
      <button>SEARCH</button>
    </form>
    {{ name }} <br />
    {{ weather }} <br />
    {{ temp }}
  </div>
</template>

<script>
import { ref, computed } from "vue";
import axios from "axios";
export default {
  setup() {
    const cityName = ref("");
    const api_key = ref("b110708d82c794716886b2921d982e96");
    const name = ref("");
    const weather = ref("");
    const temp = ref("");

    const api_url = computed(() => {
      return `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=${api_key.value}`;
    });
    const findCity = async () => {
      try {
        if (cityName.value.trim() === "") {
          alert("SEARCH CITY PLEASE");
          return;
        }
        const response = await axios.get(api_url.value);
        console.log(response.data);
        name.value = response.data.name;
        weather.value = response.data.weather[0].main;
        temp.value = response.data.main.temp;
      } catch (error) {
        console.log(`this is the error: ${error}`);
      }
      cityName.value = ''
    };

    return {
      cityName,
      api_key,
      api_url,
      findCity,
      name,
      weather,
      temp,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>