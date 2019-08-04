<template>
  <div class="container box">
    <div class="signIn-box">
      <div class="img-box">
        <img src="../../assets/login/logo.jpg" class="" alt="">
      </div>
      <h1 class="primary-text">Registro estación Platzi</h1>
      <form action="">
        <div class="input-field">
          <input id="nombre" type="text" class="validate">
          <label for="nombre">Nombre</label>
        </div>
        <div class="input-field">
          <input id="apellido" type="text" class="validate">
          <label for="apellido">Apellido</label>
        </div>
        <div class="input-field">
          <input id="cargo" type="text" class="validate">
          <label for="cargo">Cargo</label>
        </div>
      </form>
      <div class="btn-box">
        <button class="waves-effect waves-light primary btn">Enviar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
h1 {
  font-weight: bold;
  font-size: 23px;
  margin-top: 16px;
  align-self: flex-start;
}
form {
  width: 100%;
}
.primary {
  background-color: #01BFD7;
  &-text {
    color: #00bfd6;
  }
}
.box {
  height: calc(100vh - 64px);
  display: flex;
  justify-content: center;
  align-items: center;
}
.signIn-box {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 320px;
  padding: 16px 32px;
}
.img-box {
  width: 262px;
}
.btn-box {
  align-self: flex-end;
}
.input-field label {
  color: #ff9300;
}
.input-field input[type=text]:focus + label {
  color: #ff9300;
}
.input-field input[type=text]:focus,
input.valid[type=text] {
  border-bottom: 1px solid #ff9300;
  box-shadow: 0 1px 0 0 #ff9300;
}
</style>

