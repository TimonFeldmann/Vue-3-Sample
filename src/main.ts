import { createApp } from "vue";
import { createPinia } from "pinia";
import { router } from "@/router";

import {
    GridComponent,
    ColumnsDirective,
    ColumnDirective,
} from "@syncfusion/ej2-vue-grids";

import App from "@/App.vue";

// Can't pass an empty objecct here as it breaks the provide / inject feature for SyncFusion.
const app = createApp(App);

app.use(createPinia());
app.component("ejs-grid", GridComponent);
app.component("e-columns", ColumnsDirective);
app.component("e-column", ColumnDirective);

app.use(router);

app.mount("#app");
