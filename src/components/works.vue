<template lang="pug">
    .works
        p {{msg}}
        h2.title Страница «Мои работы»
        form(enctype="multipart/form-data")
            .project Добавить работу
                input(
                    placeholder="Название проекта",
                    v-model="name"
                ).project-name
                input(
                    placeholder="Технологии",
                    v-model="tech"
                ).project-tech
                label.add-img
                    input(
                        type="file",
                        @change="getImage"
                    ).add-img__input
                    span.add-img__text Загрузить картинку
            button.project-add(type="button", @click="postSlide") Добавить 
</template> 

<script>
import axios from "axios";
export default {
  data() {
    return {
      name: "",
      tech: "",
      picture: "",
      msg: ""
    };
  },
  methods: {
    getImage(e) {
      return (this.picture = e.target.files[0]);
    },
    postSlide() {
      let data = new FormData();
      data.append("name", this.name);
      data.append("tech", this.tech);
      data.append("picture", this.picture);
      axios.post("/api/works", data).then(Response => {
        return (this.msg = Response.data.msg);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.title {
  font-size: 21px;
  margin-bottom: 50px;
}
.project {
  font-size: 16px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
}
.project-name,
.project-tech {
  width: 300px;
  border-radius: 5px;
  padding: 15px 20px;
  border: 0;
  margin-top: 20px;
}
.add-img {
  text-align: center;
  cursor: pointer;
  background: url("~img/add-img.png") left center no-repeat;
  padding-left: 40px;
  color: #00bfa5;
  margin-top: 20px;
  padding: 15px 20px;
  width: 250px;
  position: relative;
  z-index: 10;

  &:focus {
    outline: 0;
  }
}

.add-img__input {
  opacity: 0;
  height: 0;
  position: absolute;
  top: 0;
  left: -9999px;
}

.add-img__text {
  vertical-align: middle;
  cursor: pointer;
}

.project-add {
  color: #fff;
  margin-top: 30px;
  border-radius: 5px;
  border: 0;
  padding: 15px;
  cursor: pointer;
  background-color: #00bfa5;
  transition: all 0.5s;
  &:focus {
    outline: 0;
  }
  &:hover {
    background-color: #009688;
  }
}
</style>
