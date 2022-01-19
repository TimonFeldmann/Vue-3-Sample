import App from "@/App.vue";
import Navigation from "@/views/Navigation.vue";
import ShoppingList from "@/views/ShoppingList.vue";
import ShoppingListReports from "@/views/ShoppingListReports.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "Sample App",
        components: {
            default: App,
            navigation: Navigation,
        },
        children: [
            {
                name: "Shopping List",
                path: "shopping-list",
                component: ShoppingList,
                props: { pageTitle: "Shopping List" },
            },
            {
                name: "Shopping List Report",
                path: "shopping-list/report",
                component: ShoppingListReports,
            },
        ],
    },
];

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
