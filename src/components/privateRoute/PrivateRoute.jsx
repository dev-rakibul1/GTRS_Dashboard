import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../authProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { users, loading } = useContext(AuthContext);
  console.log(users);
  const location = useLocation();
  const navigate = useNavigate();

  console.log(users);

  if (users?.email) {
    return { children };
  }

  return navigate("/");
};

export default PrivateRoute;
