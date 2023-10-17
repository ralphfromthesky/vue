<template>
  <div class="main-container">
    <counterVue />
  </div>
</template>

<script>
import counterVue from "./component/counter.vue";
export default {
  name: "main-app",
  components: {
    counterVue,
  },
};
</script>

<style scoped>
.main-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
}
</style>