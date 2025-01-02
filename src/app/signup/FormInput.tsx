import React from 'react';

const FormInput = ({ label, name, type , register, error, placeHolder, func }) => {
  return (
    <div className='flex flex-col gap-1 w-full p-2'>
      <label htmlFor={name} className='text-black dark:text-white'>{label}</label>
      <input
        type={type}
        name={name}
        min={0}
        id={name}
        placeholder={placeHolder}
        onChange={(e) => func(e?.target?.value)}
        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
        {...register(name)}
      />
      {error && <p className=" px-[15px] text-red-600 py-0.5 pl-4 text-xs md:text-sm">{error.message}</p>}
    </div>
  );
};

export default FormInput;
