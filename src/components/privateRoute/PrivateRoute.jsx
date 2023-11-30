import { useContext } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import Spinner from "../../shared/Spinner";
import { AuthContext } from "../authProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { users, loading, setLoading } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  console.log("Private router data______:", users?.data);

  setLoading(false);
  if (loading) {
    return (
      <div className="grid place-items-center min-h-screen">
        <Spinner />
      </div>
    );
  }

  return !users?.data?.email ? (
    <Navigate
      to="/authenticate-layout/login"
      state={{ from: location }}
      replace
    />
  ) : (
    children
  );

  // return !users?.data?.email ? (
  //   <Navigate
  //     to="/authenticate-layout/login"
  //     state={{ from: location }}
  //     replace
  //   ></Navigate>
  // ) : (
  //   // <Navigate to="/authenticate-layout/login" replace />
  //   children
  // );
  // <Navigate
  //   to="/authenticate-layout/login"
  //   state={{ from: location }}
  //   replace
  // ></Navigate>
};

export default PrivateRoute;
