import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      keepAlive: true
    },
    component: Home
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: () => import('@/views/Detail')
  }
]

const router = new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition && to.meta.keepAlive) {
      return savedPosition
    }
    return {
      x: 0,
      y: 0
    }
  }
})

export default router
