<template>
  <header class="navbar-fixed">
    <nav class="blue">
      <div class="nav-wrapper container">
        <router-link to="/" class="brand-logo">Platzi Music</router-link>
        <form class="nav-search" autocomplete="off" @submit.prevent="search">
          <div class="input-field">
            <input id="search" type="search" required v-model="searchQuery">
            <label class="label-icon" for="search"><i class="material-icons">search</i></label>
            <i class="material-icons blue-text" @click="searchQuery = ''">close</i>
          </div>
        </form>
        <ul class="right hide-on-med-and-down">
          <li>
            <router-link :to="{name: 'search'}">Home</router-link>
          </li>
          <li>
            <router-link :to="{name: 'about'}">About</router-link>
          </li>
          <li>
            <a href="#!" class="dropdown-trigger" data-target="dropdown">
              Practice<i class="material-icons right">arrow_drop_down</i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
    <ul id="dropdown" class="dropdown-content">
      <li><router-link to="/signIn">Sign In</router-link></li>
      <li><router-link to="/computed">Computed</router-link></li>
      <li><router-link to="/watched">Watched</router-link></li>
      <li><router-link to="/dom">DOM</router-link></li>
      <li><router-link to="/reactive">Reactive</router-link></li>
      <li><router-link to="/slots">Slots</router-link></li>
      <li><router-link to="/vuex">Vuex</router-link></li>

    </ul>
  </header>
</template>

<script>
import trackService from '../../services/track'
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      searchQuery: ''
    }
  },
  methods: {
    search(){
      if(this.searchQuery === ''){
        return;
      }
      this.loadingMutation(true);
      trackService.search(this.searchQuery)
      .then(res => {
        this.loadingMutation(false);
        this.addTracks(res.tracks.items);
      })
      this.queryGlobalMutation(this.searchQuery);
      this.searchQuery = '';
    },
    ...mapMutations(['addTracks', 'queryGlobalMutation', 'loadingMutation'])
  },
  mounted(){
    M.AutoInit();
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  }
}
</script>

<style lang="scss" scoped>
.nav {
  &-search {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 40%;
  }
}
</style>
