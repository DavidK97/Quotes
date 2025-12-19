import { Navigate, Outlet } from "react-router";
import facade from "../../apiFacade";

export function AdminRoutes() {
  const loggedIn = facade.loggedIn();
  const hasAccess = facade.hasUserAccess("ADMIN", loggedIn);

  if (!loggedIn && !hasAccess) {
    alert(
      "You are not authorized to view this page. " +
        "You will will be redirected to the homepage"
    );
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}
