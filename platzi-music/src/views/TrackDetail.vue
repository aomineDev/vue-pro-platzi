<template>
  <div class="container">
    <pm-loader v-show="isLoading" />
      <pm-player />
    <div class="row" v-if="!isLoading">
      <div class="col s3">
        <figure>
          <img :src="track.album.images[1].url" alt="img">
          <p class="center-align"><a href="javascript:void(0)" @click="selectTrack" class="btn-floating btn-flat waves-effect"><i class="material-icons blue-text">audiotrack</i></a></p>
        </figure>
      </div>
      <div class="col s8">
        <div class="card">
            <h1 class="card-title">{{ getTitle }}</h1>
          <div class="card-content">
            <ul>
              <li v-for="(v, k) in track" :key="k">
                <strong>{{ k }}</strong>:&nbsp;
                <span>{{ v }}</span>  
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
import PmPlayer from '../components/Player'
import PmLoader from '../components/Shared/Loader.vue'
import trackMixin from '../mixins/track'

export default {
  components: {
    PmLoader,
    PmPlayer
  },
  mixins: [
    trackMixin
  ],
  data(){
    return {
      isLoading: true
    }
  },
  methods: {
    ...mapMutations(['setTrack']),
    ...mapActions(['getTrackById'])
  },
  computed: {
    ...mapState(['tracks', 'track']),
    ...mapGetters(['getTitle'])
  },
  created(){
    const id = this.$route.params.id

    if(this.tracks.length){
      this.tracks.forEach((e, i) => {
        if(e.id == id){
          this.setTrack(e);
          this.isLoading = false
        }
      })
    }

    if(!this.tracks.length || this.track.id != id) {
      this.getTrackById({ id })
      .then(() => {
        this.isLoading = false
      })

    }
  }
}
</script>

<style lang="scss" scoped>
.card-title {
  font-size: 32px;
  margin: 0;
  padding: 24px 24px 0;
}
.btn-floating {
  background-color: transparent;
  &:hover{
    background-color: transparent;
  }
}
</style>


