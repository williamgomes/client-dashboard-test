import {createRouter, createWebHistory} from 'vue-router'
import store from "../store";

const routes = [
    {
        path: '/login/:hash?',
        components: {
            default: () => import('@/views/LoginView'),
        },
        name: 'login',
        meta: {
            tabTitle: 'Login',
            guestOnly: true,
        },
    },
    {
        path: '/',
        components: {
            default: () => import('@/views/HomeView'),
            HomeHeaderBackground: () => import('@/components/home/HomeHeaderBackground'),
            LayoutHeader: () => import('@/components/layouts/LayoutHeader'),
            LayoutFooter: () => import('@/components/layouts/LayoutFooter'),
        },
        name: 'home',
        meta: {
            tabTitle: 'Home',
            requiresAuth: true,
        },
    },
    {
        path: '/service-progress/:service_id/:year?',
        name: 'service-progress',
        components: {
            default: () => import('@/views/ServiceProgressView'),
            LayoutHeader: () => import('@/components/layouts/LayoutHeader'),
            LayoutFooter: () => import('@/components/layouts/LayoutFooter'),
        },
        meta: {
            tabTitle: 'Service Progress',
            bannerTitle: 'Service progress',
            bannerInfo: 'Keep following the progress in key steps to delivering your service - localisation.',
            requiresAuth: true,
        }
    },
    {
        path: '/service-progress/:service_id/request/:ticket_id',
        name: 'service-progress.request',
        components: {
            default: () => import('@/views/TicketCommentView'),
            LayoutHeader: () => import('@/components/layouts/LayoutHeader'),
            LayoutFooter: () => import('@/components/layouts/LayoutFooter'),
        },
        meta: {
            tabTitle: 'Service Progress Request',
            bannerTitle: 'Request',
            bannerInfo: 'Request emails from your consultant',
            requiresAuth: true,
        }
    },
    {
        path: '/service-progress/:service_id/to-do/:notification_log_id',
        name: 'service-progress.to-do',
        components: {
            default: () => import('@/views/EmailNotificationView'),
            LayoutHeader: () => import('@/components/layouts/LayoutHeader'),
            LayoutFooter: () => import('@/components/layouts/LayoutFooter'),
        },
        meta: {
            tabTitle: 'Service Progress To-do',
            bannerTitle: 'To-do',
            bannerInfo: 'Documentation required for your services',
            requiresAuth: true,
        }
    },
    {
        path: '/my-service/:service',
        name: 'my-service',
        components: {
            default: () => import('@/views/MyServiceView'),
            LayoutHeader: () => import('@/components/layouts/LayoutHeader'),
            LayoutFooter: () => import('@/components/layouts/LayoutFooter'),
        },
        meta: {
            tabTitle: 'My Service',
            bannerTitle: 'My service',
            bannerInfo: 'Manage your service setting',
            requiresAuth: true,
        },
    },
    {
        path: '/my-service/help-desk/:client_help_setting_id',
        name: 'my-service.help-desk',
        components: {
            default: () => import('@/views/ClientHelpSetting'),
            LayoutHeader: () => import('@/components/layouts/LayoutHeader'),
            LayoutFooter: () => import('@/components/layouts/LayoutFooter'),
        },
        meta: {
            tabTitle: 'My Service',
            bannerTitle: 'My service',
            bannerInfo: 'Manage your service setting',
            requiresAuth: true,
        },
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    document.title = 'Client Dashboard' + (to.meta.tabTitle ? ': ' + to.meta.tabTitle : '');

    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters.isAuthenticated) {
            return next()
        }
        next({name: 'login', params: {hash: localStorage.getItem('client-hash')}});
    } else {
        if (to.matched.some(record => record.meta.guestOnly)) {
            if (store.getters.isAuthenticated) {
                return next('/')
            } else {
                next()
            }
        }
    }
});

export default router
