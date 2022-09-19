import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [

  {
    path: '/Login',
    name: 'Login',
    component: () => import('../views/home/userLogin.vue'),
    meta: { title: '登录页', keepAlive: false, transition: 'fade' }
  },
  {
    path: '/Index',
    name: 'Index',
    component: () => import('../views/home/userIndex.vue'),
    meta: { title: '主页', keepAlive: false, transition: 'fade' }
  },
  {
    path: '/',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    meta: { title: '测试页', keepAlive: false }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
