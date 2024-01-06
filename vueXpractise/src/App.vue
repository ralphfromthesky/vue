<template>
  <div>
    <productOneVue/>
    <productTwoVue/>
  </div>
</template>

<script>
import productOneVue from "./components/productOne.vue";
import productTwoVue from "./components/productTwo.vue";

export default {
  components: {
    productOneVue,
    productTwoVue,
  },
  setup() {

    return {
      
    };
  },
};
</script>

<style lang="scss" scoped></style>
