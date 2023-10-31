<template>
  <div>
    <div class="main-container">
        <div class="songList">
            <i class='bx bx-menu' @click="$emit('showSongList')"></i>
        </div>
        <div class="songImg">
            <img src="" alt="">
        </div>
      <div class="controls">
        <i class="bx bx-skip-previous"></i>
        <i class="bx bx-play-circle"></i>
        <i class="bx bx-skip-next-circle"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "music-player",
  emits: ['showSongList'],
  setup() {
    return {};
  },
};
</script>

<style scoped>
.bx {
  font-size: 30px;
}
</style>