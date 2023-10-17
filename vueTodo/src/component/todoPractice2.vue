<template>
  <div>
    <h1>what is your name? <input type="text" v-model="name" /></h1>

    <form @submit.prevent="addTodo">
      <h1>
        what on your add to do list?
        <input type="text" v-model="input_content" />
      </h1>
      <button>submit</button>
    </form>
    <div v-for="todo in todos" :key="todo.id">
      <input type="text" v-model="todo.content" />
      <small>{{ todo.createdAt }}</small>
      <button @click="deleteTodo(todo)">delele</button>
    </div>
  </div>
</template>

<script>
import { ref, watch, onMounted } from "vue";
export default {
  name: "todo",
  setup() {
    const name = ref("");
    const input_content = ref("");
    const todos = ref([]);

    const deleteTodo =(todo) => {
        todos.value = todos.value.filter((x) => x !== todo)
    }
    const addTodo = () => {
      if (input_content.value.trim() === "") {
        alert("input is empty!");
        return;
      }
      const date = new Date();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const ampm = hours >= 12 ? "pm" : "am";

      const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
      const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
      todos.value.push({
        content: input_content.value,
        createdAt: `${formattedHours}:${formattedMinutes}${ampm}`,
      });
      input_content.value = "";
    };

    watch(
      todos,
      (newVal) => {
        localStorage.setItem("todos", JSON.stringify(newVal));
      },
      { deep: true }
    );

    watch(name, (newVal) => {
      localStorage.setItem("name", newVal);
    });

    onMounted(() => {
      name.value = localStorage.getItem("name") || "";
      todos.value = JSON.parse(localStorage.getItem("todos") || []);
    });
    return {
      name,
      input_content,
      todos,
      addTodo,
      deleteTodo,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>