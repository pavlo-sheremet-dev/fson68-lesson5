import { NavLink } from "react-router-dom";
import { getRoutes } from "../../../routes/routes";
import { useAuth } from "../../../providers/AuthProvider";
import { selectTheme, useStore } from "../../../store/store";

export const Header = () => {
  const { goggleSignOut, user } = useAuth();
  const { setThemeTitle, themeTitle, toggleThemeTitle } = useStore(selectTheme);

  const routes = getRoutes({
    isLoggedIn: Boolean(user),
    userRole: user?.role ?? "default",
  });

  return (
    <header>
      <div>
        <nav>
          <ul style={{ display: "flex", gap: 20, listStyle: "none" }}>
            {routes.map(({ path, relativePath, title }) => (
              <li key={path}>
                <NavLink to={path} end={!relativePath}>
                  {title}
                </NavLink>
              </li>
            ))}
          </ul>
          {!!user && (
            <div>
              <span>Hello, {user.name}</span>
              <button type="button" onClick={goggleSignOut}>
                SIGN OUT
              </button>
            </div>
          )}
          <button type="button" onClick={toggleThemeTitle}>
            {themeTitle}
          </button>
          <button type="button" onClick={() => setThemeTitle("light")}>
            switch to light
          </button>
        </nav>
      </div>
    </header>
  );
};
