<template>
    
  <div class="theRealMainTodo">
    <div class="mainTodo">
      <div class="todolabel">
        <h1>what is your name <input type="text" v-model="name" />?</h1>
      </div>
      <form @submit.prevent="addTodo">
        <input type="text" v-model="input_todo" />
        <button>Add Todo</button>
      </form>
      <div v-for="todo in todos" :key="todo" class="todoList">
        <input type="text" v-model="todo.content" />
        {{ todo.createdAt }}
        <i class="bx bxs-trash" @click="deleteTodo(todo)"></i>
      </div>
    </div>
    <div class="description">
      
      <p> <span>Description:</span>
        I use composition API, ref, watcher and onMounted. <br> just a simple Todo
        apps that saves in local storage that is persistent <br> even when you close the tab.
      </p>
    </div>
  </div>
</template>

<script>
import { onMounted, ref, watch } from "vue";
export default {
  name: "todoApps",

  setup() {
    const name = ref("");
    const input_todo = ref("");
    const todos = ref([]);

    const deleteTodo = (todo) => {
      todos.value = todos.value.filter((x) => x !== todo);
    };

    const addTodo = () => {
      if (input_todo.value.trim() === "") {
        alert("input todo!");
        return;
      }

      const date = new Date();
      const thisDay = date.getDate();
      const thisMonth = date.getMonth() + 1;
      const thisYear = date.getFullYear();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();
      const ampm = hours >= 12 ? "pm" : "am";

      const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
      const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
      const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

      todos.value.push({
        content: input_todo.value,
        createdAt: `${formattedHours}:${formattedMinutes}${ampm}`,
      });

      input_todo.value = "";
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
      todos,
      input_todo,
      addTodo,
      deleteTodo,
    };
  },
};
</script>

<style scoped>
.theRealMainTodo {
  display: flex;
  width: 60vw;
  justify-content: space-evenly;
}
.mainTodo {
  height: 50vh;
  padding: 15px;
  border-radius: 10px;
  border-radius: 50px;
  border-radius: 9px;
  box-shadow: 7px 7px 14px #f8f5f5, -7px -7px 14px #ffffff;
}
.todolabel {
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
}
form {
  margin: 20px 0;
  display: flex;
  justify-content: center;
}
form input {
  margin-right: 20px;
}
.todoList {
  display: flex;
  justify-content: space-around;
  padding: 5px 0;
  align-items: center;
}
.bx {
  font-size: 30px;
}
input {
  padding: 5px;
  border-radius: 5px;
}
.description {
    display: flex;
    justify-content: center;
    align-items: center;
}
.description span {
    font-size: 20px;
    font-weight: 800;
}
</style>