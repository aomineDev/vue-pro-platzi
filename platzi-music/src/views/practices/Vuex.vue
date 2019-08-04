<template>
  <div class="container">
    <div class="center-align">
      <img src="../../assets/logo.png" alt="vue" class="logo">
      <h1>Vuex</h1>
    </div>

    <div>
      <h2>Contador</h2>
      <p>{{ count }}</p>
      <p>{{ getDouble }}</p>
      <div>
        <button @click="increment" class="btn red waves-effect waves-light">+</button>
        <button @click="decrement" class="btn blue waves-effect waves-light">-</button>
        <button @click="increment10" class="btn green waves-effect waves-light">+10</button>
        <button @click="incrementIn2s" class="btn yellow waves-effect waves-light black-text">in 2s</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
import {  } from 'vuex'

export default {
  methods: {
    increment10(){
      this.increment({
        number: 10
      })
    },
    incrementIn2s(){
      this.incrementAsync({number: 2})
      .then(() => {
        console.log('action terminada...')
      })
    },
    ...mapMutations(['increment', 'decrement']),
    ...mapActions(['incrementAsync'])
  },
  computed: {
    ...mapState(['count']),
    ...mapGetters(['getDouble'])
  }
}
</script>

<style lang="scss" scoped>
.logo {
  width: 200px;
  height: 200px;
  margin-top: 32px;
  display: inline-block;
}
.blue,
.green,
.yellow {
  margin-left: 16px;
}
</style>

