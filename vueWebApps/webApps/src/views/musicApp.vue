<template>
  <div>
    <div class="main-container">
      <musicSongPlayerVue v-if="showMusicPlayer" @showSongList="showSongList = true, showMusicPlayer = false"/>
      <musicSongListVue @click="showSongList = false" v-if="showSongList" @showSongPlayer="showMusicPlayer = true"/>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue'
import musicSongListVue from "./musicSongList.vue";
import musicSongPlayerVue from "./musicSongPlayer.vue";
musicSongListVue;
export default {
  name: "music-app",
  components: {
    musicSongPlayerVue,
    musicSongListVue,
  },
  setup() {
    const showMusicPlayer = ref(false);
    const showSongList = ref(true)

    return {
      showMusicPlayer,
      showSongList
    };
  },
};
</script>

<style scoped>
.main-container {
  border: 2px solid red;
  width: 25vw;
  height: 60vh;
  padding: 20px;
  border-radius: 10px;
}
</style>