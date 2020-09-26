import { WEB_URL } from "../configs";
import { Settings } from "../containers";

const settingsRoute = [
  {
    path: WEB_URL.SETTINGS,
    exact: true,
    isProtected: true,
    component: Settings,
  },
];

export default settingsRoute;
