import { WEB_URL } from "../configs";
import { Login } from "../containers";

const loginRoutes = [
  {
    path: WEB_URL.LOGIN,
    exact: true,
    isProtected: false,
    component: Login,
  },
];

export default loginRoutes;
