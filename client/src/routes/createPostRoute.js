import { WEB_URL } from "../configs";
import { CreatePost } from "../containers";

const createPostRoute = [
  {
    path: WEB_URL.CREATE,
    exact: true,
    isProtected: true,
    component: CreatePost,
  },
];

export default createPostRoute;
