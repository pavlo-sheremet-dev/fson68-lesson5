import { Navigate, Route, Routes } from "react-router-dom";

import { Layout } from "./components";
import SignInPage from "./pages/SignInPage";
import { AuthProvider } from "./providers";
import { routes } from "./routes/routes";
import { NotAuthRoute } from "./routes/NotAuthRoute";
import { AuthRoute } from "./routes/AuthRoute";

const TEST_KEY = import.meta.env.DEV
  ? import.meta.env.VITE_TEST_KEY_DEV
  : import.meta.env.VITE_TEST_KEY_PROD;

console.log("TEST_KEY", TEST_KEY);

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path={routes.home.path} element={<Layout />}>
          <Route index element={<div>HOME PAGE</div>} />
          <Route
            path={routes.contacts.path}
            element={<div>CONTACTS PAGE</div>}
          />
          <Route
            path={routes.signIn.path}
            element={
              <NotAuthRoute redirectPath={routes.user.path}>
                <SignInPage />
              </NotAuthRoute>
            }
          />
          <Route
            path={routes.user.path}
            element={
              <AuthRoute accessForRoles={["default"]}>
                <div>USER PAGE</div>
              </AuthRoute>
            }
          />
          <Route
            path={routes.admin.path}
            element={
              <AuthRoute
                accessForRoles={["admin"]}
                redirectPath={routes.user.path}
              >
                <div>ADMIN PAGE</div>
              </AuthRoute>
            }
          />

          <Route path="*" element={<Navigate to={"/"} />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
};

export default App;
