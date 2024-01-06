<template>
  <div>
    <h1>this is product two</h1>
    <ul>
      <li v-for="product in products" :key="product.name">
        {{ product.name }} - {{ product.price }}
      </li>
    </ul>
    <ul>
      <li v-for="product in saleProducts" :key="product">
        {{ product.name }} - {{ product.price }}
      </li>
    </ul>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const products = computed(() => store.state.product);
    const saleProducts = computed(() => {
        return store.getters.saleProducts
    });
    return {
      products,
      saleProducts,
    };
  },
};
</script>

<style lang="scss" scoped></style>
