import Vue from 'vue'
import Router from 'vue-router'
const Home = (resolve) => { require(['@/components/home/home.vue'], resolve) };

const School = (resolve) => { require(['@/components/school/school.vue'], resolve) };
const SchoolVision = (resolve) => { require(['@/components/school/vision.vue'], resolve) };
const SchoolMission = (resolve) => { require(['@/components/school/mission.vue'], resolve) };
const SchoolRevolution = (resolve) => { require(['@/components/school/revolution.vue'], resolve) };
const SchoolGeek = (resolve) => { require(['@/components/school/geek.vue'], resolve) };
const SchoolStudySpace = (resolve) => { require(['@/components/school/study_space.vue'], resolve) };
const SchoolDormSpace = (resolve) => { require(['@/components/school/dorm_space.vue'], resolve) };
const SchoolParkathon = (resolve) => { require(['@/components/school/parkathon.vue'], resolve) };
const SchoolCourse = (resolve) => { require(['@/components/school/course.vue'], resolve) };
const SchoolTeam = (resolve) => { require(['@/components/school/team.vue'], resolve) };
const SchoolCareer = (resolve) => { require(['@/components/school/career.vue'], resolve) };
const SchoolProjectLecture = (resolve) => { require(['@/components/school/project_lecture.vue'], resolve) };
const SchoolProjectBus = (resolve) => { require(['@/components/school/project_bus.vue'], resolve) };
const SchoolEntrance = (resolve) => { require(['@/components/school/entrance.vue'], resolve) };
const SchoolRegister = (resolve) => { require(['@/components/school/register.vue'], resolve) };
const SchoolContact = (resolve) => { require(['@/components/school/contact.vue'], resolve) };

const Course = (resolve) => { require(['@/components/course/course.vue'], resolve) };
const CourseDetails = (resolve) => { require(['@/components/course/details.vue'], resolve) };
const CourseEditor = (resolve) => { require(['@/components/course/editor.vue'], resolve) };

const SDK = (resolve) => { require(['@/components/sdk/sdk.vue'], resolve) };
const SDKList = (resolve) => { require(['@/components/sdk/list.vue'], resolve) };
const SDKCourse = (resolve) => { require(['@/components/sdk/course.vue'], resolve) };
const SDKClassfiy = (resolve) => { require(['@/components/sdk/classfiy.vue'], resolve) };

const Login = (resolve) => { require(['@/components/login/login.vue'], resolve) };

const My = (resolve) => { require(['@/components/my/my.vue'], resolve) };
const MyCareer = (resolve) => { require(['@/components/my/career.vue'], resolve) };
const MyCourse = (resolve) => { require(['@/components/my/course.vue'], resolve) };
const MyDorm = (resolve) => { require(['@/components/my/dorm.vue'], resolve) };
const MyLevel = (resolve) => { require(['@/components/my/level.vue'], resolve) };
const MyProfile = (resolve) => { require(['@/components/my/profile.vue'], resolve) };
const MyProject = (resolve) => { require(['@/components/my/project.vue'], resolve) };
const MyTeam = (resolve) => { require(['@/components/my/team.vue'], resolve) };
const MyFavCourse = (resolve) => { require(['@/components/my/fav_course.vue'], resolve) };


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
            path: '/school/geek',
            component: SchoolGeek
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
        path: '/course/:course_id/lecture/:lecture_id',
        component: CourseDetails
    },
    {
        path: '/course/editor/',
        component: CourseEditor
    },
    {
        path: '/sdk',
        component: SDK,
        children: [{
            path: '/sdk',
            component: SDKClassfiy
        },
        {
            path: '/sdk/list',
            component: SDKList
        },
        {
            path: '/sdk/:id/course',
            component: SDKCourse
        }]
    }, {
        path: '/my',
        redirect: '/my/profile',
    },
    {
        path: '/my',
        component: My,
        children: [{
            path: '/my/profile',
            component: MyProfile
        },
        {
            path: '/my/level',
            component: MyLevel
        },
        {
            path: '/my/dorm',
            component: MyDorm
        },
        {
            path: '/my/project',
            component: MyProject
        },
        {
            path: '/my/course',
            component: MyCourse
        },
        {
            path: '/my/fav_course',
            component: MyFavCourse
        },
        {
            path: '/my/career',
            component: MyCareer
        },
        {
            path: '/my/team',
            component: MyTeam
        }]
    },
    {
        path: '/login',
        component: Login
    }
    ]
})