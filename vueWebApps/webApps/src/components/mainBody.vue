<template>
  <div class="mainBody">
    <!-- <todoAppsVue class="todos"/>  -->
       <RouterView />

  </div>
</template>

<script>
import todoAppsVue from "../views/todoApps.vue";

export default {
  name: "main-body",
  components: {
    todoAppsVue,
  },
};
</script>

<style scoped>
.mainBody {
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;

}

</style>