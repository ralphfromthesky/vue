<template>
  <div class="appBody">
    <songList2Vue/>
  </div>
</template>

<script>
import { ref } from "vue";
import songList2Vue from './components/songList2.vue';
export default {
  name: "app",
  components: {
    songList2Vue,
  },

  setup() {
   
  
    return {
  
    };
  },
};
</script>

<style scoped>
.appBody {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: yellow;
}
</style>