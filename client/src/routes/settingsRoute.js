import { WEB_URL } from "../configs";
import { Settings } from "../containers";

const settingsRoutes = [
  {
    path: WEB_URL.SETTINGS,
    exact: true,
    isProtected: true,
    component: Settings,
  },
];

export default settingsRoutes;
