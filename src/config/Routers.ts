import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "../components/HomePage.vue";
import PersonPage from "../components/PersonPage.vue";
import TeamPage from "../components/TeamPage.vue";
import SearchPage from "../components/SearchPage.vue";
import UserEdit from "../components/UserEdit.vue";

const routes = [
    { path: "/", component: HomePage },
    { path: "/person", component: PersonPage },
    { path: "/team", component: TeamPage },
    { path: "/search", component: SearchPage },
    { path: "/user/edit", component: UserEdit },
];

// 2. 创建路由实例
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router; //
