import { WEB_URL } from "../configs";
import { HomePage } from "../containers";

const homepageRoute = [
  {
    path: WEB_URL.HOMEPAGE,
    exact: true,
    isProtected: true,
    component: HomePage,
  },
];

export default homepageRoute;
