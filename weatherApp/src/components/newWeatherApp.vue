<template>
  <div>
    <h1>weather app2</h1>

    <form @submit.prevent="searchCity">
      <input type="text" v-model="input_city" />
      <button>search</button>
    </form>
    <div>
      <h3>{{ city }}</h3>
      <h3>{{ temp }}</h3>
      <h3>{{ weather }}</h3>
      <h3>{{ localTime }}</h3>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref, computed } from "vue";
export default {
  name: "weatherVue",
  setup() {
    const input_city = ref("");
    const city = ref("");
    const temp = ref("");
    const weather = ref("");
    const api_key = ref("623b5b8cc655cc4be0a0eb2de06ed1ed");
    const localTime = ref('')

    const api_url = computed(() => {
      return `https://api.openweathermap.org/data/2.5/weather?q=${input_city.value}&appid=${api_key.value}`;
    });

    const searchCity = async () => {
      try {
        if (input_city.value.trim() === "") {
          alert("input city");
          return;
        }

        const response = await axios.get(api_url.value);
        // Get UTC timestamp from API response
        const utcTimestamp = response.data.dt;

        // Get timezone offset in seconds from API response
        const timezoneOffset = response.data.timezone;

        // Calculate local timestamp
        const localTimestamp = utcTimestamp + timezoneOffset;

        // Convert local timestamp to a human-readable date
        const localDate = new Date(localTimestamp * 1000);

        // Set localTime value to the formatted local date
        localTime.value = localDate.toLocaleString();
        console.log(response);
        city.value = response.data.name;
        temp.value = response.data.main.temp;
        weather.value = response.data.weather[0].main;
        timeZone.value = response.data.timezone;
        time.value = response.data.dt;
        return response;
      } catch (error) {
        console.log(`error: ${error}`);
      }
    };
    return {
      input_city,
      city,
      temp,
      api_key,
      weather,
      api_url,
      searchCity,
      localTime
    };
  },
};
</script>

<style lang="scss" scoped>
</style>

// Calculate local timestamp
const localTimestamp = utcTimestamp + timezoneOffset;

// Convert local timestamp to a human-readable date
const localDate = new Date(localTimestamp * 1000);

// Set localTime value to the formatted local date
localTime.value = localDate.toLocaleString();