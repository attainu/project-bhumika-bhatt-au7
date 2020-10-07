import { WEB_URL } from "../configs";
import { ResetPassword } from "../containers";

const resetPasswordRoute = [
  {
    path: WEB_URL.RESET_PASSWORD,
    exact: true,
    isProtected: false,
    component: ResetPassword,
  },
];

export default resetPasswordRoute;
