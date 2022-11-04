import { useState } from "react";
import axios from "axios"
import {useAuthContext} from "./useAuthContext"

export const useSignUp = () => {
  const [signUpError, setSignUpError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext;

  const signUp = async (firstName, lastName, email, password) => {
    setIsLoading(true);
    setSignUpError(null);

    const axiosInstance = axios.create({baseURL: 'http://localhost:5000'})
    
    axiosInstance
      .post("/api/v1/auth/register", { firstName, lastName, password, email })
      .then(function (response) {
       // const token = response.data.token
        const status = response.status
        if(status === 200){
         
          //save to local storage
          localStorage.setItem('user',response)
          
          //update autocontext
          dispatch({type:"LOGIN",payload: response})
         
          setIsLoading(false);
        }
       
      })
      .catch(function (error) {
        if(status !== 200){
          setSignUpError(error.response)
        }
        
        setIsLoading(false)
      });
  };
  return { signUp, isLoading, signUpError };
};
