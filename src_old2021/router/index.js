import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import PostsPage from '@/pages/PostsPage.vue'
import About from '@/pages/About.vue'
import PostPage from '@/pages/PostPage.vue'
import PostsPageWithStore from '@/pages/PostsPageWithStore.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
	{
    path: '/posts',
    name: 'Posts',
    component: PostsPage
  },
  {
    path: '/about',
    name: 'About',
		component: About
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
		// КАКОЙ-ТО НЕОБЫЧНЫЙ ВИД КОМПОНЕНТА:
    // component: () => import(/* webpackChunkName: "about" */ '../pages/About.vue')
  },
	{
    path: '/posts/:id',
    name: 'Post',
    component: PostPage
  },
	{
    path: '/postsstore',
    name: 'PostsWithStore',
    component: PostsPageWithStore,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
