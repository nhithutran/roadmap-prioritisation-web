import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = () => {
  const { auth, setAuth } = useAuth();
  const location = useLocation();

  //get variables from localstorage
  const currentUser = localStorage.getItem("user");
  let login = false;

  const isLegit = (emailvalue, tokenvalue, approvedValue) => {
    if (approvedValue === true && tokenvalue) {
      return true;
    } else return false;
  };

  if (currentUser) {
    const { email, token, approved } = auth; //JSON.parse(currentUser);
    login = isLegit(email, token, approved);
  }

  return login ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
