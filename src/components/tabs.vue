<template lang="pug">
    .tabs
        ul.list
            li.item(v-for="item of tabs")
                router-link(
                    :to="item.url",
                    exact-active-class="active"
                ).link {{item.name}}
</template>

<script>
    export default {
		data() {
			return {
				tabs: [
					{name: 'tab 1', url: '/admin'},
					{name: 'tab 2', url: '/admin/blog'},
					{name: 'tab 3', url: '/admin/works'}
                ]
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
    .tabs{
        background-color: #f0efe9;
    }

    .list{
        display: flex;
    }

    .link{
        display: block;
        text-decoration: none;
        background-color: #f0efe9;
        color: #455a64;
        transition: all .5s;
        padding:25px 70px;
        text-transform: uppercase;
        border-right:2px solid #fff;

        &:hover{
            background-color: #fff;
            color: #00bfa5;
        }
    }
    .active{
        background-color: #fff;
        color: #00bfa5;
    }
</style>