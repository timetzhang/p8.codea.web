import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            component: (resolve) => { require(['@/components/home/home.vue'], resolve) }
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
            path: '/course/type=:type',
            component: (resolve) => { require(['@/components/course/course.vue'], resolve) }
        },
        {
            path: '/course/id=:course_id',
            component: (resolve) => { require(['@/components/course/details.vue'], resolve) }
        },
        {
            path: '/team',
            component: (resolve) => { require(['@/components/team/team.vue'], resolve) },
        },
        {
            path: '/team/id=:id',
            component: (resolve) => { require(['@/components/team/details.vue'], resolve) },
        },
        {
            path: '/team/new/doc/id=:id',
            component: (resolve) => { require(['@/components/team/new/doc.vue'], resolve) },
        },
        {
            path: '/team/new/team',
            component: (resolve) => { require(['@/components/team/new/team.vue'], resolve) },
        },
        {
            path: '/doc',
            component: (resolve) => { require(['@/components/doc/doc.vue'], resolve) },
        },
        {
            path: '/doc/search=:search',
            component: (resolve) => { require(['@/components/doc/search.vue'], resolve) },
        },
        {
            path: '/doc/search=',
            redirect: '/doc'
        },
        {
            path: '/doc/id=:id',
            component: (resolve) => { require(['@/components/doc/details.vue'], resolve) },
        },
        {
            path: '/doc/edit/id=:id',
            component: (resolve) => { require(['@/components/doc/edit.vue'], resolve) },
        },
        {
            path: '/doc/new/type=:type',
            component: (resolve) => { require(['@/components/doc/new.vue'], resolve) },
        },
        {
            path: '/sdk',
            component: (resolve) => { require(['@/components/sdk/sdk.vue'], resolve) },
            children: [{
                    path: '/sdk',
                    component: (resolve) => { require(['@/components/sdk/type.vue'], resolve) }
                },
                {
                    path: '/sdk/type_id=:type_id',
                    component: (resolve) => { require(['@/components/sdk/list.vue'], resolve) }
                },
                {
                    path: '/sdk/id=:id',
                    component: (resolve) => { require(['@/components/sdk/details.vue'], resolve) }
                }
            ]
        },
        {
            path: '/my',
            redirect: '/my/course',
        },
        {
            path: '/my',
            component: (resolve) => { require(['@/components/my/my.vue'], resolve) },
            children: [{
                    path: '/my/notify',
                    component: (resolve) => { require(['@/components/my/notify.vue'], resolve) }
                },
                {
                    path: '/my/profile',
                    component: (resolve) => { require(['@/components/my/profile.vue'], resolve) }
                },
                {
                    path: '/my/dev_level',
                    component: (resolve) => { require(['@/components/my/dev_level.vue'], resolve) }
                },
                {
                    path: '/my/op_level',
                    component: (resolve) => { require(['@/components/my/op_level.vue'], resolve) }
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
                    path: '/my/team',
                    component: (resolve) => { require(['@/components/my/team.vue'], resolve) }
                },
                {
                    path: '/my/fav_doc',
                    component: (resolve) => { require(['@/components/my/fav_doc.vue'], resolve) }
                },
                {
                    path: '/my/doc',
                    component: (resolve) => { require(['@/components/my/doc.vue'], resolve) }
                },
                {
                    path: '/my/follow_team',
                    component: (resolve) => { require(['@/components/my/follow_team.vue'], resolve) }
                }
            ]
        },
        {
            path: '/login',
            component: (resolve) => { require(['@/components/login/login.vue'], resolve) }
        },
        {
            path: '/login/forget_password',
            component: (resolve) => { require(['@/components/login/forget_password.vue'], resolve) }
        },
        {
            path: '/logoff',
            component: (resolve) => { require(['@/components/logoff/logoff.vue'], resolve) }
        },
        {
            path: '/register',
            component: (resolve) => { require(['@/components/register/register.vue'], resolve) }
        },
        {
            path: '/student/id=:id',
            component: (resolve) => { require(['@/components/student/profile.vue'], resolve) }
        }
    ]
})