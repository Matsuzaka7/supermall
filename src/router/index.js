import Vue from 'vue'
import vueRouter from 'vue-router'

const Home = () => import('../views/home/Home.vue')
const Category = () => import('../views/category/Category.vue')
const Cart = () => import('../views/cart/Cart.vue')
const Profile = () => import('../views/profile/Profile.vue')
const Detail = () => import('../views/detail/Detail.vue')


// 1.安装插件
Vue.use(vueRouter)

// 2.创建router
export default new vueRouter({
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/Category',
      component: Category
    },
    {
      path: '/Cart',
      component: Cart
    },
    {
      path: '/Profile',
      component: Profile
    },
    {
      path: '/Detail',
      component: Detail
    }
  ],
  mode: 'history'
})