<template>
  <div class="main">
    <div class="songPlayer">
      <div class="songNav">
        <i class="bx bx-menu"></i>
      </div>
      <div class="nowPlaying">
        <audio :src="song.audioUrl" preload="auto" autoplay ref="audioPlayer"></audio>
        <h5>Now Playing</h5>
      </div>
      <div class="imgSong">
        <i class="bx bx-skip-previous-circle" @click="$emit('previous')"></i>
        <img :src="song.img" alt="" :class="{ rotate: isRotate }" />
        <i class="bx bx-skip-next-circle" @click="$emit('next')"></i>
      </div>
      <div class="titleSong">
        <h3>{{ songTitle }}</h3>
        <h6>{{ artistSong }}</h6>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, inject, computed } from "vue";
export default {
  name: "songPlayer",
  props: ["artistSong", "songTitle", "songImg", "songUrl", "isRotate", 'song'],
  emits: ['next', 'previous'],
  setup() {


    return {

    };
  },
};
</script>

<style scoped>
.main {
  height: 60vh;
  border-radius: 20px;
  color: white;
  background-color: white;
  /* box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff; */
}
.songPlayer {
  border-radius: 30px;
  height: 60vh;
  width: 20vw;
  background-color: #7e5eff;
  border: 2px solid gray;
}
.extra {
  height: 15vh;
}
.songNav {
  display: flex;
  justify-content: end;
  padding: 20px 50px 0 0;
  margin-bottom: 20%;
}
.controller {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 20vw;
  position: absolute;
  transform: translateY(12vh);
}

.bx {
  font-size: 50px;
  color: white;
}
.controller .bx {
  color: #7e5eff;
  background-color: white;
  border-radius: 50%;
}
.nowPlaying {
  display: flex;
  justify-content: center;
}
.bx-menu {
  font-size: 30px;
}
img {
  height: 200px;
  width: 200px;
  border-radius: 50%;
}
.imgSong {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 10%;
}
.titleSong {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}
h3,
h6 {
  margin: 0;
}
.rotate {
  animation: spin 10s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>