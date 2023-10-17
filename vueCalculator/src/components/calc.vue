<template>
  <div>
    <input type="text" v-model="current" />
    <div class="calc">
      <button @click="append('1')">1</button
      ><button @click="append('2')">2</button
      ><button @click="append('3')">3</button
      ><button @click="append('4')">4</button
      ><button @click="append('5')">5</button
      ><button @click="append('6')">6</button
      ><button @click="append('7')">7</button
      ><button @click="append('8')">8</button
      ><button @click="append('9')">9</button
      ><button @click="append('0')">0</button><button @click="times()">*</button
      ><button @click="minus()">-</button><button @click="add()">+</button
      ><button @click="divide()">/</button><button @click="dot">.</button
      ><button @click="clear">C</button>
      <button @click="equal" class="equal">=</button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "cal",
  setup() {
    const current = ref("");
    const previous = ref(null);
    const operator = ref(null);
    const operatorClicked = ref(false);

    const setOperator = () => {
      previous.value = current.value;
      operatorClicked.value = true;
    };

    const times = () => {
      operator.value = (a, b) => a * b;
      setOperator();
    };

    const add = () => {
      operator.value = (a, b) => a + b;
      setOperator();
    };

    const minus = () => {
      operator.value = (a, b) => a - b;
      setOperator();
    };

    const divide = () => {
      operator.value = (a, b) => a / b;
      setOperator();
    };
    const append = (number) => {
      if (operatorClicked.value) {
        current.value = "";
        operatorClicked.value = false;
      }
      current.value = current.value + number;
    };
    const dot = () => {
      if (current.value.indexOf(".") === -1) {
        append(".");
      }
    };
    const clear = () => {
      current.value = "";
    };
    const equal = () => {
      if (operator.value) {
        current.value = operator.value(
          parseFloat(previous.value),
          parseFloat(current.value)
        );
        previous.value = null;
        operatorClicked.value = true;
      }
    };

    return {
      current,
      clear,
      append,
      dot,
      operator,
      times,
      add,
      minus,
      divide,
      previous,
      operatorClicked,
      setOperator,
      equal,
    };
  },
};
</script>

<style scoped>
.calc {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 10vw;
}
.equal {
  grid-column: 1/5;
}
button {
  padding: 20px;
}
input {
  height: 10vh;
  width: 20vw;
}
</style>