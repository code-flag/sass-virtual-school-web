"use client";
import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";

type Props = {
  placeholder?: string;
  type?: string;
  id?: any;
  register?:any;
  errorMessage?:any;
  defaultValue?:any;
  func?:any;
};
const CustomInput = ({ placeholder, type, register, id, defaultValue, errorMessage, func}: Props) => {
  const [show, setShow] = useState(false);
  return (
    <>
    {/* <div className="flex items-center justify-center max-sm:w-[370px] w-[439px] relative"> */}
      <input
        type={show && type === "password" ? "password" : type}
        placeholder={placeholder}
        id={id}
        defaultValue={defaultValue}
        {...register}
        onChange={(e) => func?.(e?.target?.value)}
        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
      />
      {/* {type === "password" &&
        (show ? (
          <span className="absolute right-4  cursor-pointer">
            <Eye onClick={()=>setShow(false)}/>
          </span>
        ) : (
          <span  className="absolute right-4 cursor-pointer">
            <EyeOff onClick={()=>setShow(true)}/>
          </span>
        ))} */}
    {/* </div> */}
       {
        errorMessage &&
        <span className=" px-[15px] text-red-600 py-0.5 pl-4 text-xs md:text-sm">
        {errorMessage}
       </span>
       }
    </>
  );
};

export default CustomInput;
