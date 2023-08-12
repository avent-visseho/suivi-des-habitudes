import { createRouter, createWebHistory } from 'vue-router'
import SignUpView from '@/views/SignUpView.vue'
import SignInView from '@/views/SignInView.vue'
import MainDashbordVue from '@/components/MainDashbord.vue'
import UserLayout from '@/views/layout/UserLayoutView.vue'
/* import HabitudesView from '@/layout/HabitudesView.vue' */
import HabitudesView from '@/views/HabitudesView.vue'
import HomeView from '@/views/HomeView.vue'
import Cartographie from '@/views/CartographieView.vue'
import AddhabitForm from '@/components/AddhabitForm.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/Sign-up',
      name: 'Sign-up',
      component: SignUpView
    },
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Sign-in',
      name: 'sign-in',
      component: SignInView
    },
    {
      path: '/user-layout',
      name: 'user-layout',
      component: UserLayout,
      children: [
        {
          path: '/dahbord',
          name: 'dahbord',
          component: MainDashbordVue
        },
        {
          path: '',
          name: 'habitudes',
          component: HabitudesView
        },
        {
          path: '/form',
          name: 'form',
          component: AddhabitForm
        },
        {
          path: '/cartographie',
          name: 'cartographie',
          component: Cartographie
        }
      ]
    }
  ]
})

export default router
