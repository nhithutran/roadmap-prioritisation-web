import { useLocation, Navigate, Outlet } from "react-router-dom";
import AuthContext from "../context/auth.context";
import { useContext } from "react";

const RequireAuth = () => {
  let login = false;

  const { auth, setAuth } = useContext(AuthContext);
  if (auth?.email && auth?.token && auth?.approved === true) {
    login = true;
  }

  return login ? <Outlet /> : <Navigate to="/login" />;
};

export default RequireAuth;
