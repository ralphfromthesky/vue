<template>
  <div>
    <h1>whats ur name? <input type="text" v-model="name" /></h1>

    <form @submit.prevent="addTodo()">
      <h1>whats on your todolist?</h1>
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
import { ref, watch, onMounted, computed } from "vue";
export default {
  name: "todos",
  setup() {
    const name = ref("");
    const input_content = ref("");
    const todos = ref([]);

    
    const deleteTodo = (todo) => {
todos.value = todos.value.filter((x) => x !== todo)
    }
    
    const addTodo = () => {
        if(input_content.value.trim() === '') {
            alert('input todo list!')
            return;
        }
        todos.value.push({
            content: input_content.value,
            createdAt: new Date().getTime()
        })
        input_content.value = ''
    };

    watch(name, (newVal) => {
      localStorage.setItem("names", newVal);
    });
    watch(todos, (newVal) => {
        localStorage.setItem('todos', JSON.stringify(newVal))
    }, {deep:true})

    onMounted(() => {
      name.value = localStorage.getItem("names") || "";
      todos.value = JSON.parse(localStorage.getItem('todos') || [])
    });

    return {
      name,
      input_content,
      todos,
      addTodo,
      deleteTodo
    };
  },
};
</script>

<style lang="scss" scoped>
</style>