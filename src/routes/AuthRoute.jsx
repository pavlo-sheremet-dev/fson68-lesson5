import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { useAuth } from "../providers";

export const AuthRoute = ({
  redirectPath = "/",
  accessForRoles = [],
  children,
}) => {
  const { user } = useAuth();

  const isAccessesAllowed = Boolean(
    user &&
      (!accessForRoles.length ||
        accessForRoles.some((role) => user?.role.includes(role)))
  );

  return isAccessesAllowed ? (
    children
  ) : (
    <Navigate to={redirectPath} replace={true} />
  );
};

AuthRoute.propTypes = {
  children: PropTypes.node.isRequired,
  accessForRoles: PropTypes.arrayOf(PropTypes.string.isRequired),
  redirectPath: PropTypes.string,
};
