import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Profile from '../views/Profile.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'

const routes = [
    {
        path: "/",
        name: 'Home',
        component: Home
    },
    {
        path: "/profile",
        name: 'Profile',
        component: Profile
    },
    {
        path: "/login",
        name: 'Login',
        component: Login
    },
    {
        path: "/signup",
        name: 'Signup',
        component: Signup
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router