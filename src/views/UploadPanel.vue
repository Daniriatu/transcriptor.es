<template>
  <div class="container">
    <img class="background" src="/Fondo.svg" alt="" />
    <!-- <Column class="column" /> -->
    <div class="recieve-box">
      <img class="logo" src="/logo.svg" alt="logo" />
      <RecieveFile class="recieve-file" />
    </div>
  </div>
</template>

<script setup>
// import Column from "../components/Column.vue";
import RecieveFile from "../components/ReciveFile.vue";
</script>

<style scoped>
.container {
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
}
.background {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}
/* .column {
  z-index: 1;
} */
.recieve-box {
  /* position: relative; */
  width: 83vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
}

.logo {
  margin-top: 100px;
  width: 10%;
}
.recieve-file {
  position: absolute;
  bottom: 80px;
}
</style>
