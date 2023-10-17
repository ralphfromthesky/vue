<template>
  <div>
    <h1>what's ur name? <input type="text" v-model="name" /></h1>
    <form @submit.prevent="addTodo">
      <input type="text" v-model="todos_input" />
      <button>submit</button>
    </form>
    <div v-for="todo in todos" :key="todo.id">
      <input type="text" v-model="todo.content"/>
      {{ todo.createdAt }}
      <button @click="deleteTodo(todo)">delete</button>
    </div>
  </div>
</template>

<script>
import { ref, watch, onMounted } from "vue";
export default {
  setup() {
    const name = ref("");
    const todos_input = ref("");
    const todos = ref([]);

const deleteTodo = (todo) => {
todos.value = todos.value.filter((x) => x !== todo)
}

    const addTodo = () => {
      if (todos_input.value.trim() === "") {
        alert("empty input");
        return;
      }

      const date = new Date();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const ampm = hours >= 12 ? "pm" : "am";
      const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
      const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

      todos.value.push({
        content: todos_input.value,
        createdAt: `${formattedHours}:${formattedMinutes}${ampm}`,
      });
      todos_input.value = "";
    };

    watch(name, (newVal) => {
      localStorage.setItem("name", newVal);
    });
    watch(
      todos,
      (newVal) => {
        localStorage.setItem("todos", JSON.stringify(newVal));
      },
      { deep: true }
    );

    onMounted(() => {
      name.value = localStorage.getItem("name") || "";
      todos.value = JSON.parse(localStorage.getItem("todos") || []);
    });

    return {
      name,
      todos_input,
      addTodo,
      todos,
      deleteTodo
    };
  },
};
</script>

<style lang="scss" scoped>
</style>