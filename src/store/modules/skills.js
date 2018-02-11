const axios = require("axios");

const skills = {
  state: {
    data: [],
    form: []
  },
  getters: {
    skills(state) {
      return state.data;
    },
    skillsOfForm(state) {
        return state.form
    }
  },
  mutations: {
    getSkills(state) {
        axios.get("/api/").then(res => {
          state.data = res.data.skills;
        });
    },
    setSkillsOfForm(state, n) {        
        state.form.push(n)
    },
    pushSkillsOfForm(state, n) {
        state.form.map(item => {if(item.name === n.name){return item.perc = n.perc}})
    }
  },
  actions: {
    getSkills({ commit }) {
      commit('getSkills')
    }
  }
};

export default skills;
