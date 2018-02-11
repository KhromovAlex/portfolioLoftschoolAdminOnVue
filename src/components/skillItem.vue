<template lang="pug">
    tr
        td {{skill.name}}
        td
            input(type="text", @input="pushEditSkill", v-model.number="skillForm.perc").input-perc
        td %
</template>

<script>
    export default {
        props: {
            skill: Object
        },
        data(){
            return{
                skillForm: {
                    name: this.skill.name,
                    perc: this.skill.perc,
                    type: this.skill.type
                }
            }
        },
        methods: {
            pushAllSkills() {
                this.$store.commit('setSkillsOfForm',this.skillForm)
            },
            pushEditSkill() {
                this.$store.commit('pushSkillsOfForm',this.skillForm)
            }
        },
        created() {
            this.pushAllSkills()
        }
    }
</script>

<style lang="scss" scoped>
    .input-perc{
        width: 50px;
        border-radius: 5px;
        border:none;
        text-align: center;

        &:focus{
            outline:0;
        }
    }
</style>
