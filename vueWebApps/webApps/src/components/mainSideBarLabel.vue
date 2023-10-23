<template>
  <div class="mainSidebarLabel">
    <div class="mainSidebarLabelBx">
      <h1>VUE JS apps</h1>
      <h1>
        <i
          class="bx bx-menu"
          id="sidebarIcon"
          @click="$emit('slideThisBack')"
        ></i>
      </h1>
    </div>
    <div class="label">
      <h2>Home</h2>
      <h2>Todo apps</h2>
      <router-link to="/calculator"> <h2>Calculator</h2> </router-link>
      <h2>Weather App</h2>
      <h2>Music App</h2>
      <h2>Quiz App</h2>
      <h2>CRUD</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "sidebar-label",
  emits: ["slideThisBack"],
};
</script>

<style scoped>
.mainSidebarLabel {
  height: 100vh;
  background-color: blue;
  width: 10vw;
}
.mainSidebarLabelBx {
  display: flex;
  justify-content: end;
}
.bx {
  font-size: 50px;
}
.bx-menu {
  border: 2px solid black;
  margin-bottom: 20%;
}
.label {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}
</style>