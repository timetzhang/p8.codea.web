import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    }
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