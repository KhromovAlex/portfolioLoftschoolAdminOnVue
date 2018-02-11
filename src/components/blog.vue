<template lang="pug">
    .blog
        .modal(v-if="modalShow")
            .modal__header
            .modal__content
                p.message {{msg}}
                button(type="button", @click="modalHide").modal__button ОК
        h2.title Страница «Блог»
        .article Добавить запись
            input(
            type="text",
            v-model="article.title",
            placeholder="Название"
            ).article-name
            input(
            type="date",
            v-model="article.date",
            placeholder="Дата"
            ).article-data
            textarea.article-description(
            v-model="article.text",
            placeholder="Содержание"
            )
        button.article-add(type="button", @click.prevent="addArticle") Добавить
</template>

<script>
const axios = require("axios");

export default {
  data() {
    return {
      msg: "",
      article: {
        title: "",
        date: "",
        text: ""
      },
      modalShow: false
    };
  },
  methods: {
    addArticle() {
      axios
        .post("/api/blog", {
            title:this.article.title,
            date:this.article.date,
            text:this.article.text,
        })
        .then(body => {
          return this.msg = body.data.message;
        })
        .catch(error => {
          return this.msg = error.message;
        });
      this.article.title = "";
      this.article.date = "";
      this.article.text = "";
      this.modalShow = true;
    },
    modalHide() {
      this.modalShow = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  width: 400px;
  height: 150px;
  border: 1px solid #ccc;
  border-radius: 5px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
}
.modal__header {
  position: absolute;
  height: 35px;
  width: 100%;
  background-color: #00bfa5;
}
.modal__content {
  position: absolute;
  height: 115px;
  width: 100%;
  bottom: 0;
  background-color: #eeede6;
}
.message {
  color: #3f525b;
  text-align: center;
}
.modal__button {
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
}

.title {
  font-size: 21px;
  margin-bottom: 50px;
}
.article {
  font-size: 16px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
}
.article-name,
.article-data {
  width: 300px;
  border-radius: 5px;
  padding: 15px 20px;
  border: 0;
}
.article-name,
.article-data,
.article-description {
  margin-top: 20px;
}

.article-add,
.modal__button {
  color: #fff;
  margin-top: 30px;
  border-radius: 5px;
  border: 0;
  padding: 10px 15px;
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

.article-description {
  width: 500px;
  height: 170px;
  resize: none;
  border-radius: 5px;
  border: 0;
  padding: 15px 20px;
}
</style>
