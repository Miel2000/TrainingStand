import Vue from 'vue'
import Router from 'vue-router'
import Cinema from './views/Cinema.vue'
import Home from './views/Home.vue'
import Boutique from './views/Boutique.vue'
import RoueDuMeme from './views/RoueDuMeme.vue'
import GameCenter from './views/GameCenter.vue'

Vue.use(Router)

export default new Router({
	mode: "history",
	base: process.env.BASE_URL,
	routes: [
		{
			path: "/cinema",
			name: "cinema",
			component: Cinema,
			meta: {},
			props: true
		},
		{
			path: "/home",
			name: "home",
			component: Home,
			meta: {},
			props: true
		},
		{
			path: "/boutique",
			name: "boutique",
			component: Boutique,
			meta: {},
			props: true
		},
		{
			path: "/rouedumeme",
			name: "rdm",
			component: RoueDuMeme,
			meta: {},
			props: true
		},
		{
			path: "/game",
			name: "game",
			component: GameCenter,
			meta: {},
			props: true
		}
	]
});
