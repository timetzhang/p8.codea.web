import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'

import School from '@/components/school/school'
import SchoolVision from '@/components/school/vision'
import SchoolMission from '@/components/school/mission'
import SchoolRevolution from '@/components/school/revolution'
import SchoolStudySpace from '@/components/school/study_space'
import SchoolDormSpace from '@/components/school/dorm_space'
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

import SDK from '@/components/sdk/sdk'
import SDKList from '@/components/sdk/list'
import SDKCourse from '@/components/sdk/course'
import SDKClassfiy from '@/components/sdk/classfiy'

import Tools from '@/components/tools/tools'

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
                    redirect: '/school/vision'
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
                    path: '/school/study_space',
                    component: SchoolStudySpace
                },
                {
                    path: '/school/dorm_space',
                    component: SchoolDormSpace
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
            path: '/course/',
            component: Course
        },
        {
            path: '/sdk',
            component: SDK,
            children: [{
                path: '/sdk',
                component: SDKClassfiy
            }, {
                path: '/sdk/list',
                component: SDKList
            }, {
                path: '/sdk/:id/course',
                component: SDKCourse
            }]
        },
        {
            path: '/tools',
            component: Tools,
        },
    ]
})