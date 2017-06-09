import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: (resolve) => { require(['@/components/home/home.vue'], resolve) }
    },
    {
        path: '/school',
        component: (resolve) => { require(['@/components/school/school.vue'], resolve) },
        children: [{
            path: '/school/',
            redirect: '/school/vision'
        },
        {
            path: '/school/vision',
            component: (resolve) => { require(['@/components/school/vision.vue'], resolve) }
        },
        {
            path: '/school/revolution',
            component: (resolve) => { require(['@/components/school/revolution.vue'], resolve) }
        },
        {
            path: '/school/geek',
            component: (resolve) => { require(['@/components/school/geek.vue'], resolve) }
        },
        {
            path: '/school/study_space',
            component: (resolve) => { require(['@/components/school/study_space.vue'], resolve) }
        },
        {
            path: '/school/dorm_space',
            component: (resolve) => { require(['@/components/school/dorm_space.vue'], resolve) }
        },
        {
            path: '/school/parkathon',
            component: (resolve) => { require(['@/components/school/parkathon.vue'], resolve) }
        },
        {
            path: '/school/course',
            component: (resolve) => { require(['@/components/school/course.vue'], resolve) }
        },
        {
            path: '/school/team',
            component: (resolve) => { require(['@/components/school/team.vue'], resolve) }
        },
        {
            path: '/school/career',
            component: (resolve) => { require(['@/components/school/career.vue'], resolve) }
        },
        {
            path: '/school/project',
            component: (resolve) => { require(['@/components/school/project.vue'], resolve) }
        },
        {
            path: '/school/entrance',
            component: (resolve) => { require(['@/components/school/entrance.vue'], resolve) }
        },
        {
            path: '/school/contact',
            component: (resolve) => { require(['@/components/school/contact.vue'], resolve) }
        }
        ]
    },
    {
        path: '/course',
        redirect: '/course/type=13'
    },
    {
        path: '/course/type=:course_type',
        component: (resolve) => { require(['@/components/course/course.vue'], resolve) }
    },
    {
        path: '/course/id=:course_id',
        component: (resolve) => { require(['@/components/course/details.vue'], resolve) }
    },
    {
        path: '/sdk',
        component: (resolve) => { require(['@/components/sdk/sdk.vue'], resolve) },
        children: [{
            path: '/sdk',
            component: (resolve) => { require(['@/components/sdk/classfiy.vue'], resolve) }
        },
        {
            path: '/sdk/list',
            component: (resolve) => { require(['@/components/sdk/list.vue'], resolve) }
        },
        {
            path: '/sdk/:id/course',
            component: (resolve) => { require(['@/components/sdk/course.vue'], resolve) }
        },
        {
            path: '/sdk/edit',
            component: (resolve) => { require(['@/components/sdk/edit.vue'], resolve) }
        }
        ]
    },
    {
        path: '/my',
        redirect: '/my/profile',
    },
    {
        path: '/my',
        component: (resolve) => { require(['@/components/my/my.vue'], resolve) },
        children: [{
            path: '/my/profile',
            component: (resolve) => { require(['@/components/my/profile.vue'], resolve) }
        },
        {
            path: '/my/level',
            component: (resolve) => { require(['@/components/my/level.vue'], resolve) }
        },
        {
            path: '/my/project',
            component: (resolve) => { require(['@/components/my/project.vue'], resolve) }
        },
        {
            path: '/my/course',
            component: (resolve) => { require(['@/components/my/course.vue'], resolve) }
        },
        {
            path: '/my/fav_course',
            component: (resolve) => { require(['@/components/my/fav_course.vue'], resolve) }
        },
        {
            path: '/my/career',
            component: (resolve) => { require(['@/components/my/career.vue'], resolve) }
        },
        {
            path: '/my/team',
            component: (resolve) => { require(['@/components/my/team.vue'], resolve) }
        }]
    },
    {
        path: '/login',
        component: (resolve) => { require(['@/components/login/login.vue'], resolve) }
    },
    {
        path: '/register',
        component: (resolve) => { require(['@/components/register/register.vue'], resolve) }
    }
    ]
})