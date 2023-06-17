import { Navigate, Route, Routes } from "react-router-dom";

import { Layout } from "./components";
import SignInPage from "./pages/SignInPage";

const TEST_KEY = import.meta.env.DEV
  ? import.meta.env.VITE_TEST_KEY_DEV
  : import.meta.env.VITE_TEST_KEY_PROD;

console.log("TEST_KEY", TEST_KEY);

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<div>HOME PAGE</div>} />
          <Route path={"sign-in"} element={<SignInPage />} />
          <Route path={"user"} element={<div>USER PAGE</div>} />
          <Route path={"admin"} element={<div>ADMIN PAGE</div>} />
          <Route path={"contacts"} element={<div>CONTACTS PAGE</div>} />
          <Route path="*" element={<Navigate to={"/"} />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
