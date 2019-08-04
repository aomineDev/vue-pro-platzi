<template>
  <div class="container">

    <transition name="move">
      <pm-loader v-show="isLoading" />
    </transition>
    
    <transition name="move">
      <pm-notification v-show="showNotification" :error="notificationError">

        <p slot="body" class="center-align reset">
          {{ message }}
        </p>
      </pm-notification>
    </transition>

    <div v-show="tracks.length">
      <div v-show="!isLoading">
        <pm-player />
        <transition-group name="fade" tag="div" class="trackBox">
          <div v-for="track in tracks" :key="track.id">
            <pm-track
              :track="track"
              @select="setSelectedTrack"
              :class="{ 'is-active': track.id === selectedTrack }"
              v-blur="track.preview_url"
            />
          </div>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import PmLoader from '../components/Shared/Loader'
import PmTrack from '../components/Track'
import Loader from '../components/Shared/Loader'
import PmNotification from '../components/Shared/Notification'
import PmPlayer from '../components/Player'

export default {
  components: {
    PmLoader,
    PmTrack,
    PmNotification,
    PmPlayer
  },
  data(){
    return {
      message: '',
      selectedTrack: '',
      showNotification: false,
      notificationError: false
    }
  },
  methods: {
    setSelectedTrack(id){
      this.selectedTrack = id;
    }
  },
  computed: {
    ...mapState(['tracks', 'queryGlobal', 'isLoading'])
  },
  watch: {
    tracks(){
      if(this.tracks.length === 0){
        this.message = `No se encontraron musicas con el nombre ${this.queryGlobal} :(`;
        this.notificationError = true;
      }else {
        this.message = `Encontrados: ${this.tracks.length}`;
        this.notificationError = false;
      }
        this.showNotification = true;
    },
    showNotification(){
      if(this.showNotification){
        setTimeout(() => {
          this.showNotification = false;
        }, 3000);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.is-active {
  transform: scale(1.05) translateY(-25px);
  box-shadow: 0 34px 8px -16px rgba(0,0,0,0.2);
}
.reset {
  margin: 0;
}
.trackBox {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 24px;
  margin-top: 32px;
}
</style>
