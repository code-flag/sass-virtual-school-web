import { useAuthStore } from '@/store';
import axios from 'axios';
import  { useState } from 'react'
import { toast } from 'react-toastify';


const useAuth = () => {
   
    const BASE_URL = process.env.NEXT_PUBLIC_AUTH_URL;

    const [isLoading, setIsLoading] = useState(false);
 

    const {  success, setSuccess, successModal, setSuccessModal } = useAuthStore();

    

    //Sign-up
    const SignUp = async (payload:any) => {
        setIsLoading(true);
        try {
          const response = await axios.post(
            `${BASE_URL}/school/create`,
             payload
            ,
            {
                headers: {
                    "Content-Type": "application/json",
                  },
            } 
          
          );
          // setIsLoading(false)
          if(response?.data?.status === "success"){
            setIsLoading(true)

            // setToken(response?.data?.data?.jwt)
            // setUserId(response?.data?.data?.id)
            // setCookie("token", JSON.stringify(response?.data?.data?.jwt));
            
            toast.success(response?.data?.message, {
              position: "top-right",
              autoClose: 9000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
            
            // router?.push("/dashboard")
          }
          setIsLoading(false)
          console.log("res", response)
      }

      catch (error:any) {
        if(error?.response?.data?.status === "error"){
          toast.error(error?.response?.data?.error?.message, {
            position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
          console.log("err", error)
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
      SignUp,
    };
}

export default useAuth