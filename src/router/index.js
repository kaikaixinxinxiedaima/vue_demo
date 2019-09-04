import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/test',
      name: '/',
      component: () => import('../pages/article/test')
    },
    {
      path: '/article/list',
      name: '/article/list',
      component: () => import('../pages/article/article_list')
    },
    {
      path: '/article/detail/:articleId',
      name: '/article/detail',
      component: () => import('../pages/article/article_detail')
    },
    {
      path: '*',
      redirect: '/article/list'
    }
  ]
})
