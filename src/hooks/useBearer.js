import { useContext } from "react";
import AuthContext from "../context/auth.context";
const useBearer = () => {
  const currentUser = localStorage.getItem("user");
  const { auth, setAuth } = useContext(AuthContext);

  if (auth.token && auth.approved) {
    return `Bearer ${auth.token}`;
  }
};

export default useBearer;
