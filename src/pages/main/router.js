import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'hash',
    routes: [{
        path: '/',
        component: () => import(/* webpackChunkName: "group-user" */'../../components/HelloWorld')
    }, {
        path: '/msg',
        component: () => import(/* webpackChunkName: "msg" */'../../components/HelloWorld')
    }, {
        path: '/data',
        component: () => import(/* webpackChunkName: "data" */'../../components/HelloWorld')
    }]
})
