<template>
  <div>
    <div class="main-container">
      <div class="songList">
        <i class="bx bx-menu" @click="$emit('showSonglist')"></i>
      </div>
      <div>
        <h3>{{ song }} - {{ artist }}</h3>
        <img :src="img" alt="" />
      </div>
      <div class="audioDivs">
        <audio
          id="audioPlayer"
          preload="auto"
          autoplay
          ref="audioPlayer"
          :src="audio"
        ></audio>
      </div>
      <div class="controls">
        <i class="bx bx-skip-previous" @click="$emit('prev')"></i>
        <i class="bx bx-play-circle" ></i>
        <i class="bx bx-skip-next-circle" @click="$emit('next')"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "music-player",
  emits: ["showSonglist", "next", "prev", "playThisAudio"],
  props: ["song", "artist", "img", "audio"],
  setup() {
    return {};
  },
};
</script>

<style scoped>
.bx {
  font-size: 30px;
}
img {
  height: 100px;
  width: 100px;
  border-radius: 50%;
}
</style>
