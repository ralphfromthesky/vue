<template>
  <div>
    <h1>product one list</h1>
    <ul>
      <li v-for="product in products" :key="product.name">
        {{ product.name }} - {{ product.price }}
      </li>
    </ul>
    <ul>
      <li v-for="product in saleProducts" :key="product">
        {{product.name}} - {{ product.price }}
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

    // Corrected the typo from 'poduct' to 'product' and returning the value
    const products = computed(() => store.state.product);
    const saleProducts = computed(() => {return store.getters.saleProducts});

    return {
      products,
      saleProducts,
    };
  },
};
</script>
