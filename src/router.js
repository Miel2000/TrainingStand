import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import StandTire from './views/StandTire.vue'

Vue.use(Router)

export default new Router({
	mode: "history",
	base: process.env.BASE_URL,
	routes: [
		{
			path: "/home",
			name: "home",
			component: Home,
			meta: {},
			props: true
		},
		{
			path: "/workout",
			name: "standentraiment",
			component: StandTire,
			meta: {},
			props: true
		}
	]
});
