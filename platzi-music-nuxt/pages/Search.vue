<template>
  <div class="container">
    <div class="search">
      <form action="" class="search-box" @submit.prevent="search">
        <input type="text" class="search-bar" v-model="searchQuery">
        <label class="search-icon"><i class="fas fa-search"></i></label>
      </form>
    </div>

    <pm-notification v-show="showNotification" :error="notificationError">
      <p slot="body">
        {{ message }}
      </p>
    </pm-notification>

    <pm-loader v-show="isLoading" />

    <pm-player :track="trackSelect" />

    <div class="track-box" v-if="tracks.length" v-show="!isLoading">
      <pm-track v-for="(t, i) in tracks" :key="t.id" :track="t" />
    </div>
  </div>
</template>

<script>
import PmTrack from '~/components/Track.vue'
import PmPlayer from '~/components/Player.vue'
import PmLoader from '~/components/shared/Loader.vue'
import PmNotification from '~/components/shared/Notification.vue'
import trackService from '~/plugins/track'

export default {
  components: {
    PmTrack,
    PmPlayer,
    PmLoader,
    PmNotification
  },
  data() {
    return {
      searchQuery: '',
      isLoading: false,
      message: '',
      showNotification: false,
      notificationError: false
    }
  },
  methods: {
    search(){
      if(this.searchQuery === ''){
        return;
      }
      this.isLoading = true;
      trackService.search(this.searchQuery)
      .then(res => {
        this.$store.commit('addTracks', res.tracks.items)
        this.isLoading = false;
      })
      this.searchQuery = '';
    }
  },
  watch: {
    tracks(){
      if(this.tracks.length === 0){
        this.message = `No se encontraron musicas :(`;
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
  },
  computed: {
    tracks() {
      return this.$store.state.tracks
    },
    trackSelect() {
      return this.$store.state.track
    }
  },
}
</script>


<style lang="scss">
.search {
  display: flex;
  justify-content: center;
  font-family: 'Quicksand';
  color: #212121;
  &-box {
    position: relative;
    width: 500px;
  }
  &-bar {
    border: none;
    outline: none;
    width: 100%;
    padding-bottom: 2px;
    padding-left: 2px;
    padding-right: 20px;
    border-bottom: 1px solid #ccc;
    font-size: 16px;
    font-family: 'Quicksand';
    color: #212121;
    transition: .5s;
    &:focus {
      border-bottom: 1px solid #448AFF;
    }
    &:focus + .search-icon {
      color: #448AFF;
    }
  }
  &-icon {
    position: absolute;
    top: 0;
    right: 0;
    color: #ccc;
    transition: .5s;
  }
}
.track {
  &-box {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 24px;
  }
}
</style>
