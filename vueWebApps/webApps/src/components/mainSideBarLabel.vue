<template>
  <div class="mainSidebarLabel">
    <!-- <div class="mainSidebarLabelBx">
      <h1>VUE JS apps</h1>
      <h1>
        <i
          class="bx bx-menu"
          id="sidebarIcon"
          @click="$emit('slideThisBack')"
        ></i>
      </h1>
    </div> -->
    <div class="label">
      <i
        class="bx bx-menu"
        id="sidebarIcon"
        @click="$emit('slideThisBack')"
      ></i>
      <cloudBackgroundVue class="cloudBg" />
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
import cloudBackgroundVue from "../views/cloudBackground.vue";

export default {
  name: "sidebar-label",
  emits: ["slideThisBack"],
  components: {
    cloudBackgroundVue,
  },
};
</script>

<style scoped>
.mainSidebarLabel {
  height: 100vh;
  width: 10vw;
  box-shadow:  17px 17px 15px #868686,
             -17px -17px 15px #ffffff;}
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
  justify-content: space-between;
  position: relative;
}

.cloudBg {
  position: absolute;
  z-index: -1;
  height: 100%;
}
</style>