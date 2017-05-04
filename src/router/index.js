import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'

import School from '@/components/school/school'
import SchoolHome from '@/components/school/home'
import SchoolVision from '@/components/school/vision'
import SchoolMission from '@/components/school/mission'
import SchoolRevolution from '@/components/school/revolution'
import SchoolStudy from '@/components/school/study'
import SchoolDorm from '@/components/school/dorm'
import SchoolParkathon from '@/components/school/parkathon'
import SchoolCourse from '@/components/school/course'
import SchoolTeam from '@/components/school/team'
import SchoolCareer from '@/components/school/career'
import SchoolProjectLecture from '@/components/school/project_lecture'
import SchoolProjectBus from '@/components/school/project_bus'
import SchoolEntrance from '@/components/school/entrance'
import SchoolRegister from '@/components/school/register'
import SchoolContact from '@/components/school/contact'

import Course from '@/components/course/course'
import CourseHome from '@/components/course/home'
import CourseList from '@/components/course/list'

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
        children: [
            {
                path: '/school/',
                redirect: '/school/home'
            },
            {
                path: '/school/home',
                component: SchoolHome
            },
            {
                path: '/school/vision',
                component: SchoolVision
            },
            {
                path: '/school/mission',
                component: SchoolMission
            },
            {
                path: '/school/revolution',
                component: SchoolRevolution
            },
            {
                path: '/school/study',
                component: SchoolStudy
            },
            {
                path: '/school/dorm',
                component: SchoolDorm
            },
            {
                path: '/school/parkathon',
                component: SchoolParkathon
            },
            {
                path: '/school/course',
                component: SchoolCourse
            },
            {
                path: '/school/team',
                component: SchoolTeam
            },
            {
                path: '/school/career',
                component: SchoolCareer
            },
            {
                path: '/school/project_lecture',
                component: SchoolProjectLecture
            },
            {
                path: '/school/project_bus',
                component: SchoolProjectBus
            },
            {
                path: '/school/entrance',
                component: SchoolEntrance
            },
            {
                path: '/school/register',
                component: SchoolRegister
            },
            {
                path: '/school/contact',
                component: SchoolContact
            }
        ]
    },
    {
        path: '/course',
        component: Course,
        children: [
            {
                path: '/course/',
                redirect: '/course/home'
            },
            {
                path: '/course/home',
                component: CourseHome
            },
            {
                path: '/course/:id',
                component: CourseList
            }
        ]
    },
    {
        path: '/sdk',
        component: SDK,
        children: [
            {
                path: '/sdk/',
                redirect: '/sdk/home'
            },
            {
                path: '/sdk/home',
                component: SDKHome
            },
            {
                path: '/sdk/list',
                component: SDKList
            }
        ]
    },
    {
        path: '/tools',
        component: Tools,
        children: [
            {
                path: '/tools/',
                redirect: '/tools/home'
            },
            {
                path: '/tools/home',
                component: ToolsHome
            }]
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