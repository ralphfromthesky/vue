<template>
  <div>
    <h1>whats your name? <input type="text" v-model="name" /></h1>

    <form @submit.prevent="addTodo">
      <input type="text" v-model="input_content" />
      <button>submit</button>
    </form>

    <div v-for="todo in todos" :key="todo.id">
      <input type="text" v-model="todo.content" />
      {{ todo.createdAt }}
      <button @click="deleteTodo(todo)">delete</button>
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

    const deleteTodo = (todo) => {
      todos.value = todos.value.filter((x) => x !== todo);
    };

    const addTodo = () => {
      if (input_content.value.trim() === "") {
        return;
      }

      const date = new Date();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();
      const ampm = hours >= 12 ? "am" : "pm";

      const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
      const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
      const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

      todos.value.push({
        content: input_content.value,
        createdAt: `${formattedHours}:${formattedMinutes}:${formattedSeconds}${ampm}`,
      });

      input_content.value = "";
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