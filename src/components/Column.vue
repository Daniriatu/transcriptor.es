<template>
  <div class="column">
    <div class="title">
      <p>Mis documentos</p>
      <button>
        <img src="../assets/icons/close.svg" alt="cerrar" />
      </button>
    </div>
    <div class="documents">
      <div class="border"></div>
    </div>
    <div class="bottom">
      <div class="user-info">
        <div class="avatar">U</div>
        <p class="username">Username</p>
      </div>
      <button class="menu">
        <img src="../assets/icons/menu.svg" alt="menu" />
      </button>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.column {
  width: 17vw;
  height: 100vh;
  background-color: rgba(228, 218, 223);
  box-shadow: 10px 10px 20px 5px rgba(0, 0, 0, 25%);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.title {
  margin-top: 20px;
  padding: 0px 20px 0px 20px;
  display: flex;
  justify-content: space-between;
}
.title p {
  font-size: 14pt;
  font-weight: 600;
}
.title button {
  border: none;
  background-color: transparent;
}
.title button:hover {
  cursor: pointer;
}
.documents {
  position: relative;
  background-color: transparent;
  padding-top: 20px;
  height: 87vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.border {
  position: absolute;
  bottom: 0px;
  width: 95%;
  border-bottom: 1px solid rgb(173, 172, 172);
}
.bottom {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.user-info {
  display: flex;
  justify-content: start;
  align-items: center;
}
.avatar {
  width: 45px;
  height: 45px;
  background-color: blueviolet;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18pt;
  color: white;
}
.username {
  margin-left: 10px;
  font-size: 14pt;
  font-weight: 600;
  color: rgb(126, 123, 123);
}
.menu {
  border: none;
  background-color: transparent;
}
</style>
