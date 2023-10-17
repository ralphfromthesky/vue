<template>
  <div>
    <h1>whats ur name? <input type="text" v-model="name" /></h1>
    <form @submit.prevent="addTodo">
      <h1>whats ur todo list?</h1>
      <input type="text" v-model="input_content" />
      <button>submit</button>
    </form>
    <div v-for="todo in todos" :key="todo.id">
      <input type="text" v-model="todo.content" />
      <h6>{{ todo.createdAt }}</h6>
      <button @click="deletetodo(todo)">delete</button>
    </div>

    {{ current || '0'}}
  </div>
</template>

<script>
import { ref, watch, onMounted } from "vue";
export default {
  name: "todoPractice",
  setup() {
    const input_content = ref("");
    const name = ref("");
    const todos = ref([]);
    const current = ref('');

    const deletetodo = (todo) => {
      todos.value = todos.value.filter((x) => x !== todo);
    };

    const addTodo = () => {
      if (input_content.value.trim === "") {
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
      todos.value = JSON.parse(localStorage.getItem("todos") || "");
    });

    return {
      input_content,
      name,
      todos,
      addTodo,
      deletetodo,
      current
    };
  },
};
</script>

<style lang="scss" scoped>
</style>