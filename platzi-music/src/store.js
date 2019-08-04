import Vue from 'vue'
import Vuex from 'vuex'

import trackService from './services/track'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    tracks: [],
    track: {},
    trackSelect: {},
    queryGlobal: '',
    isLoading: false,
  },
  mutations: {
    increment(state, payload = {}){
      state.count += payload.number || 1
    },
    decrement(state){
      state.count--
    },
    setTrack(state, track){
      state.track = track;
    },
    setTrackSelect(state, track){
      state.trackSelect = track;
    },
    addTracks(state, value){
      state.tracks = value;
    },
    queryGlobalMutation(state, value){
      state.queryGlobal = value;
    },
    loadingMutation(state, value){
      state.isLoading = value;
    }
  },
  actions: {
    incrementAsync(context, payload){
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('increment', payload)
          resolve()
        }, 2000)
      })
    },
    getTrackById(context, payload){
      return trackService.getById(payload.id)
      .then(res => {
        context.commit('setTrack', res)
      })
    }
  },
  getters: {
    getDouble(state){
      return state.count * 2
    },
    getTitle(state){
      return `${state.track.name} - ${state.track.artists[0].name}`
    }
  }
})
