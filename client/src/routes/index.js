import authenticationRoute from "./authenticationRoute";
import homepageRoute from "./homepageRoute";
import settingsRoute from "./settingsRoute";
import profileRoute from "./profileRoute";

export default [
  ...authenticationRoute,
  ...homepageRoute,
  ...settingsRoute,
  ...profileRoute,
];
