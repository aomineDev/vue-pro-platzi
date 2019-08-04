<template>
  <div class="container">
    <h1 class="center-align title">{{ title }}</h1>
    <div class="input-field">
      <input type="text" id="name" class="validate" autocomplete="off" v-model="name">
      <label for="name">Name</label>
    </div>
    <div class="input-field">
      <input type="text" id="lastName" class="validate" autocomplete="off" v-model="lastName">
      <label for="lastName">Last Name</label>
    </div>
    <p><strong>Full Name:</strong> {{ fullName }}</p>
    <div class="input-field input-birthdate">
      <input type="number" id="birthdate" class="validate" autocomplete="off" v-model="birthdate" data-length="4">
      <label for="birthdate">Birthdate</label>
    </div>
    <p><strong>Years:</strong> {{ year }}</p>
  </div>
</template>

<script>
export default {
  data(){
    return {
      title: 'Computed Properties',
      name: '',
      lastName: '',
      birthdate: '',
      currentYear: new Date().getFullYear()
    }
  },
  computed: {
    fullName(){
      return `${this.name} ${this.lastName}`;
    },
    year(){
      if(this.birthdate.length == 4 && this.birthdate > 1910 && this.birthdate < this.currentYear){
        return `${this.currentYear - this.birthdate} years old`;
      }else if(this.birthdate == '') {
        return '';
      }else {
        return 'Incorrect birthdate';
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  font-size: 36px;
}
.input-birthdate {
  margin-top: 30px;
}
</style>