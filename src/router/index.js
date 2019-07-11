import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/Home/Home'
import Course from '../components/Course/Course'
import HelloWorld from "@/components/HelloWorld";

Vue.use(VueRouter)

const router = new VueRouter({
    routes:[
        {
            path:'/',
            name:'HelloWorld',
            component: HelloWorld
        },
        {
            path:'/home',
            name:'Home',
            component: Home
        },
        {
            path:'/course',
            name:'Course',
            component: Course
        }
    ]
})

export default router;