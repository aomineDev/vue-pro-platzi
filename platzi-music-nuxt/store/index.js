export const state = () => ({
  tracks: [],
  track: {}
})

export const mutations = {
  addTracks (state, tracks) {
    state.tracks = tracks
  },
  selectTrack (state, track) {
    state.track = track
  }
}
