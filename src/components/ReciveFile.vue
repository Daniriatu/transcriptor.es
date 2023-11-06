<template>
  <div class="container-recive">
    <form action="" @submit.prevent="">
      <div class="email-submit">
        <input
          type="email"
          class="email"
          placeholder="  email"
          v-model="email"
        />
        <button
          class="submit"
          :class="{ click: isActive }"
          @click="enviar"
          @mousedown="mousedown"
          @mouseup="mouseup"
        >
          Enviar
        </button>
      </div>

      <div class="upload-file">
        <div class="upload-text">
          {{ text }}
          <img
            class="upload-icon"
            src="../assets/icons/upload.svg"
            alt="upload"
            v-show="showIcon"
          />
        </div>

        <input
          class="file"
          type="file"
          accept="video/*, audio/*"
          @change="fileUploaded"
        />
      </div>
    </form>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";

let _file;
let email = "";
let pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
let isActive = ref(false);
let text = ref("subir tu archivo o arrastrarlo aquí");
let showIcon = ref(true);

//Recibir el archivo desde el usuario
const fileUploaded = (e) => {
  let file = e.target.files[0];
  _file = file;
};

//Animación de hacer click
const mousedown = () => {
  isActive.value = true;
};

//Animación de hacer click
const mouseup = () => {
  isActive.value = false;
};

//Botón de subir el archivo al backend
const enviar = async () => {
  let checkEmail = pattern.test(email);

  if (checkEmail) {
    text.value = "Estamos escuchando...";
    await submit();
  } else {
    alert("El formato de email no es correcto.");
  }
};

// Subir archivo con axios a backend
const submit = async () => {
  let formData = new FormData();
  formData.append("audio", _file);
  formData.append("email", email);

  axios.defaults.baseURL = "https://rabbit.transcriptor.es";

  try {
    let res = await axios.post("/sender", formData);
    if (res.data.code >= 200 && res.data.code <300) {
      text.value = "¡Archivo recibido!"
    }
    console.log("first");
    console.log(res);
    console.log(_file);
    console.log(email);
  } catch (err) {
    if (err){
      text.value = "Oh... ha surgido un error inprevisto."
    }
    console.log("err");
    console.log(err);
    console.log(_file);
    console.log(email);
  }
};
</script>

<style scoped>
.container-recive {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 75%;
}
form {
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.email-submit {
  display: flex;
}
.email {
  margin-bottom: 30px;
  width: 200px;
  height: 30px;
  background-position: 5px;
  border: 2px rgb(217, 217, 217);
  box-shadow: 1px 2px 7px 2px rgba(0, 0, 0, 25%);
}

.submit {
  padding: 5px 10px;
  height: 30px;
  margin-left: 10px;
  background-color: rgba(0, 154, 223, 1);
  border: none;
  color: white;
  text-align: center;
  box-shadow: 1px 2px 7px 2px rgba(0, 0, 0, 25%);
  cursor: pointer;
}

.click {
  cursor: pointer;
  box-shadow: inset 1px 2px 7px 2px rgba(0, 0, 0, 25%);
}

.upload-file {
  width: 100%;
  height: 65px;
  background-color: rgba(0, 154, 223, 1);
  color: white;
  font-size: 16pt;
  font-weight: 600;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.upload-text {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
}
.upload-file:hover {
  cursor: pointer;
}

.upload-icon {
  margin-left: 10px;
}
</style>
