import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Doctor from '../views/Doctor.vue'
import Patient from '../views/Patient.vue'
import Signup from '../views/Signup.vue'
import Login from '../views/Login.vue'


const routes = [ 
    {
        path: "/",
        name: 'Home',
        component: Home
    },
    {
        path: "/patient",
        name: 'Patient',
        component: Patient
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
    },
    {
        path: "/doctor",
        name: 'Doctor',
        component: Doctor
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router