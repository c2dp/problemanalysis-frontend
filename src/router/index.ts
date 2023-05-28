import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import UploadView from "../views/UploadView.vue";
import AnalysisView from "../views/AnalysisChartView.vue";
import TableView from "../views/TableView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: UploadView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: TableView,
  },
  {
    path: "/analysis",
    name: "analysis",
    component: AnalysisView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
