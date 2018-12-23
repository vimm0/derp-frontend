import Vue from 'vue'
import Router from 'vue-router'

import Home from './components/Home.vue'
import ItemList from './components/Items/Items/ItemList.vue'
import ItemDetail from './components/Items/Items/ItemDetail.vue'
import ItemEdit from './components/Items/Items/ItemEdit.vue'

Vue.use(Router)

const router = new Router({
    // mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/item/list',
            name: 'Item List',
            component: ItemList,
        },
        {
            path: '/item/detail',
            name: 'Item Detail',
            component: ItemDetail,
        },
        {
            path: '/item/edit',
            name: 'Item Edit',
            component: ItemEdit,
        }
    ]
})
export default router
