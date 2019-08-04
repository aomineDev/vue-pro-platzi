<template>
  <div>
    <pm-header />
    <nuxt />
    <pm-footer />
  </div>
</template>

<script>
import PmHeader from '~/components/Header.vue'
import PmFooter from '~/components/Footer.vue'

export default {
  components: {
    PmHeader,
    PmFooter
  }
}
</script>


<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

body {
  padding-top: 100px;
}

.container {
  width: 80%;
  margin: 0 auto;
}
</style>
