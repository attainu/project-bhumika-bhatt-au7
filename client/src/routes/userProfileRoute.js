import { WEB_URL } from "../configs";
import { UserProfile } from "../containers";

const userProfileRoute = [
  {
    path: WEB_URL.USER_PROFILE,
    exact: true,
    isProtected: true,
    component: UserProfile,
  },
];

export default userProfileRoute;
