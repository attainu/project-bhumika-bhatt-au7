import { WEB_URL } from "../configs";
import { ProfilePage } from "../components";

const profileRoute = [
  {
    path: WEB_URL.PROFILE,
    exact: true,
    isProtected: true,
    component: ProfilePage,
  },
];

export default profileRoute;
