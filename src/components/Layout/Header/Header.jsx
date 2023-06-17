import { NavLink } from "react-router-dom";
import { routes } from "../../../routes/routes";

export const Header = () => {
  return (
    <header>
      <div>
        <nav>
          <ul style={{ display: "flex", gap: 20, listStyle: "none" }}>
            <li>
              <NavLink to={routes.home.path}>{routes.home.title}</NavLink>
            </li>
            <li>
              <NavLink to={routes.contacts.path}>{routes.home.title}</NavLink>
            </li>
            <li>
              <NavLink to={routes.signIn.path}>{routes.signIn.title}</NavLink>
            </li>
            <li>
              <NavLink to={routes.user.path}>{routes.user.title}</NavLink>
            </li>
            <li>
              <NavLink to={routes.admin.path}>{routes.admin.title}</NavLink>
            </li>
          </ul>
          <div>
            <span>Hello, ...</span>
            <button
              type="button"
              onClick={() => {
                console.log("sign out");
              }}
            >
              SIGN OUT
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};
