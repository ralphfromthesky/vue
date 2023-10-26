<template>
  <div class="mainBody" :style="{backgroundColor: backGroundChange}">
       <RouterView />
  </div>
</template>

<script>
import { inject, ref } from "vue";
import todoAppsVue from "../views/todoApps.vue";

export default {
  name: "main-body",
  components: {
    todoAppsVue,
  },
  inject:['backGroundChange'],
  setup () {
    return {
    }
  }
};
</script>

<style scoped>
.mainBody {
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  

}
.cloudsBackground {
  background-image: url("../images/cloudWeather.jpg");
}
.rainBackground {
  background-image: url("../images/mobileRain.jpg");
}
.clearBackground {
  background-image: url("../images/clearMobile.jpg");
}
</style>