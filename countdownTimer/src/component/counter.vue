<template>
  <div>
    <div class="main">
      <div class="day">
        <h1>{{ displayDays }} :</h1>
        <small>DAYS</small>
      </div>
      <div class="day">
        <h1>{{ displayHours }} :</h1>
        <small>HOURS</small>
      </div>
      <div class="day">
        <h1>{{ displayMinutes }} :</h1>
        <small>MINUTES</small>
      </div>
      <div class="day">
        <h1>{{ displaySeconds }}</h1>
        <small>SECONDS</small>
      </div>
    </div>
    <todoAppVue />
  </div>
</template>

<script>
import { computed, onMounted, ref } from "vue";

export default {
  name: "CounterTimer",
  components: {
  },
  setup() {
    const displayDays = ref(0);
    const displayHours = ref(0);
    const displayMinutes = ref(0);
    const displaySeconds = ref(0);

    const now = new Date();
    const end = new Date(2023, 11, 31, 23, 59, 59, 999);
    const distance = ref(end.getTime() - now.getTime());

    const calculateTimeUnits = () => {
      displayDays.value = Math.floor(distance.value / (1000 * 60 * 60 * 24));
      displayHours.value = Math.floor(
        (distance.value % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      displayMinutes.value = Math.floor(
        (distance.value % (1000 * 60 * 60)) / (1000 * 60)
      );
      displaySeconds.value = Math.floor((distance.value % (1000 * 60)) / 1000);
    };

    const showRemaining = () => {
      const timer = setInterval(() => {
        distance.value -= 1000;

        if (distance.value < 0) {
          clearInterval(timer);
          return;
        }

        calculateTimeUnits();
      }, 1000);
    };

    onMounted(() => {
      calculateTimeUnits();
      showRemaining();
    });

    return {
      displayDays,
      displayHours,
      displayMinutes,
      displaySeconds,
      now,
      end,
      distance
    };
  },
};
</script>

<style scoped>
.main {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-radius: 20px;
}
.day small {
  margin-left: 20px;
}
h1 {
  font-size: 5rem;
  margin: 0;
  padding: 0;
  padding-left: 15px;
}
</style>
