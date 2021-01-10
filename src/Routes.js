import Vue from "vue"
import VueRouter from "vue-router"
import Home from "./views/home.vue"
import History from "./views/history.vue"
import AddData from "./views/addData.vue"
import Login from "./components/Login.vue"
import Register from "./components/Register.vue"

Vue.use(VueRouter)


const Router = new VueRouter ({
    routes : [
        {
            path : "/home",
            name : "home",
            component : Home
        },
        {
            path : "/history",
            name : "history",
            component : History
        },
        {
            path : "/add",
            name : "add",
            component : AddData
        },
        {
            path : "/",
            name : "login",
            component : Login
        },
        {
            path : "/register",
            name : "register",
            component : Register
        },
    ]
})

export default Router