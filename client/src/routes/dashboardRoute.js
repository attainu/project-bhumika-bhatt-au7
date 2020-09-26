import { WEB_URL } from "../configs";
import { Dashboard } from "../containers";

const dashboardRoutes = [
  {
    path: WEB_URL.HOMEPAGE,
    exact: true,
    isProtected: true,
    component: Dashboard,
  },
];

export default dashboardRoutes;
