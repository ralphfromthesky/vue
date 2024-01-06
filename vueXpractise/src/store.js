import { createStore } from "vuex";

export default createStore({
  state: {
    product: [
      { name: "bag", price: 10000 },
      { name: "shoes", price: 1500 },
      { name: "shirt", price: 5000 },
    ],
  },
  mutations: {
    // Mutations are used to modify the state
  },
  actions: {
    // Actions are where you put your business logic
  },
  getters: {
    saleProducts: (state) => {
      var saleProducts = state.product.map((product) => {
        return {
          name: product.name,
          price: product.price /2
        }
      })
      return saleProducts
    },
  },
});
