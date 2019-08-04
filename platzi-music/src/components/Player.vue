<template>
  <div class="card" v-show="show">
    <div class="card-image waves-effect waves-block waves-light">
      <img v-if="trackSelect && trackSelect.album" :src="trackSelect.album.images[1].url" alt="image">
      <span class="card-close btn-floating waves-effect white"><i class="material-icons black-text" @click="close">close</i></span>
    </div>
    <div class="card-content">
      <p class="card-title grey-text text-darken-4">
        <span class="track-name" v-if="trackSelect && trackSelect.name">{{ name }}</span> 
        <small>[{{ trackSelect.duration_ms | ms-to-mm }}]</small>
      </p>
      <p>
        <audio v-if="trackSelect && trackSelect.preview_url" :src="trackSelect.preview_url" controls class="card-audio"></audio>
      </p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      // trackSelect: {},
      name: '',
      show: false
    }
  },
  methods: {
    close(){
      // this.trackSelect = {};
      this.$store.commit('setTrackSelect', {})

      setTimeout(() => {
        this.show = false;
      }, 10);
    }
  },
  watch: {
    trackSelect(){
      this.name = this.trackSelect.name;
      if(this.name && this.name.length > 13){
        this.name = this.name.substr(0, 13) + '...';
      }
      this.show = true;
    }
  },
  computed: {
    ...mapState(['trackSelect'])
  },
  created(){
    // this.$bus.$on('set-track', (track) => {
    // this.trackSelect = track;
    // })
  }
}
</script>

<style lang="scss" scoped>
.card {
  position: fixed;
  z-index: 4;
  width: 300px;
  height: 450px;
  bottom: 20px;
  right: 20px;
  &-close {
    position: absolute;
    top: 12px;
    right: 12px;
  }
  &-audio {
    width: 100%;
  }
}
</style>
