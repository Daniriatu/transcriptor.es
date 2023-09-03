<template>
  <div class="container-recive">
    <div class="status"></div>

    <div class="upload-file">
      <div class="upload-text">
        subir tu archivo o arrastrarlo aquí
        <img
          class="upload-icon"
          src="../assets/icons/upload.svg"
          alt="upload"
        />
      </div>

      <input
        class="file"
        type="file"
        accept="video/*, audio/*"
        @change="fileUploaded"
      />
    </div>
  </div>
</template>

<script setup>
import axios from "axios";

let _file;

const fileUploaded = (e) => {
  let file = e.target.files[0];
  // if (file.type !== "video/mp4" && file.type !== "audio/mpeg") {
  //   alert("need to be mp4 or mp3");
  // } else {
  //   _file = file;
  // }
  _file = file;

  console.log(file);
  submit();
};

const submit = async () => {
  let formData = new FormData();
  formData.append("audio", _file);
  formData.append("email", "daniriaatuu@gmail.com");

  axios.defaults.baseURL = "https://rabbit.transcriptor.es";

  // axios.post("/sender", formData).then(
  //   (res) => {
  //     console.log("res");
  //     console.log(res);
  //   },
  //   (reason) => {
  //     console.log("reason");
  //     console.log(reason);
  //   }
  // );

  try {
    let res = await axios.post("/sender1", formData);
    console.log("first");
    console.log(res);
  } catch (err) {
    console.log("err");
    console.log(err);
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
.email {
  margin-bottom: 30px;
  width: 200px;
  height: 30px;
  background-position: 5px;
  border: 2px rgb(217, 217, 217);
  box-shadow: 1px 2px 7px 2px rgba(0, 0, 0, 25%);
}

.submit {
  margin-left: 10px;
  height: 30px;
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
