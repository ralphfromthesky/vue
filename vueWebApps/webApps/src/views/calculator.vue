<template>
  <div class="main-container">
    <div class="container">
      <div class="calculator">
        <div class="btn display">{{ current || "0" }}</div>
        <div class="btn" @click="clear">AC</div>
        <div class="btn" @click="sign">+/-</div>
        <div class="btn" @click="percent">%</div>
        <div class="btn operator" @click="add">+</div>
        <div class="btn" @click="append('7')">7</div>
        <div class="btn" @click="append('8')">8</div>
        <div class="btn" @click="append('9')">9</div>
        <div class="btn operator" @click="minus">-</div>
        <div class="btn" @click="append('4')">4</div>
        <div class="btn" @click="append('5')">5</div>
        <div class="btn" @click="append('6')">6</div>
        <div class="btn operator" @click="times">*</div>
        <div class="btn" @click="append('1')">1</div>
        <div class="btn" @click="append('2')">2</div>
        <div class="btn" @click="append('3')">3</div>
        <div class="btn operator" @click="divide">/</div>
        <div class="btn zero" @click="append('0')">0</div>
        <div class="btn" @click="dot">.</div>
        <div class="btn operator" @click="equal">=</div>
      </div>
    </div>
    <div class="descriptions">
      <h1>this is the calculator</h1>
    </div>
  </div>
</template>
  
  <script>
import { ref } from "vue";

export default {
  name: "calculator",
  setup() {
    const current = ref("");
    const previous = ref(null);
    const operator = ref(null);
    const operatorClicked = ref(false);

    const clear = () => {
      current.value = "";
    };

    const sign = () => {
      current.value =
        current.value.charAt(0) === "-"
          ? current.value.slice(1)
          : `-${current.value}`;
    };

    const percent = () => {
      current.value = `${parseFloat(current.value) / 100}`;
    };

    const append = (number) => {
      if (operatorClicked.value) {
        current.value = "";
        operatorClicked.value = false;
      }
      current.value = `${current.value}${number}`;
    };

    const dot = () => {
      if (current.value.indexOf(".") === -1) {
        append(".");
      }
    };

    const setPrevious = () => {
      previous.value = current.value;
      operatorClicked.value = true;
    };

    const divide = () => {
      operator.value = (a, b) => a / b;
      setPrevious();
    };

    const times = () => {
      operator.value = (a, b) => a * b;
      setPrevious();
    };

    const minus = () => {
      operator.value = (a, b) => a - b;
      setPrevious();
    };

    const add = () => {
      operator.value = (a, b) => a + b;
      setPrevious();
    };

    const equal = () => {
      if (operator.value) {
        current.value = `${operator.value(
          parseFloat(previous.value),
          parseFloat(current.value)
        )}`;
        previous.value = null;
        operatorClicked.value = true;
      }
    };

    return {
      current,
      append,
      clear,
      sign,
      percent,
      dot,
      times,
      divide,
      add,
      minus,
      equal,
    };
  },
};
</script>
  
  <style scoped>
.main-container {
  display: flex;
}
.container {
    padding: 5px;
    border-radius: 5px;
}
.calculator {
  margin: 0 auto;
  width: 400px;
  font-size: 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(50px, auto);
  gap: 5px;
  background-color: black;
  padding: 10px;
  border-radius: 10px;
}

.display {
  grid-column: 1 / 5;
  background-color: #472f2f;
  color: black;
}

.zero {
  grid-column: 1 / 3;
}

.btn {
  background-color: #f2f2f2;
  border: 1px solid #999;
  border-radius: 10px;
}

.operator {
  background-color: orange;
  color: white;
}
</style>
  