import { WEB_URL } from "../configs";
import { Posts } from "../containers";

const profileRoute = [
  {
    path: WEB_URL.PROFILE,
    exact: true,
    isProtected: true,
    component: Posts,
  },
];

export default profileRoute;
