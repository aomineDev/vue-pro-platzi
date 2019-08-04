<template>
  <div class="card-panel white-text" :class="{'red': error, 'green': !error}">
    <slot name="body">
      Algo anduvo mal
    </slot>
  </div>
</template>

<script>
export default {
  props: [
    'error'
  ]
}
</script>

<style lang="scss" scoped>
 .card-panel {
   position: fixed;
   top: 84px;
   right: 20px;
   z-index: 4;
   width: 400px;
 } 
</style>
