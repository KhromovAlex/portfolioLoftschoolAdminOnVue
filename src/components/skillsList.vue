<template lang="pug">
    div.skills-list
        h3.title {{skillType}}
        table.table
            skill-item(
                v-for="skill in skills",
                :key="skill._id",
                :skill="skill",
                v-if="checkSkillType(skillType) === skill.type"
            )
</template>

<script>
    export default {
        props: {
            skillType: String,
            skills: Array
        },
        methods: {
            checkSkillType(skillType) {
                switch (skillType) {
                    case 'frontend' :
                        return 1;
                    case 'workflow' :
                        return 2;
                    case 'backend' :
                        return 3;
                }
            }
        },
        components: {
            skillItem: require('./skillItem.vue')
        }
    }
</script>

<style lang="scss" scoped>
    .title{
        font-size: 16px;
        font-weight:bold;
        text-transform: capitalize;
        margin-bottom: 20px;
    }
    .table{
        margin-left: 20px;
    }
    .skills-list{
        margin-top: 30px;
    }
</style>
