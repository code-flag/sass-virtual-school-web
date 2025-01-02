"use client"

import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import useAuth from "@/services/auth-services";
import FormInput from "./FormInput";
import useCountriesAndStates, { useStaffCountriesAndStates } from "@/components/hooks/useCountriesAndStates";







const plantypeData = [
  { value: 'basic', label: 'Basic Plan' },
  { value: 'standard', label: 'Standard Plan' },
  { value: 'premium', label: 'Premium Plan' },
];


const schoolSizeData = [
  { value: '0-100', label: '0-100' },
  { value: '100-200', label: '100-200' },
  { value: '200-300', label: '200-300' },
  { value: '300-400', label: '300-400' },
  { value: '400-500', label: '400-500' },
];

const genderData = [
  { value: 'male', label: 'male' },
  { value: 'female', label: 'female' },
];



//Registration schema validation
const signUpSchema = yup.object({
  //school-info
  schoolName: yup.string().required("Please Enter your School Name"),
  schoolEmail: yup.string().required("Please Enter your School Email"),
  schoolCountry: yup.string().required("Please Enter your School Country"),
  schoolState: yup.string().required("Please Enter your School State"),
  
  //creator-info/staff-info
  staffPhone: yup.string().required("Please Enter your Phone Number"),
  staffEmail: yup.string().required().email("Please Enter your valid email"),
  staffFirstName: yup.string().required().email("Please Enter your first name"),
  staffCountry: yup.string().required("Please Enter your  Country"),
  staffState: yup.string().required("Please Enter your  State"),
  
  
});

const SignupPage = () => {
  const [step, setStep] = useState(1)
  const [schoolName, setSchoolName] = useState("")
  const [schoolEmail, setSchoolEmail] = useState("")

  const [staffName, setStaffName] = useState("")
  const [staffEmail, setStaffEmail] = useState("")
  const [staffFirstName, setStaffFirstName] = useState("")

  const [domainExample, setDomainExample] = useState("myschoolsubdomain")

  const [selectedSchoolCountry, setSelectedSchoolCountry] = useState(null);
  const [selectedSchoolState, setSelectedSchoolState] = useState(null);
  const [selectedStaffCountry, setSelectedStaffCountry] = useState(null);
  const [selectedStaffState, setSelectedStaffState] = useState(null);

  
  const {isLoading, SignUp} = useAuth()
  const { countries, states, setSelectedCountryCode } = useCountriesAndStates();
  const {countries:staffCountries, states:staffStates, setSelectedCountryCode:setStaffSelectedCountryCode} = useStaffCountriesAndStates()

   //For-school
    const handleSchoolCountryChange = (countryCode:any) => {
      setSelectedSchoolCountry(countryCode);
      setSelectedCountryCode(countryCode);
    };
  
    const handlelSchoolStateChange = (stateName:any) => {
      setSelectedSchoolState(stateName);
    };

    //For-Staff/creator
    const handleStaffCountryChange = (countryCode:any) => {
      setSelectedStaffCountry(countryCode);
      setStaffSelectedCountryCode(countryCode);
    };
    
    const handlelStaffStateChange = (stateName:any) => {
      setSelectedStaffState(stateName);
    };
    
    const selectedSchoolCountryData = countries?.find((item) => item?.isoCode === selectedSchoolCountry);
    const selectedStaffCountryData = staffCountries?.find((item) => item?.isoCode === selectedStaffCountry);

  
 
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  
  } = useForm({
    resolver: yupResolver(signUpSchema),
    mode: "onChange",
  });

  const handleNext = () =>{
    setStep(step + 1)
  }
  const handlePrev = () =>{
    setStep(step - 1)
  }



  const handleSignup = async (data: any) => {
    const requestData = {
      name: data.schoolName,
      email: data.schoolEmail,

      creator: {
        mobile: data.staffPhone,
        email: data.staffEmail,
        firstName: data.staffFirstName,
      },
    };
     console.log("reQQQQQQ",requestData);
     SignUp(requestData)
  };

  return (
    <>
      <section className="relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]">
        <ToastContainer />
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="shadow-three mx-auto w-[90%] md:w-[70%] max-w-[1200px] rounded bg-white px-6 py-10 dark:bg-dark sm:p-[60px]">
                <h3 className="mb-3 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">
                  {step === 1 ? "Enter School Information" : "Creator Information"}
                </h3>
                <p className="mb-11 text-center text-base font-medium text-body-color">
                 Create Account, It&apos;s totally free and super easy
                </p>

                <form
                  onSubmit={handleSubmit(handleSignup)}
                >
                <div  className="grid grid-cols-1 gap-8 md:grid-cols-2">
                 {/* SCHOOL_INFO_STEP */}
                 {
                  step === 1 && 
                  <div className=" mb-5">
                    <FormInput label={"School Name"} name={"schoolName"} type={"text"} placeHolder={"Enter school name"} func={setSchoolName} register={register} error={errors?.schoolName} />

                      {/* Country Dropdown */}
                    <div className='flex flex-col gap-1 w-full p-2'>
                      <label htmlFor="schoolCountry" className='text-black dark:text-white'>School Country</label>
                      <select
                        {...register("schoolCountry")}
                      className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                        onChange={(e) => handleSchoolCountryChange(e.target.value)}
                      >
                        <option value="">Select Country</option>
                        {countries?.map((country, idx) => (
                          <option key={idx} value={country.isoCode} className=' text-black'>
                            {country.value}
                          </option>
                        ))}
                      </select>
                    </div>
                    {errors.schoolCountry && <p className="text-red-500 text-xs mt-1">{errors.schoolCountry.message}</p>}

                    {/* State Dropdown */}
                    <div className='flex flex-col gap-1 w-full p-2'>
                      <label htmlFor="schoolState" className='text-black dark:text-white'>State</label>
                      <select
                        {...register("schoolState")}
                      className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                        onChange={(e) => handlelSchoolStateChange(e.target.value)}
                      >
                        <option value="">Select State</option>
                        {states?.map((state, idx) => (
                          <option key={idx} value={state.value}>
                            {state.value}
                          </option>
                        ))}
                      </select>
                    </div>
                    {errors.schoolState && <p className="text-red-500 text-xs mt-1">{errors.schoolState.message}</p>}
                  </div>
                 }
                 
                 {/* CREATOR/Staff_INFO_STEP */}
                 {
                  step === 2 && 
                  <div className=" mb-5">
                     <FormInput label={"Staff First Name"} name={"staffFirstName"} type={"text"} placeHolder={"Enter your first name"} func={setStaffFirstName} register={register} error={errors?.staffFirstName} />


                       {/* Country Dropdown */}
                    <div className='flex flex-col gap-1 w-full p-2'>
                      <label htmlFor="staffCountry" className='text-black dark:text-white'>Staff Country</label>
                      <select
                        {...register("staffCountry")}
                      className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                        onChange={(e) => handleStaffCountryChange(e.target.value)}
                      >
                        <option value="">Select Country</option>
                        {staffCountries?.map((country, idx) => (
                          <option key={idx} value={country.isoCode} className=' text-black'>
                            {country.value}
                          </option>
                        ))}
                      </select>
                    </div>
                    {errors.staffCountry && <p className="text-red-500 text-xs mt-1">{errors.staffCountry.message}</p>}

                    {/* State Dropdown */}
                    <div className='flex flex-col gap-1 w-full p-2'>
                      <label htmlFor="staffState" className='text-black dark:text-white'>State</label>
                      <select
                        {...register("staffState")}
                      className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                        onChange={(e) => handlelStaffStateChange(e.target.value)}
                      >
                        <option value="">Select State</option>
                        {staffStates?.map((state, idx) => (
                          <option key={idx} value={state.value}>
                            {state.value}
                          </option>
                        ))}
                      </select>
                    </div>
                    {errors.staffState && <p className="text-red-500 text-xs mt-1">{errors.staffState.message}</p>}
                  </div>
                 }
                </div>


                  <div className=" flex flex-row items-center justify-between w-full">
                    {
                      step === 2 &&
                      <div className="mb-6">
                        <button
                          type="button"
                          className="w-full rounded-lg bg-red-500 px-5 py-3 text-white"
                          onClick={handlePrev}
                          >
                        Prev
                        </button>
                      </div>
                    }

                    {
                      step === 1 &&
                      <div className="mb-6 ">
                        <button
                          type="button"
                          className="w-full rounded-lg bg-primary px-5 py-3 text-white"
                          onClick={handleNext}
                          >
                          Next
                        </button>
                      </div>
                    }
                  </div>
                    {/* Submit Button */}
                    {
                      step === 2 && 
                      <div className="mb-6">
                        <button
                          disabled={isLoading}
                          type="submit"
                          className="w-full rounded-lg bg-primary px-5 py-3 text-white"
                        >
                          {isLoading ? "Registering" : "Register"}
                        </button>
                      </div>
                    }
                  
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignupPage;







 






























// "use client"

// import Link from "next/link";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import { useRouter } from "next/navigation";
// import CustomInput from "@/components/reusables/CustomInput";
// import { useForm } from "react-hook-form";
// import { useEffect, useState } from "react";
// import useAuth from "@/services/auth-services";
// import CustomSelect from "@/components/reusables/CustomSelect";

// import { Country, State, City }  from 'country-state-city';


// const stateOptionsData = [
//   { value: 'abia', label: 'Abia' },
//   { value: 'adamawa', label: 'Adamawa' },
//   { value: 'akwaIbom', label: 'Akwa Ibom' },
//   { value: 'anambra', label: 'Anambra' },
//   { value: 'bauchi', label: 'Bauchi' },
//   { value: 'bayelsa', label: 'Bayelsa' },
//   { value: 'benue', label: 'Benue' },
//   { value: 'borno', label: 'Borno' },
//   { value: 'crossRiver', label: 'Cross River' },
//   { value: 'delta', label: 'Delta' },
//   { value: 'ebonyi', label: 'Ebonyi' },
//   { value: 'edo', label: 'Edo' },
//   { value: 'ekiti', label: 'Ekiti' },
//   { value: 'enugu', label: 'Enugu' },
//   { value: 'gombe', label: 'Gombe' },
//   { value: 'imo', label: 'Imo' },
//   { value: 'jigawa', label: 'Jigawa' },
//   { value: 'kaduna', label: 'Kaduna' },
//   { value: 'kano', label: 'Kano' },
//   { value: 'katsina', label: 'Katsina' },
//   { value: 'kebbi', label: 'Kebbi' },
//   { value: 'kogi', label: 'Kogi' },
//   { value: 'kwara', label: 'Kwara' },
//   { value: 'lagos', label: 'Lagos' },
//   { value: 'nasarawa', label: 'Nasarawa' },
//   { value: 'niger', label: 'Niger' },
//   { value: 'ogun', label: 'Ogun' },
//   { value: 'ondo', label: 'Ondo' },
//   { value: 'osun', label: 'Osun' },
//   { value: 'oyo', label: 'Oyo' },
//   { value: 'plateau', label: 'Plateau' },
//   { value: 'rivers', label: 'Rivers' },
//   { value: 'sokoto', label: 'Sokoto' },
//   { value: 'taraba', label: 'Taraba' },
//   { value: 'yobe', label: 'Yobe' },
//   { value: 'zamfara', label: 'Zamfara' },
//   { value: 'fct', label: 'Federal Capital Territory (FCT)' }
// ];

// const plantypeData = [
//   { value: 'basic', label: 'Basic Plan' },
//   { value: 'standard', label: 'Standard Plan' },
//   { value: 'premium', label: 'Premium Plan' },
// ];


// const schoolSizeData = [
//   { value: '0-100', label: '0-100' },
//   { value: '100-200', label: '100-200' },
//   { value: '200-300', label: '200-300' },
//   { value: '300-400', label: '300-400' },
//   { value: '400-500', label: '400-500' },
// ];

// const genderData = [
//   { value: 'male', label: 'male' },
//   { value: 'female', label: 'female' },
// ];


// const countryAdapterFunction = (data:any) => {
//   return data?.map(item => ({
//     value: item?.name,
//     label: item?.name,
//     isoCode:item?.isoCode,
//     phoneCode:item?.phonecode
//   }));
// };
// const stateAdapterFunction = (data:any) => {
//   return data?.map(item => ({
//     value: item?.name,
//     label: item?.name,
//     isoCode:item?.isoCode,
//     countryCode:item?.countryCode
//   }));
// };


// //Registration schema validation
// const signUpSchema = yup.object({
//   SchoolName: yup.string().required("Please Enter your School Name"),
//   SchoolEmail: yup.string().required("Please Enter your School Email"),
//   Phone: yup.string().required("Please Enter school Phone Number"),
//   // Email: yup.string().required().email("Please Enter school valid email"),
//   CountryCode: yup.string().required("Please enter your country code"),
//   Mobile: yup.string().required("Please enter school mobile number"),
//   Address: yup.string().required("Please enter school address"),
//   Subdomain: yup.string().required("Please enter a unique subdomain"),
//   SchoolSize: yup.string().required("Please enter  School Size"),
//   Subscription: yup.string().required("Please select Subscription Type"),
//   // Country: yup.string().required("Please enter school country"),
//   State: yup.string().required("Please enter school state"),
  
//   FirstName: yup.string().required("Please Enter your First Name"),
//   LastName: yup.string().required("Please Enter your Last Name"),
//   CreatorPhone: yup.string().required("Please Enter your Phone Number"),
//   CreatorEmail: yup.string().required().email("Please Enter your valid email"),
//   Gender: yup.string().required("Please Enter your Gender"),
//   Password: yup.string().required("Please enter a password"),
//   // CreatorCountry: yup.string().required("Please enter your country"),
//   CreatorState: yup.string().required("Please enter your state"),
//   CreatorAddress: yup.string().required("Please enter your address"),
//   CreatorCountryCode: yup.string().required("Please enter your country code"),
  
// });

// const SignupPage = () => {
//   const [domain, setDomain] = useState("")
//   const [country, setCountry] = useState(Country.getAllCountries())
//   const [creatorCountry, setCreatorCountry] = useState(Country.getAllCountries())
//   const [countryCode, setCountryCode] = useState("")
//   const [selectedCountry, setSelectedCountry] = useState("AF")
//   const [state, setState] = useState(State.getStatesOfCountry(selectedCountry))
//   const [creatorState, setCreatorState] = useState(State.getStatesOfCountry(selectedCountry))
//   const [step, setStep] = useState(1)
//   const {isLoading, SignUp} = useAuth()
//   const example = "myschoolsubdomain"
//   // console.log("Domain", domain)
  
//   useEffect(() => {
//     // setCountryCode(selectedCountryData?.isoCode)
//     setCountry(Country.getAllCountries())
//     // setState(State.getStatesOfCountry(countryCode))
//     // setCountryCode(country?.)
//   }, [selectedCountry])
  
//   const selectedCountryData = countryAdapterFunction(country).find((d) => d.isoCode === selectedCountry);
  
//   useEffect(()=>{
//     setCountryCode(selectedCountryData?.isoCode)
//   },[countryCode, selectedCountry])

//   useEffect(()=>{
//        setState(State.getStatesOfCountry(selectedCountry))
//   },[selectedCountry, selectedCountry])

//   // console.log("Country", countryAdapterFunction(country)[0])
//   // console.log("STATE", state)
//   // console.log("selectedCountry", selectedCountry)
//   // console.log("selectedCountryDDDDDDD", selectedCountryData)


//   const {
//     handleSubmit,
//     register,
//     formState: { errors },
//     reset,
  
//   } = useForm({
//     resolver: yupResolver(signUpSchema),
//     mode: "onChange",
//   });

//   const handleNext = () =>{
//     setStep(step + 1)
//   }
//   const handlePrev = () =>{
//     setStep(step - 1)
//   }



//   const handleSignup = async (data: any) => {
//     const requestData = {
//       name: data.SchoolName,
//       mobile: data.Phone,
//       countryCode: data.CountryCode,
//       email: data.SchoolEmail,
//       address: data.Address,
//       country: selectedCountryData?.name,
//       state: data.State,
//       schoolSize: data?.SchoolSize, // Example value
//       subdomain: domain,
//       altMobile: data.Mobile,
//       subscription: data?.Subscription, // Example value
//       multiFactorAuth: true, // Example value
//       creator: {
//         firstName: data?.FirstName, // Replace with actual form fields if necessary
//         lastName: data?.LastName,    // Replace with actual form fields if necessary
//         gender: data?.Gender,      // Replace with actual form fields if necessary
//         mobile: data.CreatorPhone,
//         countryCode: data.CreatorCountryCode,
//         email: data.CreatorEmail,
//         address: data.CreatorAddress,
//         country: selectedCountryData?.name,
//         state: data.CreatorState,
//         password: data.Password,
//         multiFactorAuth: true,
//       },
//     };
//      console.log("reQQQQQQ",requestData);
//      SignUp(requestData)
//     // Implement submission logic
//   };

//   return (
//     <>
//       <section className="relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]">
//         <ToastContainer />
//         <div className="container">
//           <div className="-mx-4 flex flex-wrap">
//             <div className="w-full px-4">
//               <div className="shadow-three mx-auto w-[90%] md:w-[70%] max-w-[1200px] rounded bg-white px-6 py-10 dark:bg-dark sm:p-[60px]">
//                 <h3 className="mb-3 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">
//                   {step === 1 ? "Enter School Information" : "Creator Information"}
//                 </h3>
//                 <p className="mb-11 text-center text-base font-medium text-body-color">
//                  Create Account, It&apos;s totally free and super easy
//                 </p>

//                 <form
//                   // className="grid grid-cols-1 gap-8 md:grid-cols-2"
//                   onSubmit={handleSubmit(handleSignup)}
//                 >
//                 <div  className="grid grid-cols-1 gap-8 md:grid-cols-2">
//                  {
//                   step === 1 && 
//                    <Step1 
//                      register={register} 
//                      errors={errors} 
//                      domain={domain} 
//                      setDomain={setDomain} 
//                      plantypeData={plantypeData}
//                      schoolSizeData={schoolSizeData}
//                      example={example}
//                      setSelectedCountry={setSelectedCountry}
//                      selectedCountryData={selectedCountryData}
//                      stateOptionsData={stateAdapterFunction(state)}
//                      countryOptionsData={countryAdapterFunction(country)}
//                      />
//                  }
//                  {
//                   step === 2 && 
//                    <Step2 
//                      register={register} 
//                      errors={errors} 
//                     //  stateOptionsData={stateOptionsData}
//                      genderData={genderData}
//                      setSelectedCountry={setSelectedCountry}
//                      selectedCountryData={selectedCountryData}
//                      stateOptionsData={stateAdapterFunction(state)}
//                      countryOptionsData={countryAdapterFunction(country)}
//                       />
                     
//                  }

//                 </div>


//                   <div className=" flex flex-row items-center justify-between w-full">
//                     {
//                       step === 2 &&
//                       <div className="mb-6">
//                         <button
//                           type="button"
//                           className="w-full rounded-lg bg-gray-400 px-5 py-3 text-white"
//                           onClick={handlePrev}
//                           >
//                         Prev
//                         </button>
//                       </div>
//                     }

//                     {
//                       step === 1 &&
//                       <div className="mb-6 ">
//                         <button
//                           type="button"
//                           className="w-full rounded-lg bg-primary px-5 py-3 text-white"
//                           onClick={handleNext}
//                           >
//                           Next
//                         </button>
//                       </div>
//                     }
//                   </div>
//                     {/* Submit Button */}
//                     {
//                       step === 2 && 
//                       <div className="mb-6">
//                         <button
//                           disabled={isLoading}
//                           type="submit"
//                           className="w-full rounded-lg bg-primary px-5 py-3 text-white"
//                         >
//                           {isLoading ? "Registering" : "Register"}
//                         </button>
//                       </div>
//                     }
                  
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default SignupPage;



//  const Step1 = ({register, errors, setDomain, domain, example, stateOptionsData, plantypeData, schoolSizeData, countryOptionsData, setSelectedCountry, selectedCountryData}:any) => {
//   return(
//     <>
//        <div className="mb-8">
//                     <label
//                       htmlFor="schoolName"
//                       className="mb-3 block text-sm text-dark dark:text-white"
//                     >
//                       School Name
//                     </label>
//                     <CustomInput
//                       type={"text"}
//                       placeholder={"Enter your school name"}
//                       id={"schoolName"}
//                       register={{ ...register("SchoolName") }}
//                       errorMessage={errors?.SchoolName?.message}
//                     />
//                   </div>

//                   <div className="mb-8">
//                     <label
//                       htmlFor="schoolEmail"
//                       className="mb-3 block text-sm text-dark dark:text-white"
//                     >
//                       School Email
//                     </label>
//                     <CustomInput 
//                       type={"email"} 
//                       placeholder={"Enter your school email"} 
//                       id={"schoolEmail"}
//                       register={{ ...register("SchoolEmail") }}
//                       errorMessage={errors?.SchoolEmail?.message}
//                     />
//                   </div>

                 
//                   <div className="mb-8">
//                     <label
//                       htmlFor="phone"
//                       className="mb-3 block text-sm text-dark dark:text-white"
//                     >
//                       Phone Number
//                     </label>
//                     <CustomInput 
//                       type={"text"} 
//                       placeholder={"Enter your phone number"} 
//                       id={"phone"}
//                       register={{ ...register("Phone") }}
//                       errorMessage={errors?.Phone?.message}
//                     />
//                   </div>

//                   <div className="mb-8">
//                     <label
//                       htmlFor="mobile"
//                       className="mb-3 block text-sm text-dark dark:text-white"
//                     >
//                       Alternative Number
//                     </label>
//                     <CustomInput 
//                       type={"text"} 
//                       placeholder={"Enter Alternative mobile number"} 
//                       id={"mobile"}
//                       register={{ ...register("Mobile") }}
//                       errorMessage={errors?.Mobile?.message}
//                     />
//                   </div>

//                   <div className="mb-8">
//                     <label
//                       htmlFor="address"
//                       className="mb-3 block text-sm text-dark dark:text-white"
//                     >
//                       Address
//                     </label>
//                     <CustomInput 
//                       type={"text"} 
//                       placeholder={"Enter your address"} 
//                       id={"address"}
//                       register={{ ...register("Address") }}
//                       errorMessage={errors?.Address?.message}
//                     />
//                   </div>

//                   <div className="mb-8">
//                     <label
//                       htmlFor="subdomain"
//                       className="mb-3 block text-sm text-dark dark:text-white"
//                     >
//                       Subdomain
//                     </label>
//                     <CustomInput 
//                       type={"text"} 
//                       placeholder={"Enter a unique subdomain"} 
//                       id={"subdomain"}
//                       register={{ ...register("Subdomain") }}
//                       errorMessage={errors?.Subdomain?.message}
//                       func={setDomain} // Pass the handler to update the domain
//                     />
//                     <p className=" text-cente mt-1 text-l"><span className=" text-blue-600 italic">{domain ? domain : example}</span>.edumacro.com</p>
//                   </div>


//                   <div className="mb-8">
//                     <label
//                       htmlFor="country"
//                       className="mb-3 block text-sm text-dark dark:text-white"
//                     >
//                       Country
//                     </label>
                   
//                      {/* <CustomSelect
//                        options={countryOptionsData}
//                        id='country'
//                       //  placeholder='Select New Role'
//                        register={{ ...register("Country") }}
//                        errorMessage={errors?.Country?.message}
//                        func={setSelectedCountry}
//                      /> */}
//                        <select
//                         id={"country"}
//                         className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
//                         onChange={(e) => {
//                           console.log("ssssss", e.target.value); // Log the selected value
//                           setSelectedCountry?.(e.target.value);
//                         }}
//                         // { ...register("Country") }
//                       >
//                         {countryOptionsData?.map((option) => (
//                           <option key={option.value} value={option.isoCode}>
//                             {option.label}
//                           </option>
//                         ))}
//                       </select>
//                       {/* {errors && (
//                       <span className="px-[15px] text-red-600 py-0.5 pl-4 text-xs md:text-sm">
//                         {errors?.Country?.message}
//                       </span>
//                       )} */}
//                   </div>

//                   <div className="mb-8">
//                     <label
//                       htmlFor="countryCode"
//                       className="mb-3 block text-sm text-dark dark:text-white"
//                     >
//                       Country Code
//                     </label>
//                     <CustomInput 
//                       type={"text"} 
//                       defaultValue={selectedCountryData?.phoneCode}
//                       placeholder={"Enter your country code"} 
//                       id={"countryCode"}
//                       register={{ ...register("CountryCode") }}
//                       errorMessage={errors?.CountryCode?.message}
//                     />
//                   </div>


//                   <div className="mb-8">
//                     <label
//                       htmlFor="state"
//                       className="mb-3 block text-sm text-dark dark:text-white"
//                     >
//                       State
//                     </label>
//                     <CustomSelect
//                        options={stateOptionsData}
//                        id='stateSelect'
//                       //  placeholder='Select New Role'
//                        register={{ ...register("State") }}
//                        errorMessage={errors?.State?.message}
//                      />
//                   </div>


//                   <div className="mb-8">
//                     <label
//                       htmlFor="state"
//                       className="mb-3 block text-sm text-dark dark:text-white"
//                     >
//                       Select plan type
//                     </label>
//                     <CustomSelect
//                        options={plantypeData}
//                        id='planSelect'
//                       //  placeholder='Select New Role'
//                        register={{ ...register("Subscription") }}
//                        errorMessage={errors?.Subscription?.message}
//                      />
//                   </div>
//                   <div className="mb-8">
//                     <label
//                       htmlFor="state"
//                       className="mb-3 block text-sm text-dark dark:text-white"
//                     >
//                       Select School Size
//                     </label>
//                     <CustomSelect
//                        options={schoolSizeData}
//                        id='schoolSelect'
//                       //  placeholder='Select New Role'
//                        register={{ ...register("SchoolSize") }}
//                        errorMessage={errors?.SchoolSize?.message}
//                      />
//                   </div>
                

//     </>
//   )
// }



//  const Step2 = ({register, errors, stateOptionsData,  genderData, countryOptionsData, setSelectedCountry, selectedCountryData}:any) => {
//   return(
//     <>

//                   <div className="mb-8">
//                     <label
//                       htmlFor="firstName"
//                       className="mb-3 block text-sm text-dark dark:text-white"
//                     >
//                      Your First Name
//                     </label>
//                     <CustomInput 
//                       type={"text"} 
//                       placeholder={"Enter your first name"} 
//                       id={"firstName"}
//                       register={{ ...register("FirstName") }}
//                       errorMessage={errors?.FirstName?.message}
//                     />
//                   </div>

//                   <div className="mb-8">
//                     <label
//                       htmlFor="lastName"
//                       className="mb-3 block text-sm text-dark dark:text-white"
//                     >
//                      Your Last Name
//                     </label>
//                     <CustomInput 
//                       type={"text"} 
//                       placeholder={"Enter your last name"} 
//                       id={"lastName"}
//                       register={{ ...register("LastName") }}
//                       errorMessage={errors?.LastName?.message}
//                     />
//                   </div>

//                   <div className="mb-8">
//                     <label
//                       htmlFor="phone"
//                       className="mb-3 block text-sm text-dark dark:text-white"
//                     >
//                       Your Phone Number
//                     </label>
//                     <CustomInput 
//                       type={"text"} 
//                       placeholder={"Enter your phone number"} 
//                       id={"creatorPhone"}
//                       register={{ ...register("CreatorPhone") }}
//                       errorMessage={errors?.CreatorPhone?.message}
//                     />
//                   </div>

//                   <div className="mb-8">
//                     <label
//                       htmlFor="email"
//                       className="mb-3 block text-sm text-dark dark:text-white"
//                     >
//                      Your Email
//                     </label>
//                     <CustomInput 
//                       type={"email"} 
//                       placeholder={"Enter your email"} 
//                       id={"creatorEmail"}
//                       register={{ ...register("CreatorEmail") }}
//                       errorMessage={errors?.CreatorEmail?.message}
//                     />
//                   </div>

//                   <div className="mb-8">
//                     <label
//                       htmlFor="password"
//                       className="mb-3 block text-sm text-dark dark:text-white"
//                     >
//                       Password
//                     </label>
//                     <CustomInput 
//                       type={"password"} 
//                       placeholder={"Enter your password"} 
//                       id={"password"}
//                       register={{ ...register("Password") }}
//                       errorMessage={errors?.Password?.message}
//                     />
//                   </div>

//                   <div className="mb-8">
//                     <label
//                       htmlFor="country"
//                       className="mb-3 block text-sm text-dark dark:text-white"
//                     >
//                       Country
//                     </label>
//                     {/* <CustomInput 
//                       type={"text"} 
//                       placeholder={"Enter your country"} 
//                       id={"creatorCountry"}
//                       register={{ ...register("CreatorCountry") }}
//                       errorMessage={errors?.CreatorCountry?.message}
//                     /> */}
//                       <select
//                         id={"creatorCountry"}
//                         className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
//                         onChange={(e) => {
//                           console.log("ssssss", e.target.value); // Log the selected value
//                           setSelectedCountry?.(e.target.value);
//                         }}
//                         // { ...register("Country") }
//                       >
//                         {countryOptionsData?.map((option) => (
//                           <option key={option.value} value={option.isoCode}>
//                             {option.label}
//                           </option>
//                         ))}
//                       </select>
//                   </div>

//                   <div className="mb-8">
//                     <label
//                       htmlFor="countryCode"
//                       className="mb-3 block text-sm text-dark dark:text-white"
//                     >
//                       Country Code
//                     </label>
//                     <CustomInput 
//                       type={"text"} 
//                       defaultValue={selectedCountryData?.isoCode}
//                       placeholder={"Enter your country code"} 
//                       id={"creatorCountryCode"}
//                       register={{ ...register("CreatorCountryCode") }}
//                       errorMessage={errors?.CreatorCountryCode?.message}
//                     />
//                   </div>


//                   <div className="mb-8">
//                     <label
//                       htmlFor="state"
//                       className="mb-3 block text-sm text-dark dark:text-white"
//                     >
//                       State
//                     </label>
//                     <CustomSelect
//                        options={stateOptionsData}
//                        id='creatorStateSelect'
//                       //  placeholder='Select New Role'
//                        register={{ ...register("CreatorState") }}
//                        errorMessage={errors?.CreatorState?.message}
//                      />
//                   </div>


//                   <div className="mb-8">
//                     <label
//                       htmlFor="state"
//                       className="mb-3 block text-sm text-dark dark:text-white"
//                     >
//                      Gender
//                     </label>
//                     <CustomSelect
//                        options={genderData}
//                        id='selectGender'
//                       //  placeholder='Select New Role'
//                        register={{ ...register("Gender") }}
//                        errorMessage={errors?.Gender?.message}
//                      />
//                   </div>

//                   <div className="mb-8">
//                     <label
//                       htmlFor="address"
//                       className="mb-3 block text-sm text-dark dark:text-white"
//                     >
//                       Address
//                     </label>
//                     <CustomInput 
//                       type={"text"} 
//                       placeholder={"Enter your address"} 
//                       id={"creatorAddress"}
//                       register={{ ...register("CreatorAddress") }}
//                       errorMessage={errors?.CreatorAddress?.message}
//                     />
//                   </div>

                

                

//     </>
//   )
// }

