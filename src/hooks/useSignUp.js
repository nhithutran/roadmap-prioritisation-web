import { useState } from "react";
import axios from "axios"
//import { useAuthContext } from "./userAuthContext";
//import {axiosInstance} from "./axios";

export const useSignUp = () => {
  const [signUpError, setSignUpError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  //const { dispatch } = useAuthContext;

  const signUp = async (firstName, lastName, email, password) => {
    setIsLoading(true);
    setSignUpError(null);
    //const json = null;

    const axiosInstance = axios.create({baseURL: 'http://localhost:5000'})
    
    axiosInstance
      .post("/api/v1/auth/register", { firstName, lastName, password, email })
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
