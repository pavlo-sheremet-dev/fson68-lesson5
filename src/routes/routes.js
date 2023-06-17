export const routes = {
  home: {
    title: "Home",
    path: "/",
    relativePath: "",
    roles: [],
    isPrivateRoute: false,
    shouldDisplayAfterAuth: true,
    isHidden: false,
  },

  contacts: {
    title: "Contacts",
    path: "/contacts",
    relativePath: "contacts",
    roles: [],
    isPrivateRoute: false,
    shouldDisplayAfterAuth: true,
    isHidden: false,
  },

  signIn: {
    title: "Sign in",
    path: "/sign-in",
    relativePath: "sign-in",
    roles: [],
    isPrivateRoute: false,
    shouldDisplayAfterAuth: false,
    isHidden: false,
  },

  user: {
    title: "User",
    path: "/user",
    relativePath: "user",
    roles: ["default", "admin"],
    isPrivateRoute: true,
    shouldDisplayAfterAuth: true,
    isHidden: false,
  },

  admin: {
    title: "Admin",
    path: "/admin",
    relativePath: "admin",
    roles: ["admin"],
    isPrivateRoute: true,
    shouldDisplayAfterAuth: true,
    isHidden: true,
  },
};

export const getRoutes = ({ isLoggedIn = false, userRole = "" }) =>
  Object.values(routes).filter(
    ({ shouldDisplayAfterAuth, isPrivateRoute, roles }) => {
      if (!isLoggedIn) {
        return !isPrivateRoute;
      }
      const rolesAccess = roles.some((roles) => roles.includes(userRole));
      return isPrivateRoute !== shouldDisplayAfterAuth || rolesAccess;
    }
  );
