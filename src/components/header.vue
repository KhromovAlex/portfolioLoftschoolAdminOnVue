<template lang="pug">
    header
        .title Панель администрирования
        a(href="/").logout Вернуться на сайт

</template>

<script>
</script>

<style lang="scss" scoped>
    header{
        background-color: #00bfa5;
        display: flex;
        align-items: center;
        padding: 30px;
    }

    .title{
        color: #fff;
        font-size: 28px;
    }

    .logout{
        color: #fff;
        margin-left:auto;
        &:hover{
            text-decoration: none;
        }
    }
</style>