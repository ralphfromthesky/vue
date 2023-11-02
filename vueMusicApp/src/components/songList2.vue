<template>
  <div>
    <div class="mainSongList" v-if="!isPlayerVisible">
      <ul>
        <li
          v-for="song in music"
          :key="song.id"
          @click="playAudio(song.title, song.artist, song.img)"
        >
          {{ song.title }} - {{ song.artist }}
          <img :src="song.img" alt="" srcset="" />
        </li>
      </ul>
    </div>
    <songPlayer2Vue
      :song="music[currentIndex]"
      @goBack="isPlayerVisible = !isPlayerVisible"
      v-show="isPlayerVisible"
      :A="songName"
      :B="songTitle"
      :C="songImg"
      @next="nextSong()"
      @previous="previousSong()"
    />
  </div>
</template>

<script>
import { inject, ref } from "vue";
import songPlayer2Vue from "./songPlayer2.vue";
export default {
  name: "ParentSongList",
  components: {
    songPlayer2Vue,
  },
  setup() {
    const isPlayerVisible = ref(false);
    const music = inject("musicList");
    const currentIndex = ref(0);
    const songName = ref("");
    const songTitle = ref("");
    const songImg = ref(null);

    const playAudio = (name, title, img) => {
      isPlayerVisible.value = true;
      songName.value = name;
      songTitle.value = title;
      songImg.value = img;
    };

    const nextSong = () => {
      console.log('hello')
      if (currentIndex.value < music.value.length - 1) {
        currentIndex.value += 1;
      } else {
        currentIndex.value = 0;
      }
    };
    const previousSong = () => {
      if (currentIndex.value != 0) {
        currentIndex.value -= 1;
      } else {
        currentIndex.value = music.value.length - 1;
      }
    };

    return {
      music,
      isPlayerVisible,
      playAudio,
      currentIndex,
      songName,
      songTitle,
      songImg,
      nextSong,
      previousSong,
    };
  },
};
</script>

<style scoped>
.mainSongList {
  height: 80vh;
  background-color: white;
  display: flex;
  justify-content: center;
  padding: 0 30px 0 0;
  border-radius: 15px;
  box-shadow: 10px 10px 9px #bebebe, -10px -10px 9px #bebebe;
}
img {
  height: 40px;
  width: 50px;
  margin: 2px 0;
}
li {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>