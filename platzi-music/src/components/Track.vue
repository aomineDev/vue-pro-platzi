<template>
  <div class="card hoverable">
    <div class="card-image waves-effect waves-block waves-light">
      <img v-if="track && track.album" class="activator" :src="track.album.images[1].url" alt="image">
    </div>
    <div v-if="track" class="card-content">
      <span class="card-title activator grey-text text-darken-4"><span class="activator track-name">{{ track.name }}</span><i class="material-icons right">more_vert</i></span>
      <p>
        <small>{{ track.duration_ms | ms-to-mm }}</small>
      </p>
      <p>
        <a href="javascript:void(0)" @click="selectTrack" class="btn-floating btn-flat waves-effect"><i class="material-icons blue-text">audiotrack</i></a>
        <a href="javascript:void(0)" @click="goToTrack(track.id)" class="btn-floating btn-flat"><i class="material-icons blue-text">play_arrow</i></a>
      </p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4 track-title"><strong v-if="track && track.name">{{ track.name }}</strong><i class="material-icons right">close</i></span>
      <p v-if="track && track.artists">{{ track.artists[0].name }}</p>
      <audio v-if="track && track.preview_url" controls class="track-preview">
        <source :src="track.preview_url" type="audio/mpeg">
        Your browser does not support the audio element.
      </audio>
    </div>
  </div>
</template>

<script>
import trackMixin from '../mixins/track'

export default {
  props: [
    'track'
  ],
  mixins: [ trackMixin ],
  methods: {
    goToTrack(id){
      this.$router.push({ name: 'track', params: { id } })
    }
  },
  mounted(){
    var names = document.querySelectorAll('.track-name');
    names.forEach(function(e){
      if(e.innerHTML.length > 15){
        e.innerHTML = e.innerHTML.substr(0, 15) + '...';
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.track {
  &-title {
    display: flex !important;
    align-items: center;
    justify-content: space-between;
  }
  &-preview {
    width: 100%;
  }
}
.card {
  transition: .5s;
}
.btn-floating {
  background-color: transparent;
  &:hover{
    background-color: transparent;
  }
}
</style>
