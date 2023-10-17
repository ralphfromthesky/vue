

<template>
  <div>
    <!-- <calculatorVue/> -->
    <!-- <calcVue/> -->
    <!-- <calPractiseVue/> -->
    <NewCal />
  </div>
</template>

<script>
import calcVue from "./components/calc.vue";
import calculatorVue from "./components/calculator.vue";
import NewCal from "./components/newCal.vue";

export default {
  name: "app",
  components: {
    calculatorVue,
    calcVue,
    NewCal,
    
  },
};
</script>

<style lang="scss" scoped>
</style>