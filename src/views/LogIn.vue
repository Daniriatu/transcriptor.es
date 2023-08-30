<script setup></script>

<template>
  <div class="container">
    <img class="background" src="/Fondo.svg" alt="fondo" />
    <div class="login-panel">
      <img class="logo" src="/logo.svg" alt="logo" />
      <p class="slogan">¡Nadie te escucha como nosotros!</p>
      <input class="username" type="text" placeholder="username" />
      <input class="password" type="password" placeholder="password" />
      <button class="iniciar-sesion">Iniciar sesión</button>
      <p class="ayuda">
        ¿No puedes iniciar tu sesión? Click <u>aquí</u> para obtener ayuda.
      </p>
      <button class="registrar">Registrar ahora</button>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
}
.login-panel {
  width: 30%;
  height: 75%;
  z-index: 1;
  background-color: rgba(217, 217, 217, 28%);
  border-radius: 20px;
  box-shadow: 10px 10px 20px 5px rgba(0, 0, 0, 25%);
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
}
.background {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}
.logo {
  width: 20%;
  margin-top: 15%;
}
.slogan {
  width: 300px;
  margin-top: 29px;
  color: rgb(219, 28, 131);
  font-size: 16pt;
  font-weight: bold;
  font-family: "Montserrat", sans-serif;
  text-align: center;
}
.username {
  margin-top: 29px;
  padding-left: 30px;
  width: 60%;
  height: 6%;
  background-image: url(../assets/icons/usuario.svg);
  background-repeat: no-repeat;
  background-position: 5px;
  border: 2px rgb(217, 217, 217);
  box-shadow: 1px 2px 7px 2px rgba(0, 0, 0, 25%);
}
.password {
  margin-top: 20px;
  padding-left: 30px;
  width: 60%;
  height: 6%;
  background-image: url(../assets/icons/password.svg);
  background-repeat: no-repeat;
  background-position: 5px;
  border: 2px rgb(217, 217, 217);
  box-shadow: 1px 2px 7px 2px rgba(0, 0, 0, 25%);
}
.iniciar-sesion {
  margin-top: 20px;
  width: 60%;
  height: 6%;
  background-color: rgb(0, 154, 223);
  font-size: 12pt;
  font-weight: bold;
  color: white;
  border: none;
  box-shadow: 1px 2px 7px 2px rgba(0, 0, 0, 25%);
}
.iniciar-sesion:hover {
  cursor: pointer;
  text-decoration: underline;
}
.ayuda {
  margin-top: 20px;
  font-family: "Montserrat", sans-serif;
  font-size: 8pt;
  font-weight: 200;
}
.ayuda u {
  color: rgb(0, 154, 223);
}
.ayuda u:hover {
  cursor: pointer;
}
.registrar {
  margin-top: 20px;
  width: 60%;
  height: 6%;
  background-color: white;
  font-size: 12pt;
  font-weight: bold;
  color: rgb(0, 154, 223);
  border: none;
  box-shadow: 1px 2px 7px 2px rgba(0, 0, 0, 25%);
}
.registrar:hover {
  cursor: pointer;
  text-decoration: underline;
}
</style>
