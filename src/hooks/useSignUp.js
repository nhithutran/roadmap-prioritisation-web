import { useState } from "react";
//import { useAuthContext } from "./userAuthContext";
import axiosAddress from "./axios";

export const useSignUp = () => {
  const [signUpError, setSignUpError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  //const { dispatch } = useAuthContext;

  const signUp = async (firstName, lastName, email, password) => {
    setIsLoading(true);
    setSignUpError(null);
    //const json = null;

    axiosAddress
      .post("/register", { firstName, lastName, password, email })
      .then(function (response) {
        setIsLoading(false);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error.response.data);
      });
  };
  return { signUp, isLoading, signUpError };
};
