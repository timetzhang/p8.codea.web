import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'

import School from '@/components/school/school'
import SchoolHome from '@/components/school/home'
import Course from '@/components/course/course'
import CourseHome from '@/components/course/home'
import SDK from '@/components/sdk/sdk'
import SDKHome from '@/components/sdk/home'
import SDKList from '@/components/sdk/list'
import Tools from '@/components/tools/tools'
import ToolsHome from '@/components/tools/home'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: Home
        },
        {
            path: '/school',
            component: School,
            children: [{
                    path: '/school/',
                    redirect: '/school/home'
                },
                {
                    path: '/school/home',
                    component: SchoolHome
                }
            ]
        },
        {
            path: '/course',
            component: Course,
            children: [{
                    path: '/course/',
                    redirect: '/course/home'
                },
                {
                    path: '/course/home',
                    component: CourseHome
                }
            ]
        },
        {
            path: '/sdk',
            component: SDK,
            children: [{
                    path: '/sdk/',
                    redirect: '/sdk/home'
                },
                {
                    path: '/sdk/home',
                    component: SDKHome
                },
                {
                    path: '/sdk/',
                    redirect: '/sdk/list'
                },
                {
                    path: '/sdk/list',
                    component: SDKList
                },
            ]
        },
        {
            path: '/tools',
            component: Tools,
            children: [{
                    path: '/tools/',
                    redirect: '/tools/home'
                },
                {
                    path: '/tools/home',
                    component: ToolsHome
                }
            ]
        },
        // {
        //     path: '/profile',
        //     component: Profile,
        //     children: [{
        //         path: '/profile/fav/factory',
        //         component: ProfileFavFactory
        //     },
        //     {
        //         path: '/profile/fav/tour',
        //         component: ProfileFavTour
        //     },
        //     {
        //         path: '/profile/fav/activity',
        //         component: ProfileFavActivity
        //     },
        //     {
        //         path: '/profile/fav/Video',
        //         component: ProfileFavVideo
        //     },
        //     {
        //         path: '/profile/order',
        //         component: ProfileOrder
        //     },
        //     {
        //         path: '/profile/footprint',
        //         component: ProfileFootprint
        //     },
        //     {
        //         path: '/profile/info',
        //         component: ProfileInfo
        //     },
        //     {
        //         path: '/about',
        //         component: About
        //     }
        //     ]
        // }
    ]
})