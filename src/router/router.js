import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/pages/Home.vue'
import DefaultPosts from '@/components/DefaultPosts.vue'
import PostPage from '@/pages/PostPage.vue'
import AboutView from '@/pages/About.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
	{
    path: '/posts',
    name: 'Posts',
    component: DefaultPosts
  },
	{
    path: '/posts/:id',
    name: 'Post',
    component: PostPage
  },
  {
    path: '/about',
    name: 'about',
		component: AboutView
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../pages/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
