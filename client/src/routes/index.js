import authenticationRoute from "./authenticationRoute";
import homepageRoute from "./homepageRoute";
import settingsRoute from "./settingsRoute";
import profileRoute from "./profileRoute";
import createPostRoute from "./createPostRoute";
import userProfileRoute from "./userProfileRoute";

export default [
  ...authenticationRoute,
  ...homepageRoute,
  ...settingsRoute,
  ...profileRoute,
  ...createPostRoute,
  ...userProfileRoute,
];
