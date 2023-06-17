import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

export const NotAuthRoute = ({ children, redirectPath = "/" }) => {
  // const { user } = useAuth();

  // const { user } = useAuth();

  const user = null;
  return !user ? children : <Navigate to={redirectPath} replace={true} />;
};

NotAuthRoute.propTypes = {
  children: PropTypes.node.isRequired,
  redirectPath: PropTypes.string,
};
