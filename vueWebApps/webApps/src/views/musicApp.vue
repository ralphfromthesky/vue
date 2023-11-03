<template>
  <div class="music-app-container">
    <div class="main-container">
      <musicSongListVue />
    </div>
    <div class="description">
      <h3>Description:</h3>
      <br>
      <p>
        Discover and enjoy your favorite music with our easy-to-use app. Browse
        songs, switch tracks, and immerse yourself in the world of music
        effortlessly. Your go-to companion for all your musical moments.
      </p>
      <br>
      <h3>Using Compostion API, ref, component events-emits and props.</h3>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import musicSongListVue from "./musicSongList.vue";
export default {
  name: "music-app",
  components: {
    musicSongListVue,
  },
  setup() {
    return {};
  },
};
</script>

<style scoped>
.music-app-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
.main-container {
  border: 2px solid red;
  width: 20vw;
  height: 60vh;
  padding: 20px;
  border-radius: 10px;
}
.description {
  width: 25%;
}
</style>
