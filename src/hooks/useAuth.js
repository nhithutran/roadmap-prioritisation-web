import { useContext } from "react";
import AuthContext from "../context/auth.context";

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
