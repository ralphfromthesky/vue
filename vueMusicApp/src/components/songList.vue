<template>
  <div class="main">
    <div class="song-list-player">
      <div class="songPlayerDiv">
        <songPlayerVue
          :song="music[currentIndex]"
          :artistSong="artistName"
          :songTitle="songName"
          :songImg="songImg"
          :isRotate="rotate"
          @next="nextSong"
          @previous="previousSong"
        />
      </div>
      <audio
        id="myAudio"
        ref="audioPlayer"
        controls
        :class="isShow ? 'audioHide' : 'audioShow'"
      ></audio>
      <div v-for="song in music" :key="song.id" class="songList">
        <div
          class="title"
          @click="playAudio(song.audioUrl, song.title, song.artist, song.img)"
        >
          <h3>{{ song.title }}</h3>
          <h6>{{ song.artist }}</h6>
          <hr />
        </div>
        <div>
          <img :src="song.img" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { ref, inject, provide } from "vue";
import songPlayerVue from "./songPlayer.vue";

export default {
  name: "songList",
  components: { songPlayerVue },
  setup() {
    const audioPlayer = ref(null);
    const music = inject("musicList");
    const artistName = ref("");
    const songName = ref("");
    const songImg = ref("");
    const songUrl = ref(null);
    const isShow = ref(false);
    const rotate = ref(true);
    const currentIndex = ref(0);

    const playAudio = (audioUrl, title, artist, img) => {
      if (audioPlayer.value) {
        audioPlayer.value.src = audioUrl;
        artistName.value = artist;
        songName.value = title;
        songImg.value = img;
        audioPlayer.value.play();
        isShow.value = true;
      }
    };
    const nextSong = () => {
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
      audioPlayer,
      playAudio,
      artistName,
      songName,
      songImg,
      isShow,
      songUrl,
      rotate,
      currentIndex,
      previousSong,
      nextSong,
    };
  },
};
</script>

<style scoped>
.main {
  background-color: white;
  border-radius: 20px;
}

.song-list-player {
  border-radius: 30px;
  padding: 10px;
  position: relative;
}
h3,
h6 {
  margin: 0;
  padding: 0;
}
h3 {
  font-size: 15px;
}
.songList {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
img {
  height: 50px;
}
.bx {
  font-size: 40px;
  color: gray;
  cursor: pointer;
}

audio {
  position: absolute;
  transform: translateY(-8vh);
  right: 50px;
  display: none;
}
.audioHide {
  display: block;
}
.audioShow {
  display: none;
}
.songPlayerDiv {
  margin-bottom: 10%;
}
</style>