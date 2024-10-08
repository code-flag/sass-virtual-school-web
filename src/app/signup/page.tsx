"use client"

import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import CustomInput from "@/components/reusables/CustomInput";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import useAuth from "@/services/auth-services";
import CustomSelect from "@/components/reusables/CustomSelect";

import { Country, State, City }  from 'country-state-city';


const stateOptionsData = [
  { value: 'abia', label: 'Abia' },
  { value: 'adamawa', label: 'Adamawa' },
  { value: 'akwaIbom', label: 'Akwa Ibom' },
  { value: 'anambra', label: 'Anambra' },
  { value: 'bauchi', label: 'Bauchi' },
  { value: 'bayelsa', label: 'Bayelsa' },
  { value: 'benue', label: 'Benue' },
  { value: 'borno', label: 'Borno' },
  { value: 'crossRiver', label: 'Cross River' },
  { value: 'delta', label: 'Delta' },
  { value: 'ebonyi', label: 'Ebonyi' },
  { value: 'edo', label: 'Edo' },
  { value: 'ekiti', label: 'Ekiti' },
  { value: 'enugu', label: 'Enugu' },
  { value: 'gombe', label: 'Gombe' },
  { value: 'imo', label: 'Imo' },
  { value: 'jigawa', label: 'Jigawa' },
  { value: 'kaduna', label: 'Kaduna' },
  { value: 'kano', label: 'Kano' },
  { value: 'katsina', label: 'Katsina' },
  { value: 'kebbi', label: 'Kebbi' },
  { value: 'kogi', label: 'Kogi' },
  { value: 'kwara', label: 'Kwara' },
  { value: 'lagos', label: 'Lagos' },
  { value: 'nasarawa', label: 'Nasarawa' },
  { value: 'niger', label: 'Niger' },
  { value: 'ogun', label: 'Ogun' },
  { value: 'ondo', label: 'Ondo' },
  { value: 'osun', label: 'Osun' },
  { value: 'oyo', label: 'Oyo' },
  { value: 'plateau', label: 'Plateau' },
  { value: 'rivers', label: 'Rivers' },
  { value: 'sokoto', label: 'Sokoto' },
  { value: 'taraba', label: 'Taraba' },
  { value: 'yobe', label: 'Yobe' },
  { value: 'zamfara', label: 'Zamfara' },
  { value: 'fct', label: 'Federal Capital Territory (FCT)' }
];

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


const countryAdapterFunction = (data:any) => {
  return data?.map(item => ({
    value: item?.name,
    label: item?.name,
    isoCode:item?.isoCode,
    phoneCode:item?.phonecode
  }));
};
const stateAdapterFunction = (data:any) => {
  return data?.map(item => ({
    value: item?.name,
    label: item?.name,
    isoCode:item?.isoCode,
    countryCode:item?.countryCode
  }));
};


//Registration schema validation
const signUpSchema = yup.object({
  SchoolName: yup.string().required("Please Enter your School Name"),
  SchoolEmail: yup.string().required("Please Enter your School Email"),
  Phone: yup.string().required("Please Enter school Phone Number"),
  // Email: yup.string().required().email("Please Enter school valid email"),
  CountryCode: yup.string().required("Please enter your country code"),
  Mobile: yup.string().required("Please enter school mobile number"),
  Address: yup.string().required("Please enter school address"),
  Subdomain: yup.string().required("Please enter a unique subdomain"),
  SchoolSize: yup.string().required("Please enter  School Size"),
  Subscription: yup.string().required("Please select Subscription Type"),
  // Country: yup.string().required("Please enter school country"),
  State: yup.string().required("Please enter school state"),
  
  FirstName: yup.string().required("Please Enter your First Name"),
  LastName: yup.string().required("Please Enter your Last Name"),
  CreatorPhone: yup.string().required("Please Enter your Phone Number"),
  CreatorEmail: yup.string().required().email("Please Enter your valid email"),
  Gender: yup.string().required("Please Enter your Gender"),
  Password: yup.string().required("Please enter a password"),
  // CreatorCountry: yup.string().required("Please enter your country"),
  CreatorState: yup.string().required("Please enter your state"),
  CreatorAddress: yup.string().required("Please enter your address"),
  CreatorCountryCode: yup.string().required("Please enter your country code"),
  
});

const SignupPage = () => {
  const [domain, setDomain] = useState("")
  const [country, setCountry] = useState(Country.getAllCountries())
  const [creatorCountry, setCreatorCountry] = useState(Country.getAllCountries())
  const [countryCode, setCountryCode] = useState("")
  const [selectedCountry, setSelectedCountry] = useState("AF")
  const [state, setState] = useState(State.getStatesOfCountry(selectedCountry))
  const [creatorState, setCreatorState] = useState(State.getStatesOfCountry(selectedCountry))
  const [step, setStep] = useState(1)
  const {isLoading, SignUp} = useAuth()
  const example = "myschoolsubdomain"
  // console.log("Domain", domain)
  
  useEffect(() => {
    // setCountryCode(selectedCountryData?.isoCode)
    setCountry(Country.getAllCountries())
    // setState(State.getStatesOfCountry(countryCode))
    // setCountryCode(country?.)
  }, [selectedCountry])
  
  const selectedCountryData = countryAdapterFunction(country).find((d) => d.isoCode === selectedCountry);
  
  useEffect(()=>{
    setCountryCode(selectedCountryData?.isoCode)
  },[countryCode, selectedCountry])

  useEffect(()=>{
       setState(State.getStatesOfCountry(selectedCountry))
  },[selectedCountry, selectedCountry])

  // console.log("Country", countryAdapterFunction(country)[0])
  // console.log("STATE", state)
  // console.log("selectedCountry", selectedCountry)
  // console.log("selectedCountryDDDDDDD", selectedCountryData)


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
      name: data.SchoolName,
      mobile: data.Phone,
      countryCode: data.CountryCode,
      email: data.SchoolEmail,
      address: data.Address,
      country: selectedCountryData?.name,
      state: data.State,
      schoolSize: data?.SchoolSize, // Example value
      subdomain: domain,
      altMobile: data.Mobile,
      subscription: data?.Subscription, // Example value
      multiFactorAuth: true, // Example value
      creator: {
        firstName: data?.FirstName, // Replace with actual form fields if necessary
        lastName: data?.LastName,    // Replace with actual form fields if necessary
        gender: data?.Gender,      // Replace with actual form fields if necessary
        mobile: data.CreatorPhone,
        countryCode: data.CreatorCountryCode,
        email: data.CreatorEmail,
        address: data.CreatorAddress,
        country: selectedCountryData?.name,
        state: data.CreatorState,
        password: data.Password,
        multiFactorAuth: true,
      },
    };
     console.log("reQQQQQQ",requestData);
     SignUp(requestData)
    // Implement submission logic
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
                  // className="grid grid-cols-1 gap-8 md:grid-cols-2"
                  onSubmit={handleSubmit(handleSignup)}
                >
                <div  className="grid grid-cols-1 gap-8 md:grid-cols-2">
                 {
                  step === 1 && 
                   <Step1 
                     register={register} 
                     errors={errors} 
                     domain={domain} 
                     setDomain={setDomain} 
                     plantypeData={plantypeData}
                     schoolSizeData={schoolSizeData}
                     example={example}
                     setSelectedCountry={setSelectedCountry}
                     selectedCountryData={selectedCountryData}
                     stateOptionsData={stateAdapterFunction(state)}
                     countryOptionsData={countryAdapterFunction(country)}
                     />
                 }
                 {
                  step === 2 && 
                   <Step2 
                     register={register} 
                     errors={errors} 
                    //  stateOptionsData={stateOptionsData}
                     genderData={genderData}
                     setSelectedCountry={setSelectedCountry}
                     selectedCountryData={selectedCountryData}
                     stateOptionsData={stateAdapterFunction(state)}
                     countryOptionsData={countryAdapterFunction(country)}
                      />
                     
                 }

                </div>


                  <div className=" flex flex-row items-center justify-between w-full">
                    {
                      step === 2 &&
                      <div className="mb-6">
                        <button
                          type="button"
                          className="w-full rounded-lg bg-gray-400 px-5 py-3 text-white"
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



 const Step1 = ({register, errors, setDomain, domain, example, stateOptionsData, plantypeData, schoolSizeData, countryOptionsData, setSelectedCountry, selectedCountryData}:any) => {
  return(
    <>
       <div className="mb-8">
                    <label
                      htmlFor="schoolName"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                      School Name
                    </label>
                    <CustomInput
                      type={"text"}
                      placeholder={"Enter your school name"}
                      id={"schoolName"}
                      register={{ ...register("SchoolName") }}
                      errorMessage={errors?.SchoolName?.message}
                    />
                  </div>

                  <div className="mb-8">
                    <label
                      htmlFor="schoolEmail"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                      School Email
                    </label>
                    <CustomInput 
                      type={"email"} 
                      placeholder={"Enter your school email"} 
                      id={"schoolEmail"}
                      register={{ ...register("SchoolEmail") }}
                      errorMessage={errors?.SchoolEmail?.message}
                    />
                  </div>

                 
                  <div className="mb-8">
                    <label
                      htmlFor="phone"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                      Phone Number
                    </label>
                    <CustomInput 
                      type={"text"} 
                      placeholder={"Enter your phone number"} 
                      id={"phone"}
                      register={{ ...register("Phone") }}
                      errorMessage={errors?.Phone?.message}
                    />
                  </div>

                  <div className="mb-8">
                    <label
                      htmlFor="mobile"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                      Alternative Number
                    </label>
                    <CustomInput 
                      type={"text"} 
                      placeholder={"Enter Alternative mobile number"} 
                      id={"mobile"}
                      register={{ ...register("Mobile") }}
                      errorMessage={errors?.Mobile?.message}
                    />
                  </div>

                  <div className="mb-8">
                    <label
                      htmlFor="address"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                      Address
                    </label>
                    <CustomInput 
                      type={"text"} 
                      placeholder={"Enter your address"} 
                      id={"address"}
                      register={{ ...register("Address") }}
                      errorMessage={errors?.Address?.message}
                    />
                  </div>

                  <div className="mb-8">
                    <label
                      htmlFor="subdomain"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                      Subdomain
                    </label>
                    <CustomInput 
                      type={"text"} 
                      placeholder={"Enter a unique subdomain"} 
                      id={"subdomain"}
                      register={{ ...register("Subdomain") }}
                      errorMessage={errors?.Subdomain?.message}
                      func={setDomain} // Pass the handler to update the domain
                    />
                    <p className=" text-cente mt-1 text-l"><span className=" text-blue-600 italic">{domain ? domain : example}</span>.edumacro.com</p>
                  </div>


                  <div className="mb-8">
                    <label
                      htmlFor="country"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                      Country
                    </label>
                   
                     {/* <CustomSelect
                       options={countryOptionsData}
                       id='country'
                      //  placeholder='Select New Role'
                       register={{ ...register("Country") }}
                       errorMessage={errors?.Country?.message}
                       func={setSelectedCountry}
                     /> */}
                       <select
                        id={"country"}
                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                        onChange={(e) => {
                          console.log("ssssss", e.target.value); // Log the selected value
                          setSelectedCountry?.(e.target.value);
                        }}
                        // { ...register("Country") }
                      >
                        {countryOptionsData?.map((option) => (
                          <option key={option.value} value={option.isoCode}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                      {/* {errors && (
                      <span className="px-[15px] text-red-600 py-0.5 pl-4 text-xs md:text-sm">
                        {errors?.Country?.message}
                      </span>
                      )} */}
                  </div>

                  <div className="mb-8">
                    <label
                      htmlFor="countryCode"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                      Country Code
                    </label>
                    <CustomInput 
                      type={"text"} 
                      defaultValue={selectedCountryData?.phoneCode}
                      placeholder={"Enter your country code"} 
                      id={"countryCode"}
                      register={{ ...register("CountryCode") }}
                      errorMessage={errors?.CountryCode?.message}
                    />
                  </div>


                  <div className="mb-8">
                    <label
                      htmlFor="state"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                      State
                    </label>
                    <CustomSelect
                       options={stateOptionsData}
                       id='stateSelect'
                      //  placeholder='Select New Role'
                       register={{ ...register("State") }}
                       errorMessage={errors?.State?.message}
                     />
                  </div>


                  <div className="mb-8">
                    <label
                      htmlFor="state"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                      Select plan type
                    </label>
                    <CustomSelect
                       options={plantypeData}
                       id='planSelect'
                      //  placeholder='Select New Role'
                       register={{ ...register("Subscription") }}
                       errorMessage={errors?.Subscription?.message}
                     />
                  </div>
                  <div className="mb-8">
                    <label
                      htmlFor="state"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                      Select School Size
                    </label>
                    <CustomSelect
                       options={schoolSizeData}
                       id='schoolSelect'
                      //  placeholder='Select New Role'
                       register={{ ...register("SchoolSize") }}
                       errorMessage={errors?.SchoolSize?.message}
                     />
                  </div>
                

    </>
  )
}



 const Step2 = ({register, errors, stateOptionsData,  genderData, countryOptionsData, setSelectedCountry, selectedCountryData}:any) => {
  return(
    <>

                  <div className="mb-8">
                    <label
                      htmlFor="firstName"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                     Your First Name
                    </label>
                    <CustomInput 
                      type={"text"} 
                      placeholder={"Enter your first name"} 
                      id={"firstName"}
                      register={{ ...register("FirstName") }}
                      errorMessage={errors?.FirstName?.message}
                    />
                  </div>

                  <div className="mb-8">
                    <label
                      htmlFor="lastName"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                     Your Last Name
                    </label>
                    <CustomInput 
                      type={"text"} 
                      placeholder={"Enter your last name"} 
                      id={"lastName"}
                      register={{ ...register("LastName") }}
                      errorMessage={errors?.LastName?.message}
                    />
                  </div>

                  <div className="mb-8">
                    <label
                      htmlFor="phone"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                      Your Phone Number
                    </label>
                    <CustomInput 
                      type={"text"} 
                      placeholder={"Enter your phone number"} 
                      id={"creatorPhone"}
                      register={{ ...register("CreatorPhone") }}
                      errorMessage={errors?.CreatorPhone?.message}
                    />
                  </div>

                  <div className="mb-8">
                    <label
                      htmlFor="email"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                     Your Email
                    </label>
                    <CustomInput 
                      type={"email"} 
                      placeholder={"Enter your email"} 
                      id={"creatorEmail"}
                      register={{ ...register("CreatorEmail") }}
                      errorMessage={errors?.CreatorEmail?.message}
                    />
                  </div>

                  <div className="mb-8">
                    <label
                      htmlFor="password"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                      Password
                    </label>
                    <CustomInput 
                      type={"password"} 
                      placeholder={"Enter your password"} 
                      id={"password"}
                      register={{ ...register("Password") }}
                      errorMessage={errors?.Password?.message}
                    />
                  </div>

                  <div className="mb-8">
                    <label
                      htmlFor="country"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                      Country
                    </label>
                    {/* <CustomInput 
                      type={"text"} 
                      placeholder={"Enter your country"} 
                      id={"creatorCountry"}
                      register={{ ...register("CreatorCountry") }}
                      errorMessage={errors?.CreatorCountry?.message}
                    /> */}
                      <select
                        id={"creatorCountry"}
                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                        onChange={(e) => {
                          console.log("ssssss", e.target.value); // Log the selected value
                          setSelectedCountry?.(e.target.value);
                        }}
                        // { ...register("Country") }
                      >
                        {countryOptionsData?.map((option) => (
                          <option key={option.value} value={option.isoCode}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                  </div>

                  <div className="mb-8">
                    <label
                      htmlFor="countryCode"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                      Country Code
                    </label>
                    <CustomInput 
                      type={"text"} 
                      defaultValue={selectedCountryData?.isoCode}
                      placeholder={"Enter your country code"} 
                      id={"creatorCountryCode"}
                      register={{ ...register("CreatorCountryCode") }}
                      errorMessage={errors?.CreatorCountryCode?.message}
                    />
                  </div>


                  <div className="mb-8">
                    <label
                      htmlFor="state"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                      State
                    </label>
                    <CustomSelect
                       options={stateOptionsData}
                       id='creatorStateSelect'
                      //  placeholder='Select New Role'
                       register={{ ...register("CreatorState") }}
                       errorMessage={errors?.CreatorState?.message}
                     />
                  </div>


                  <div className="mb-8">
                    <label
                      htmlFor="state"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                     Gender
                    </label>
                    <CustomSelect
                       options={genderData}
                       id='selectGender'
                      //  placeholder='Select New Role'
                       register={{ ...register("Gender") }}
                       errorMessage={errors?.Gender?.message}
                     />
                  </div>

                  <div className="mb-8">
                    <label
                      htmlFor="address"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                      Address
                    </label>
                    <CustomInput 
                      type={"text"} 
                      placeholder={"Enter your address"} 
                      id={"creatorAddress"}
                      register={{ ...register("CreatorAddress") }}
                      errorMessage={errors?.CreatorAddress?.message}
                    />
                  </div>

                

                

    </>
  )
}












// "use client"

// import Link from "next/link";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import { useRouter } from "next/navigation";
// import CustomInput from "@/components/reusables/CustomInput";
// import { useForm } from "react-hook-form";
// import { useState } from "react";
// import useAuth from "@/services/auth-services";
// import CustomSelect from "@/components/reusables/CustomSelect";


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


// // signup user schema
// const signUpSchema = yup.object({
//   SchoolName: yup.string().required("Please Enter your School Name"),
//   SchoolEmail: yup.string().required("Please Enter your School Email"),
//   Phone: yup.string().required("Please Enter school Phone Number"),
//   Email: yup.string().required().email("Please Enter school valid email"),
//   CountryCode: yup.string().required("Please enter your country code"),
//   Mobile: yup.string().required("Please enter school mobile number"),
//   Address: yup.string().required("Please enter school address"),
//   Subdomain: yup.string().required("Please enter a unique subdomain"),
//   SchoolSize: yup.string().required("Please enter  School Size"),
//   Subscription: yup.string().required("Please select Subscription Type"),
//   Country: yup.string().required("Please enter school country"),
//   State: yup.string().required("Please enter school state"),
  
//   FirstName: yup.string().required("Please Enter your First Name"),
//   LastName: yup.string().required("Please Enter your Last Name"),
//   CreatorPhone: yup.string().required("Please Enter your Phone Number"),
//   CreatorEmail: yup.string().required().email("Please Enter your valid email"),
//   Gender: yup.string().required("Please Enter your Gender"),
//   Password: yup.string().required("Please enter a password"),
//   CreatorCountry: yup.string().required("Please enter your country"),
//   CreatorState: yup.string().required("Please enter your state"),
//   CreatorAddress: yup.string().required("Please enter your address"),
  
// });

// const SignupPage = () => {
//   const [domain, setDomain] = useState("")
//   const [step, setStep] = useState(1)
//   const {isLoading, SignUp} = useAuth()
//   const example = "myschoolsubdomain"
//   // console.log("Domain", domain)
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
//       country: data.Country,
//       state: data.State,
//       schoolSize: data?.SchoolSize, // Example value
//       subdomain: data.Subdomain,
//       altMobile: data.Mobile,
//       subscription: data?.Subscription, // Example value
//       multiFactorAuth: true, // Example value

//       creator: {
//         firstName: data?.firstName, // Replace with actual form fields if necessary
//         lastName: data?.lastName,    // Replace with actual form fields if necessary
//         gender: data?.Gender,      // Replace with actual form fields if necessary
//         mobile: data.CreatorPhone,
//         countryCode: data.CountryCode,
//         email: data.CreatorEmail,
//         address: data.CreatorAddress,
//         country: data.CreatorCountry,
//         state: data.CreatorState,
//         password: data.Password,
//         multiFactorAuth: true,
//       },
//     };
//     console.log("reQQQQQQ",requestData);
//     // Implement submission logic
//   };

//   return (
//     <>
//       <section className="relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]">
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
//                      stateOptionsData={stateOptionsData}
//                      plantypeData={plantypeData}
//                      schoolSizeData={schoolSizeData}
//                      example={example} />
//                  }
//                  {
//                   step === 2 && 
//                    <Step2 
//                      register={register} 
//                      errors={errors} 
//                      stateOptionsData={stateOptionsData}
//                      genderData={genderData}
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



//  const Step1 = ({register, errors, setDomain, domain, example, stateOptionsData, plantypeData, schoolSizeData}:any) => {
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
//                       htmlFor="countryCode"
//                       className="mb-3 block text-sm text-dark dark:text-white"
//                     >
//                       Country Code
//                     </label>
//                     <CustomInput 
//                       type={"text"} 
//                       placeholder={"Enter your country code"} 
//                       id={"countryCode"}
//                       register={{ ...register("CountryCode") }}
//                       errorMessage={errors?.CountryCode?.message}
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
//                     <p className=" text-cente mt-1 text-l"><span className=" text-blue-600 italic">{domain ? domain : example}</span>.educare.com</p>
//                   </div>


//                   <div className="mb-8">
//                     <label
//                       htmlFor="country"
//                       className="mb-3 block text-sm text-dark dark:text-white"
//                     >
//                       Country
//                     </label>
//                     <CustomInput 
//                       type={"text"} 
//                       placeholder={"Enter your country"} 
//                       id={"country"}
//                       register={{ ...register("Country") }}
//                       errorMessage={errors?.Country?.message}
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
//                        id='select'
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
//                        id='select'
//                       //  placeholder='Select New Role'
//                        register={{ ...register("plantypeData") }}
//                        errorMessage={errors?.plantypeData?.message}
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
//                        id='select'
//                       //  placeholder='Select New Role'
//                        register={{ ...register("schoolSizeData") }}
//                        errorMessage={errors?.schoolSizeData?.message}
//                      />
//                   </div>
                

//     </>
//   )
// }



//  const Step2 = ({register, errors, stateOptionsData,  genderData}:any) => {
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
//                       id={"phone"}
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
//                       id={"email"}
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
//                       htmlFor="countryCode"
//                       className="mb-3 block text-sm text-dark dark:text-white"
//                     >
//                       Country Code
//                     </label>
//                     <CustomInput 
//                       type={"text"} 
//                       placeholder={"Enter your country code"} 
//                       id={"countryCode"}
//                       register={{ ...register("CountryCode") }}
//                       errorMessage={errors?.CountryCode?.message}
//                     />
//                   </div>

//                   <div className="mb-8">
//                     <label
//                       htmlFor="country"
//                       className="mb-3 block text-sm text-dark dark:text-white"
//                     >
//                       Country
//                     </label>
//                     <CustomInput 
//                       type={"text"} 
//                       placeholder={"Enter your country"} 
//                       id={"country"}
//                       register={{ ...register("CreatorCountry") }}
//                       errorMessage={errors?.CreatorCountry?.message}
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
//                        id='select'
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
//                        id='select'
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
//                       id={"address"}
//                       register={{ ...register("CreatorAddress") }}
//                       errorMessage={errors?.CreatorAddress?.message}
//                     />
//                   </div>

                

                

//     </>
//   )
// }








// import Link from "next/link";

// import { Metadata } from "next";

// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";

// import { useRouter } from "next/navigation";
// import CustomInput from "@/components/reusables/CustomInput";
// import { useForm } from "react-hook-form";

// export const metadata: Metadata = {
//   title: "Sign Up Page | Free Next.js Template for Startup and SaaS",
//   description: "This is Sign Up Page for Startup Nextjs Template",
//   // other metadata
// };


// // signup user schema
// const signUpSchema = yup.object({
//   SchoolName: yup.string().required("Please Enter your School Name"),
//   SchoolEmail: yup.string().required("Please Enter your School Email"),
//   FirstName: yup.string().required("Please Enter your First Name"),
//   LastName: yup.string().required("Please Enter your Last Name"),
//   Phone: yup.string().required("Please Enter your Phone Number"),
//   Email: yup.string().required().email("Please Enter a valid email"),
//   Password: yup
//     .string()
//     .required("Please enter a password"),
   
// });

// const SignupPage = () => {

//   const {
//     handleSubmit,
//     register,
//     formState: { errors },
//     reset,
//   } = useForm({
//     resolver: yupResolver(signUpSchema),
//     mode: "onChange",
//   });

//   const handleSignup = async (data:any) => {
//     const requestData = {
//       userType:"",
//       email: data.Email,
//       password: data.Password,
//       firstName:data.FirstName,
//       lastName:data.LastName,
//       phone:data.Phone
//     }
//     console.log(requestData);

//   }
//   return (
//     <>
//       <section className="relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]">
//   <div className="container">
//     <div className="-mx-4 flex flex-wrap">
//       <div className="w-full px-4">
//         <div className="shadow-three mx-auto w-[90%] md:w-[70%] max-w-[1200px] rounded bg-white px-6 py-10 dark:bg-dark sm:p-[60px]">
//           <h3 className="mb-3 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">
//             Create your account
//           </h3>
//           <p className="mb-11 text-center text-base font-medium text-body-color">
//             It&apos;s totally free and super easy
//           </p>
               
//                 <form className="grid grid-cols-1 gap-8 md:grid-cols-2" onSubmit={handleSubmit(handleSignup)}>
//   {/* Existing Fields */}
//   <div className="mb-8">
//     <label
//       htmlFor="name"
//       className="mb-3 block text-sm text-dark dark:text-white"
//     >
//       School Name
//     </label>
//     <CustomInput 
//       type={"text"} 
//       placeholder={"Enter your school name"} 
//       id={"schoolName"}
//       register={{ ...register("SchoolName") }}
//       errorMessage={errors?.SchoolName?.message}
//        />
//   </div>

//   <div className="mb-8">
//     <label
//       htmlFor="email"
//       className="mb-3 block text-sm text-dark dark:text-white"
//     >
//       School Email
//     </label>
//     <CustomInput 
//       type={"text"} 
//       placeholder={"Enter your school email"} 
//       id={"schoolEmail"}
//       register={{ ...register("SchoolEmail") }}
//       errorMessage={errors?.SchoolEmail?.message}
//        />
//   </div>

//   <div className="mb-8">
//     <label
//       htmlFor="countryCode"
//       className="mb-3 block text-sm text-dark dark:text-white"
//     >
//       Country Code
//     </label>
//     <input
//       type="text"
//       name="countryCode"
//       placeholder="Enter your country code"
//       className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
//       required
//     />
//   </div>

//   <div className="mb-8">
//     <label
//       htmlFor="mobile"
//       className="mb-3 block text-sm text-dark dark:text-white"
//     >
//       School Phone number
//     </label>
//     <input
//       type="text"
//       name="mobile"
//       placeholder="Enter your mobile number"
//       className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
//       required
//     />
//   </div>



//   <div className="mb-8">
//     <label
//       htmlFor="address"
//       className="mb-3 block text-sm text-dark dark:text-white"
//     >
//       Address
//     </label>
//     <input
//       type="text"
//       name="address"
//       placeholder="Enter your address"
//       className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
//     />
//   </div>

//   <div className="mb-8">
//     <label
//       htmlFor="subdomain"
//       className="mb-3 block text-sm text-dark dark:text-white"
//       title="This is what your user would use to access your app on our platform. must be text only"
//     >
//       Subdomain (must be unique without space)
//     </label>
//     <input
//       type="text"
//       name="subdomain"
//       placeholder="yourname.ourdomain.com"
//       className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
//     />
//   </div>

//   <div className="mb-8">
//     <label
//       htmlFor="banner"
//       className="mb-3 block text-sm text-dark dark:text-white"
//     >
//       School Banner (cover photo)
//     </label>
//     <input
//       type="file"
//       name="banner"
//       className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
//     />
//   </div>

//   <div className="mb-8">
//     <label
//       htmlFor="logo"
//       className="mb-3 block text-sm text-dark dark:text-white"
//     >
//      School Logo
//     </label>
//     <input
//       type="file"
//       name="logo"
//       className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
//     />
//   </div>

//   <div className="mb-8">
//     <label
//       htmlFor="country"
//       className="mb-3 block text-sm text-dark dark:text-white"
//     >
//       Country
//     </label>
//     <input
//       type="text"
//       name="country"
//       placeholder="Enter your country"
//       className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
//     />
//   </div>

//   <div className="mb-8">
//     <label
//       htmlFor="state"
//       className="mb-3 block text-sm text-dark dark:text-white"
//     >
//       State
//     </label>
//     <input
//       type="text"
//       name="state"
//       placeholder="Enter your state"
//       className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
//     />
//   </div>

//   {/* New File Upload Fields */}
//   {/* <div className="mb-8">
//     <label
//       htmlFor="memorandumArticlesOfAssociation"
//       className="mb-3 block text-sm text-dark dark:text-white"
//     >
//       Memorandum & Articles of Association
//     </label>
//     <input
//       type="file"
//       name="memorandumArticlesOfAssociation"
//       className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
//     />
//   </div> */}

//   <div className="mb-8">
//     <label
//       htmlFor="certificateOfIncorporation"
//       className="mb-3 block text-sm text-dark dark:text-white"
//     >
//       Certificate of Incorporation
//     </label>
//     <input
//       type="file"
//       name="certificateOfIncorporation"
//       className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
//     />
//   </div>

//   {/* <div className="mb-8">
//     <label
//       htmlFor="cacStatusReport"
//       className="mb-3 block text-sm text-dark dark:text-white"
//     >
//       CAC Status Report
//     </label>
//     <input
//       type="file"
//       name="cacStatusReport"
//       className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
//     />
//   </div> */}

//   <div className="mb-8">
//     <label
//       htmlFor="ProofOfBusinessAddress"
//       className="mb-3 block text-sm text-dark dark:text-white"
//     >
//       Proof of Business Address
//     </label>
//     <input
//       type="file"
//       name="ProofOfBusinessAddress"
//       className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
//     />
//   </div>

//   {/* <div className="mb-8">
//     <label
//       htmlFor="idCard"
//       className="mb-3 block text-sm text-dark dark:text-white"
//     >
//       Director Id Card
//     </label>
//     <input
//       type="file"
//       name="idCard"
//       className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
//     />
//   </div> */}

//   {/* <div className="mb-8">
//     <label
//       htmlFor="nin"
//       className="mb-3 block text-sm text-dark dark:text-white"
//     >
//       National ID Number (NIN)
//     </label>
//     <input
//       type="file"
//       name="nin"
//       className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
//     />
//   </div> */}

//   {/* <div className="mb-8">
//     <label
//       htmlFor="companyLetter"
//       className="mb-3 block text-sm text-dark dark:text-white"
//     >
//       Company Letter
//     </label>
//     <input
//       type="file"
//       name="companyLetter"
//       className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
//     />
//   </div> */}

//   {/* <div className="mb-8">
//     <label
//       htmlFor="paymentMethod"
//       className="mb-3 block text-sm text-dark dark:text-white"
//     >
//       Payment Method
//     </label>
//     <select
//       name="paymentMethod"
//       className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
//       required
//     >
//       <option value="perSubject">Per Subject</option>
//       <option value="perCourse">Per Course</option>
//       <option value="dynamic">Dynamic</option>
//     </select>
//   </div> */}


//   <div className="mb-8">
//               <label htmlFor="password" className="block text-base font-medium text-dark dark:text-white">Password</label>
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 placeholder="Your password"
//                 className="w-full rounded-lg border border-stroke bg-transparent px-4 py-2 text-base font-medium text-body-color placeholder-text-body-color outline-none dark:border-stroke-dark dark:bg-dark dark:text-white dark:placeholder-text-body-color-dark focus:border-primary"
//                 required
//               />
//             </div>

//             <div className="mb-8">
//               <label htmlFor="confirmPassword" className="block text-base font-medium text-dark dark:text-white">Confirm Password</label>
//               <input
//                 type="password"
//                 id="confirmPassword"
//                 name="confirmPassword"
//                 placeholder="Confirm your password"
//                 className="w-full rounded-lg border border-stroke bg-transparent px-4 py-2 text-base font-medium text-body-color placeholder-text-body-color outline-none dark:border-stroke-dark dark:bg-dark dark:text-white dark:placeholder-text-body-color-dark focus:border-primary"
//                 required
//               />
//             </div>


//   <div className="mb-8">
//     <label
//       htmlFor="TCAgreement"
//       className="flex cursor-pointer select-none text-sm font-medium text-body-color"
//     >
//       <input
//         type="checkbox"
//         name="TCAgreement"
//         className="mr-2"
//         defaultChecked
//         required
//       />
//       I agree to the Terms and Conditions
//     </label>
//   </div>

//   <div className="mb-6">
//     <button className="shadow-submit dark:shadow-submit-dark flex w-full items-center justify-center rounded-sm bg-primary px-9 py-4 text-base font-medium text-white duration-300 hover:bg-primary/90">
//       Sign up
//     </button>
//   </div>
// </form>














//                 <p className="text-center text-base font-medium text-body-color">
//                   Already using Startup?{" "}
//                   <Link href="/signin" className="text-primary hover:underline">
//                     Sign in
//                   </Link>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="absolute left-0 top-0 z-[-1]">
//           <svg
//             width="1440"
//             height="969"
//             viewBox="0 0 1440 969"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <mask
//               id="mask0_95:1005"
//               style={{ maskType: "alpha" }}
//               maskUnits="userSpaceOnUse"
//               x="0"
//               y="0"
//               width="1440"
//               height="969"
//             >
//               <rect width="1440" height="969" fill="#090E34" />
//             </mask>
//             <g mask="url(#mask0_95:1005)">
//               <path
//                 opacity="0.1"
//                 d="M1086.96 297.978L632.959 554.978L935.625 535.926L1086.96 297.978Z"
//                 fill="url(#paint0_linear_95:1005)"
//               />
//               <path
//                 opacity="0.1"
//                 d="M1324.5 755.5L1450 687V886.5L1324.5 967.5L-10 288L1324.5 755.5Z"
//                 fill="url(#paint1_linear_95:1005)"
//               />
//             </g>
//             <defs>
//               <linearGradient
//                 id="paint0_linear_95:1005"
//                 x1="1178.4"
//                 y1="151.853"
//                 x2="780.959"
//                 y2="453.581"
//                 gradientUnits="userSpaceOnUse"
//               >
//                 <stop stopColor="#4A6CF7" />
//                 <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
//               </linearGradient>
//               <linearGradient
//                 id="paint1_linear_95:1005"
//                 x1="160.5"
//                 y1="220"
//                 x2="1099.45"
//                 y2="1192.04"
//                 gradientUnits="userSpaceOnUse"
//               >
//                 <stop stopColor="#4A6CF7" />
//                 <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
//               </linearGradient>
//             </defs>
//           </svg>
//         </div>
//       </section>
//     </>
//   );
// };

// export default SignupPage;
