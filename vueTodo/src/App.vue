<template>
  <div>
    <!-- <todosVue/>
    <todolistVue /> -->
    <!-- <newTodoPractise/> -->
    <!-- <VueTodoPractise2/> -->
    <!-- <todoPractice2Vue/> -->
    <todoStillPractiseVue/>
  </div>
</template>

<script>
import newTodoPractise from "./component/newTodoPractise.vue";
import todolistVue from "./component/todolist.vue";
import todoPractice2Vue from './component/todoPractice2.vue';
import todosVue from "./component/todos.vue";
import todoStillPractiseVue from './component/todoStillPractise.vue';
import VueTodoPractise2 from "./component/vueTodoPractise2.vue";

export default {
  name: "todos",
  components: {
    todolistVue,
    todosVue,
    newTodoPractise,
    VueTodoPractise2,
    todoPractice2Vue,
    todoStillPractiseVue
  },
};
</script>

<style lang="scss" scoped>
</style>