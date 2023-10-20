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
  background: rgb(238,174,202);
background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
}

</style>