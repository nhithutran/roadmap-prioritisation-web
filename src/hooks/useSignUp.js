import {useState} from 'react'
import { useAuthContext } from "./userAuthContext"
import axiosAddress from "./axios"

export const useSignUp=()=>{
    const [error,setError]=userState(null)
    const [isLoading,setIsLoading] = userState(null)
    const {dispatch} = useAuthContext;

    const signUp = async(firstName,lastName,email,password) =>{
        setIsLoading(true);
        setError(null)
        const json = null;

        axiosAddress.post('/register',{firstName,lastName,password,email}).then(function(response){ setIsLoading(false)}
        .catch(function(error){
            console.log(error.response.data)
        })
    }
    return {signUp,isLoading,error}
}