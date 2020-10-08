import { WEB_URL } from "../configs";
import { Authentication } from "../containers";

const verificationRoute = [
  {
    path: "/signup/verification",
    // exact: true,
    isProtected: false,
    component: Authentication,
  },
];

export default verificationRoute;
