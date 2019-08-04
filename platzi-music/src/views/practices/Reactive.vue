<template>
  <div class="container center-align">
    <p>{{ person }}</p>
    <button class="btn blue" @click="addProp">Add Prop</button>
  </div>  
</template>

<script>
export default {
  data() {
    return {
      person: {
        name: 'aomine'
      }
    }
  },
  methods: {
    addProp(){
      // this.$set(this.person, 'lastName', 'Daiki');
      this.person = Object.assign({}, this.person, {a: 1, b: 2});
    }
  }
}
</script>
