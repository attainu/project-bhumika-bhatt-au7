import authenticationRoute from "./authenticationRoute";
import dashboardRoute from "./dashboardRoute";
import settingsRoutes from "./settingsRoute";

export default [...authenticationRoute, ...dashboardRoute, ...settingsRoutes];
