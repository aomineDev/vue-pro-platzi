<template>
    <div class="container">

    <pm-player :track="trackSelect" />

    <div class="info-box">
      <div class="info-header">
        <div class="info-img-box">
            <img :src="track.album.images[1].url" alt="img" class="info-img">
        </div>
        <button class="info-play" @click="$store.commit('selectTrack', track)"><i class="fas fa-play"></i></button>
      </div>

      <div class="info-detail-box">
        <div class="info-detail">
        <h1 class="info-detail-title">🎵 {{ track.name }} - {{ track.artists[0].name }}</h1>
        <ul class="info-detail-content">
          <li class="info-detail-item" v-for="(v, k) in track" :key="k">
            <strong>{{ k }}:&nbsp;</strong>
            <span>{{ v }}</span>
          </li>
        </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import trackService from '~/plugins/track'
import PmPlayer from '~/components/Player.vue'

export default {
  components: {
    PmPlayer
  },
  data(){
    return {
      track: {}
    }
  },
  head(){
    return {
      title: this.track.name
    }
  },
  computed: {
    trackSelect() {
      return this.$store.state.track
    }
  },
  asyncData({ params }){
    const id = params.id

    return trackService.getById(id)
    .then(res => {
      return { track: res }
    })
  }
}
</script>

<style lang="scss">
.info {
  &-box {
    display: grid;
    grid-template-columns: 300px auto;
    grid-gap: 64px;
  }
  &-header {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  &-img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    &-box {
      width: 100%;
      height: 400px;
      background-color: #000;
    }
  }
  &-play {
    margin-top: 16px;
    color: #448AFF;
    font-size: 20px;
    border: none;
    outline: none;
    cursor: pointer;
    background-color: transparent;

  }
  &-detail {
    font-family: 'Quicksand';
    &-title {
      padding-bottom: 16px;
    }
    &-content {
      padding-left: 0;
      list-style: none;
    }
  }
}
</style>
