// deps
import { createRouter, createWebHistory } from 'vue-router'

// views
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Blog from '../views/Blog.vue'
import Contact from '../views/Contact.vue'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/about',
		name: 'About',
		component: About
	},
	{
		path: '/blog',
		name: 'Blog',
		component: Blog
	},
	{
		path: '/contact',
		name: 'Contact',
		component: Contact
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
