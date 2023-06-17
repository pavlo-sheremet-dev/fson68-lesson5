import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { useAuth } from "../providers";

export const NotAuthRoute = ({ children, redirectPath = "/" }) => {
  const { user } = useAuth();

  return !user ? children : <Navigate to={redirectPath} replace={true} />;
};

NotAuthRoute.propTypes = {
  children: PropTypes.node.isRequired,
  redirectPath: PropTypes.string,
};
