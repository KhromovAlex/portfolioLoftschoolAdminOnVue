<template lang="pug">
    .about
        .modal(v-if="modalShow")
            .modal__header
            .modal__content
                p.message {{status}}
                button(type="button", @click="modalHide").modal__button ОК
        h2.title Страница «Обо мне»
        form.form
            .skills-wrap
                skills-list(
                    v-for="(skillType, index) in skillsTypes",
                    :skillType="skillType",
                    :key="index",
                    :skills="skills"
                )
        button.button-save(type="button" @click.prevent="putSkills") Сохранить
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import axios from "axios";

export default {
  data() {
    return {
      skillsTypes: ["frontend", "backend", "workflow"],
      status: "",
      modalShow: false
    };
  },
  computed: {
    ...mapGetters(["skills", "skillsOfForm"])
  },
  methods: {
    ...mapActions(["getSkills"]),
    putSkills() {
      axios.put("/api/", {
          skills: this.skillsOfForm
          }).then(res => {
        this.status = res.data.msg;
      });
      this.modalShow = true;
    },
    modalHide() {
      this.modalShow = false;
    }
  },
  created() {
    this.getSkills();
  },
  components: {
    skillsList: require("./skillsList.vue")
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
  color: #fff;
  margin-top: 30px;
  border-radius: 5px;
  border: 0;
  padding: 5px;
  cursor: pointer;
  background-color: #00bfa5;
  transition: all 0.5s;
  width: 100px;
  &:focus {
    outline: 0;
  }
  &:hover {
    background-color: #009688;
  }
}
.title {
  font-size: 21px;
  margin-bottom: 50px;
}
.form {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin-top: -30px;
}
.button-save{
  color: #fff;
  margin-top: 30px;
  border-radius: 5px;
  border: 0;
  padding: 15px;
  cursor: pointer;
  background-color: #00bfa5;
  transition: all 0.5s;
  width: 150px;
  &:focus {
    outline: 0;
  }
  &:hover {
    background-color: #009688;
  }
}
</style>
