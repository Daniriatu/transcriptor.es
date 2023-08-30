<template>
  <div class="container-recive">
    <div class="status"></div>
    <button>
      subir tu archivo o arrastrarlo aquí
      <img src="../assets/icons/upload.svg" alt="upload" />
    </button>
  </div>
</template>

<script setup></script>

<style scoped>
.container-recive {
  width: 75%;
}
button {
  width: 100%;
  height: 40px;
  background-color: rgba(0, 154, 223, 1);
  color: white;
  font-size: 16pt;
  font-weight: 600;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
}

button img {
  margin-left: 10px;
}
</style>
