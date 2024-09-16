"use client"

import Link from "next/link";
import { Metadata } from "next";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import CustomInput from "@/components/reusables/CustomInput";
import { useForm } from "react-hook-form";
import { useState } from "react";

// signup user schema
const signUpSchema = yup.object({
  SchoolName: yup.string().required("Please Enter your School Name"),
  SchoolEmail: yup.string().required("Please Enter your School Email"),
  // FirstName: yup.string().required("Please Enter your First Name"),
  // LastName: yup.string().required("Please Enter your Last Name"),
  Phone: yup.string().required("Please Enter your Phone Number"),
  // Email: yup.string().required().email("Please Enter a valid email"),
  Password: yup.string().required("Please enter a password"),
  // CountryCode: yup.string().required("Please enter your country code"),
  Mobile: yup.string().required("Please enter your mobile number"),
  Address: yup.string().required("Please enter your address"),
  Subdomain: yup.string().required("Please enter a unique subdomain"),
  // Banner: yup.mixed().required("Please upload a school banner"),
  Logo: yup.mixed().required("Please upload a school logo"),
  Country: yup.string().required("Please enter your country"),
  State: yup.string().required("Please enter your state"),
  CertificateOfIncorporation: yup.mixed().required("Please upload certificate of incorporation"),
  ProofOfBusinessAddress: yup.mixed().required("Please upload proof of business address"),
});

const SignupPage = () => {
  const [domain, setDomain] = useState("")
  const example = "myschoolsubdomain"
  console.log("Domain", domain)
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(signUpSchema),
    mode: "onChange",
  });


  const handleSignup = async (data: any) => {
    const requestData = {
      userType: "",
      email: data.Email,
      password: data.Password,
      firstName: data.FirstName,
      lastName: data.LastName,
      phone: data.Phone,
      // countryCode: data.CountryCode,
      mobile: data.Mobile,
      address: data.Address,
      subdomain: data.Subdomain,
      // banner: data.Banner,
      logo: data.Logo,
      country: data.Country,
      state: data.State,
      certificateOfIncorporation: data.CertificateOfIncorporation,
      proofOfBusinessAddress: data.ProofOfBusinessAddress,
    };
    console.log(requestData);
    // Implement submission logic
  };

  return (
    <>
      <section className="relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="shadow-three mx-auto w-[90%] md:w-[70%] max-w-[1200px] rounded bg-white px-6 py-10 dark:bg-dark sm:p-[60px]">
                <h3 className="mb-3 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">
                  Create your account
                </h3>
                <p className="mb-11 text-center text-base font-medium text-body-color">
                  It&apos;s totally free and super easy
                </p>

                <form
                  className="grid grid-cols-1 gap-8 md:grid-cols-2"
                  onSubmit={handleSubmit(handleSignup)}
                >
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

                  {/* <div className="mb-8">
                    <label
                      htmlFor="firstName"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                      First Name
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
                      Last Name
                    </label>
                    <CustomInput 
                      type={"text"} 
                      placeholder={"Enter your last name"} 
                      id={"lastName"}
                      register={{ ...register("LastName") }}
                      errorMessage={errors?.LastName?.message}
                    />
                  </div> */}

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

                  {/* <div className="mb-8">
                    <label
                      htmlFor="email"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                      Email
                    </label>
                    <CustomInput 
                      type={"email"} 
                      placeholder={"Enter your email"} 
                      id={"email"}
                      register={{ ...register("Email") }}
                      errorMessage={errors?.Email?.message}
                    />
                  </div> */}

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

                  {/* <div className="mb-8">
                    <label
                      htmlFor="countryCode"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                      Country Code
                    </label>
                    <CustomInput 
                      type={"text"} 
                      placeholder={"Enter your country code"} 
                      id={"countryCode"}
                      register={{ ...register("CountryCode") }}
                      errorMessage={errors?.CountryCode?.message}
                    />
                  </div> */}

                  <div className="mb-8">
                    <label
                      htmlFor="mobile"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                      WhatsApp Number
                    </label>
                    <CustomInput 
                      type={"text"} 
                      placeholder={"Enter your mobile number"} 
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
                    <p className=" text-cente mt-1 text-l"><span className=" text-blue-600 italic">{domain ? domain : example}</span>.educare.com</p>
                  </div>

                  {/* <div className="mb-8">
                    <label
                      htmlFor="banner"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                      Banner
                    </label>
                    <CustomInput 
                      type={"file"} 
                      id={"banner"}
                      register={{ ...register("Banner") }}
                      errorMessage={errors?.Banner?.message}
                    />
                  </div> */}

                  <div className="mb-8">
                    <label
                      htmlFor="logo"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                      Logo
                    </label>
                    <CustomInput 
                      type={"file"} 
                      id={"logo"}
                      register={{ ...register("Logo") }}
                      errorMessage={errors?.Logo?.message}
                    />
                  </div>

                  <div className="mb-8">
                    <label
                      htmlFor="country"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                      Country
                    </label>
                    <CustomInput 
                      type={"text"} 
                      placeholder={"Enter your country"} 
                      id={"country"}
                      register={{ ...register("Country") }}
                      errorMessage={errors?.Country?.message}
                    />
                  </div>

                  <div className="mb-8">
                    <label
                      htmlFor="state"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                      State
                    </label>
                    <CustomInput 
                      type={"text"} 
                      placeholder={"Enter your state"} 
                      id={"state"}
                      register={{ ...register("State") }}
                      errorMessage={errors?.State?.message}
                    />
                  </div>

                  <div className="mb-8">
                    <label
                      htmlFor="certificateOfIncorporation"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                      Certificate of Incorporation
                    </label>
                    <CustomInput 
                      type={"file"} 
                      id={"certificateOfIncorporation"}
                      register={{ ...register("CertificateOfIncorporation") }}
                      errorMessage={errors?.CertificateOfIncorporation?.message}
                    />
                  </div>

                  <div className="mb-8">
                    <label
                      htmlFor="proofOfBusinessAddress"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                      Proof of Business Address
                    </label>
                    <CustomInput 
                      type={"file"} 
                      id={"proofOfBusinessAddress"}
                      register={{ ...register("ProofOfBusinessAddress") }}
                      errorMessage={errors?.ProofOfBusinessAddress?.message}
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="mb-6">
                    <button
                      type="submit"
                      className="w-full rounded-lg bg-primary px-5 py-3 text-white"
                    >
                      Sign Up
                    </button>
                  </div>
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
