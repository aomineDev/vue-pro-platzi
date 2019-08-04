<template>
  <div class="track">
    <div class="track-img-box">
      <img :src="track.album.images[1].url" alt="img" class="track-img">
    </div>
    <div class="track-content">
      <h2 class="track-name">{{ track.name | truncate }}</h2>
      <h3 class="track-title">{{ track.artists[0].name }}</h3>
      <button class="track-play" @click="selectTrack(track)"><i class="fas fa-play"></i></button>
      <nuxt-link :to="'track/' + track.id" class="track-link"><i class="fas fa-info"></i></nuxt-link>
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
.track {
  margin-top: 36px;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
  &-img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    &-box {
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
  &-play,
  &-link {
    color: #448AFF;
    font-size: 20px;
  }
  &-play {
    outline: none;
    border: none;
    cursor: pointer;
    background-color: transparent;
  }
  &-link {
    margin-left: 16px;
  }
}
</style>
