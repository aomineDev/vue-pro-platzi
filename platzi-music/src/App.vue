<template>
  <div id="app">
    <pm-header />

    <main>
      <router-view/>
    </main>

    <pm-footer />
  </div>
</template>

<script>
import PmFooter from './components/layout/Footer.vue'
import PmHeader from './components/layout/Header.vue'

export default {
  components: {
    PmFooter,
    PmHeader
  },

  

}
</script>


<style lang="scss">
img {
  width: 100%;
  display: block;
}
</style>
