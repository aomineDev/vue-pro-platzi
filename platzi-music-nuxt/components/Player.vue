<template>
  <div class="player">
    <div class="player-img-box" v-if="track.album">
      <img :src="track.album.images[1].url" alt="img" class="player-img">
      <button class="player-close" @click="selectTrack({})"><i class="fas fa-times"></i></button>
    </div>
    <div class="player-content" v-if="track.name">
      <h2 class="player-name" v-if="track.name">{{ track.name | truncate }}</h2>
      <h3 class="player-title" v-if="track.artists">{{ track.artists[0].name }}</h3>
      <p v-if="track.preview_url">
        <audio :src="track.preview_url" controls class="player-audio"></audio>
      </p>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  props: [
    'track'
  ],
  methods: {
    ...mapMutations(['selectTrack'])
  },
  filters: {
    truncate(str){
      return str.length > 20 ? str.substr(0, 20) + '...' : str;
    }
  }
}
</script>


<style lang="scss">
.player {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #fff;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
  &-img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    &-box {
      position: relative;
      width: 100%;
      height: 300px;
    }
  }
  &-content {
    padding: 20px;
    font-family: 'Quicksand';
  }
  &-name {
    font-size: 24px;
    font-weight: 600;
  }
  &-title {
    font-size: 16px;
    font-weight: 400;
    padding-bottom: 16px;
  }
  &-close {
    position: absolute;
    top: 8px;
    right: 8px;
    outline: none;
    border: none;
    cursor: pointer;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #fff;
    font-family: 'Quicksand';
    font-size: 20px;
  }
  &-audio {
    width: 100%;
  }
}
</style>
