import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
	{
		path: '/admin',
		component: require('./components/about.vue')
	},
	{
		path: '/admin/works',
		component: require('./components/works.vue')
	},
	{
		path: '/admin/blog',
		component: require('./components/blog.vue')
	}
];

export default new VueRouter({
	routes,
	mode: 'history'
})