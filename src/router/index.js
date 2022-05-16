import { createRouter, createWebHistory } from "vue-router";
import StoreView from "../views/Store";
import MyProducts from "../views/MyProducts";

const routes = [
    {
        path: '/store',
        name: 'store',
        component: StoreView
    },
    {
        path: '/myproducts',
        name: 'myproducts',
        component: MyProducts
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router