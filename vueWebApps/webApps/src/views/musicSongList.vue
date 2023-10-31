<template>
  <div>
    <div class="main-container" v-for="music in musicList" :key="music">
      <h3 @click="$emit('showSongPlayer')">{{ music.title }}</h3>
    </div>
  </div>
</template>

<script>
import { ref, inject } from "vue";

export default {
  name: "song-list",
  emits: ["showSongPlayer"],
  setup() {
    const musicList = inject("musicList");
    const audioPlayer = ref(null);
    const audioTitle = ref("");
    const artistName = ref("");
    const audioImg = ref("");
    const playAudio = (artist, titleName, audi) => {
      if (audioPlayer.value) {
      }
    };
    return {
      musicList,
      audioPlayer,
      audioTitle,
      artistName,
      audioImg,
      playAudio,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>