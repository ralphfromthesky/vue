<template>
  <div>
    <div class="mainSongPlayer">
      <div class="menu">
        <i class="bx bx-menu" @click="$emit('goBack')"></i>
      </div>
      <div class="songDetails">
        <div class="imgDiv">
          <i class="bx bx-skip-previous-circle" @click="$emit('previous')"></i>
          <img :src="C" alt="" srcset="" />
          <i class="bx bx-skip-next-circle" @click="$emit('next')"></i>
        </div>
        <div class="controller">
          <i class="bx bx-play-circle"></i>
          <i class="bx bx-pause-circle"></i>
        </div>
        <h4>{{ A }}</h4>
        <small>{{ B }}</small>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "songPlayer",
  emits: ["goBack", 'next', 'previous'],
  props: ["A", "C", "B", 'song'],
  setup() {

    
    return {


    };
  },
};
</script>

<style scoped>
.mainSongPlayer {
  height: 80vh;
  width: 20vw;
  border-radius: 15px;
  background-color: #7e5eff;
  display: flex;
  justify-content: start;
  flex-direction: column;
  border-radius: 25px;
  box-shadow: 10px 10px 9px #bebebe, -10px -10px 9px #bebebe;
}
.imgDiv {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
}
.imgDiv .bx {
  font-size: 50px;
}
.songDetails {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.menu {
  display: flex;
  justify-content: end;
  margin-bottom: 40%;
}
.menu .bx {
  font-size: 50px;
}
h4 {
  margin: 0;
}
.controller {
  margin-bottom: 20%;
}
.controller .bx {
  margin-top: 10%;
  font-size: 60px;
}
img {
  height: 20vh;
  width: 10vw;
  border-radius: 50%;
}
.bx {
  color: white;
}
</style>