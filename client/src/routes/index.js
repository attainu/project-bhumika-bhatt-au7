import authenticationRoute from "./authenticationRoute";
import homepageRoute from "./homepageRoute";
import settingsRoute from "./settingsRoute";
import profileRoute from "./profileRoute";
import createPostRoute from "./createPostRoute";
import userProfileRoute from "./userProfileRoute";
import resetPasswordRoute from "./resetPasswordRoute";
import verificationRoute from "./verificationRoute";

export default [
  ...authenticationRoute,
  ...homepageRoute,
  ...settingsRoute,
  ...profileRoute,
  ...createPostRoute,
  ...userProfileRoute,
  ...resetPasswordRoute,
  ...verificationRoute,
];
