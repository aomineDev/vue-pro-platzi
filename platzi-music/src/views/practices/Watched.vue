<template>
  <div class="container">
    <h1 class="center-align title">{{ title }}</h1>
    <div class="input-field">
      <input type="text" id="name" class="validate" autocomplete="off" v-model="name">
      <label for="name">Name</label>
    </div>
    <p><strong>New Val:</strong> {{ newVal }}</p>
    <p><strong>Old Val:</strong> {{ oldVal }}</p>
  </div>
</template>

<script>
export default {
  data(){
    return {
      title: 'Watched Properties',
      name: '',
      newVal: '',
      oldVal: ''
    }
  },
  watch: {
    name(newVal, oldVal) {
      this.newVal = newVal;
      this.oldVal = oldVal;
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  font-size: 36px;
}
</style>