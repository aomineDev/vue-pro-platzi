<template>
  <div class="card-panel" :class="{'bg-red': error, 'bg-green': !error}">
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
  width: 400px;
  padding: 20px;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
  color: #fff;
  font-family: 'Quicksand';
  text-align: center;
}
.bg {
  &-red {
    background-color: #FF5252;
  }
  &-green {
    background-color: #4CAF50;
  }
}
</style>
