import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import Main from "@/views/Main.vue";
import ShoppingList from "@/components/ShoppingList.vue";

const routes = [
    {
        path: "/",
        component: Main,
        children: [
            {
                path: "shopping-list",
                component: ShoppingList,
                props: { pageTitle: "Shopping List" },
            },
        ],
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

const app = createApp({});

app.use(router);

app.mount("#app");
