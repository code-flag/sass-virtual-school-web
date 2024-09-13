import { useAuthStore } from '@/store';
import axios from 'axios';
import  { useState } from 'react'
import { toast } from 'react-toastify';
import { setCookie } from "cookies-next";
import { usePathname, useRouter, useSearchParams } from 'next/navigation';


type LoginProps = {
    email?: string;
    password?: string;
    phone?: string;
  };

const useAuth = () => {
   
    const BASE_URL = process.env.NEXT_PUBLIC_AUTH_URL;

    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter()
    const params = useSearchParams()
    const url = usePathname()

    const { setToken, setUserId, success, setSuccess, successModal, setSuccessModal } = useAuthStore();

    const email = params?.get("email")
    

    //Sign-up
    const SignUp = async (payload:LoginProps) => {
        setIsLoading(true);
        try {
          const response = await axios.post(
            `${BASE_URL}/super-admin/auth/login`,
             payload
            ,
            {
                headers: {
                    "Content-Type": "application/json",
                  },
            } 
          
          );
          // setIsLoading(false)
          if(response?.data?.statusCode === 200){
            setIsLoading(true)

            setToken(response?.data?.data?.jwt)
            setUserId(response?.data?.data?.id)
            setCookie("token", JSON.stringify(response?.data?.data?.jwt));
            // localStorage.setItem("userId", response?.data?.data?.id );
            // localStorage.setItem("token", response?.data?.data?.jwt );
            
            toast.success("Login was successfull!!", {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
            
            router?.push("/dashboard")
          }
          setIsLoading(false)
          // console.log("res", response)
      }

      catch (error:any) {
        if(error?.response?.status === 401){
          toast.error(error?.response?.data?.message, {
            position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
        } else {
          toast.error("Sorry Network or Server Error has Occured, Please Try Again Later", {
            position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
        }
        // console.log("err", error)
        setIsLoading(false);
        
        
      } finally {
        setIsLoading(false);
      } 
    }




    //Login
    const login = async (payload:LoginProps) => {
        setIsLoading(true);
        try {
          const response = await axios.post(
            `${BASE_URL}/super-admin/auth/login`,
             payload
            ,
            {
                headers: {
                    "Content-Type": "application/json",
                  },
            } 
          
          );
          // setIsLoading(false)
          if(response?.data?.statusCode === 200){
            setIsLoading(true)

            setToken(response?.data?.data?.jwt)
            setUserId(response?.data?.data?.id)
            setCookie("token", JSON.stringify(response?.data?.data?.jwt));
            // localStorage.setItem("userId", response?.data?.data?.id );
            // localStorage.setItem("token", response?.data?.data?.jwt );
            
            toast.success("Login was successfull!!", {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
            
            router?.push("/dashboard")
          }
          setIsLoading(false)
          // console.log("res", response)
      }

      catch (error:any) {
        if(error?.response?.status === 401){
          toast.error(error?.response?.data?.message, {
            position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
        } else {
          toast.error("Sorry Network or Server Error has Occured, Please Try Again Later", {
            position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
        }
        // console.log("err", error)
        setIsLoading(false);
        
        
      } finally {
        setIsLoading(false);
      } 
    }


    //ForgotPassword
    const forgotPassword = async (payload:LoginProps) => {
        setIsLoading(true);
        try {
          const response = await axios.post(
            `${BASE_URL}/super-admin/password/request-reset`,
             payload
            ,
            {
                headers: {
                    "Content-Type": "application/json",
                  },
            } 
          
          );
          setIsLoading(false)
          if(response?.data?.statusCode === 200){

            localStorage.setItem("resetEmail", response?.data?.data?.email );

            toast.success("Request for reset password was successfull!!", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });

            setTimeout(() => {
              router?.push(`/verify-otp?email=${response?.data?.data?.email}&otp=${response?.data?.data?.resetCode}`)
            }, 500);

          }
          console.log("res", response)
      }

      catch (error:any) {
        if(error?.response?.data?.statusCode === 400){
          toast.error("Sorry there is no matching email on our database", {
            position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
        } else {
          toast.error("Sorry Network or Server Error has Occured, Please Try Again Later", {
            position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
        }
        console.log("err", error)
        setIsLoading(false);
        
        
      } finally {
        setIsLoading(false);
      } 
    }



    //Verify OTP
    const verifyOtp = async (payload:LoginProps) => {
        setIsLoading(true);
        try {
          const response = await axios.post(
            `${BASE_URL}/super-admin/password/verify-code`,
             payload
            ,
            {
                headers: {
                    "Content-Type": "application/json",
                  },
            } 
          
          );
          setIsLoading(false)
          if(response?.data?.statusCode === 200){

            // localStorage.setItem("resetEmail", response?.data?.data?.email );

            toast.success("OTP Verified successfull!!", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
            
            router?.push(`${url}?email=${email}&token=${response?.data?.data?.sessionToken}`)
            setSuccess(true)
          }
          console.log("res", response)
      }

      catch (error:any) {
        if(error?.response?.data?.statusCode === 400){
          toast.error(error?.response?.data?.message, {
            position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
        } else {
          toast.error("Sorry Network or Server Error has Occured, Please Try Again Later", {
            position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
        }
        console.log("err", error)
        setIsLoading(false);
        
        
      } finally {
        setIsLoading(false);
      } 
    }



    //Reset Password
    const resetPassword = async (payload:LoginProps) => {
        setIsLoading(true);
        try {
          const response = await axios.post(
            `${BASE_URL}/super-admin/password/reset`,
             payload
            ,
            {
                headers: {
                    "Content-Type": "application/json",
                  },
            } 
          
          );
          setIsLoading(false)
          if(response?.data?.statusCode === 200){

            // localStorage.setItem("resetEmail", response?.data?.data?.email );

            toast.success("Password Reset successfull!!", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
            setSuccessModal(true)
            router?.push(`${url}?email=${email}`)
            setSuccess(false)

          }
          console.log("res", response)
      }

      catch (error:any) {
        if(error?.response?.data?.statusCode === 400){
          toast.error("Could not reset password", {
            position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
        } else {
          toast.error("Sorry Network or Server Error has Occured, Please Try Again Later", {
            position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
        }
        console.log("err", error)
        setIsLoading(false);
        
        
      } finally {
        setIsLoading(false);
      } 
    }



    return {
      isLoading ,
      success,
      setSuccess,
      successModal,
      setSuccessModal,
      login, 
      SignUp,
      forgotPassword, 
      verifyOtp,
      resetPassword
    };
}

export default useAuth