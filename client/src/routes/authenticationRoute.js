import { WEB_URL } from "../configs";
import { Authentication } from "../containers";

const authenticationRoute = [
  {
    path: WEB_URL.AUTHENTICATION,
    exact: true,
    isProtected: false,
    component: Authentication,
  },
];

export default authenticationRoute;
