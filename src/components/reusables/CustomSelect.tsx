"use client";
import React from "react";

type Option = {
  value: string;
  label: string;
};

type Props = {
  options?: Option[];
  placeholder?: string;
  id?: string;
  register?: any;
  errorMessage?: string;
  func?: (value: string) => void;
};

const CustomSelect = ({ options, placeholder, id, register, errorMessage, func }: Props) => {
  return (
    <>
      {/* <div className="relative flex items-center justify-center max-sm:w-[370px] w-[300px]"> */}
        <select
          id={id}
          className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
          onChange={(e) => {
            console.log("ssssss", e.target.value); // Log the selected value
            func?.(e.target.value);
          }}
          {...register}
        >
          {/* <option value="" disabled>
            {placeholder || "Select an option"}
          </option> */}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      {/* </div> */}
      {errorMessage && (
        <span className="px-[15px] text-red-600 py-0.5 pl-4 text-xs md:text-sm">
          {errorMessage}
        </span>
      )}
    </>
  );
};

export default CustomSelect;

