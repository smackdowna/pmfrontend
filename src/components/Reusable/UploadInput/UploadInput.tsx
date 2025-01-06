import React from "react";
import { ICONS } from "../../../assets";

interface UploadInputProps {
  label: string;
  name: string;
  accept?: string;
  error?: any;
  [key: string]: any; // To handle additional props like `register` from react-hook-form
}

const UploadInput: React.FC<UploadInputProps> = ({ label, name, accept, error, ...rest }) => {
  return (
    <div className="flex flex-col gap-2">
      <label className=" text-neutral-65">
        {label} <span className="text-red-600"> *</span>
      </label>
      <div className="relative border rounded-lg px-[18px] py-[14px] bg-neutral-70 focus-within:ring-2 focus-within:ring-primary-10 focus-within:outline-none 
        ">
        <input
          type="file"
          name={name}
          accept={accept}
          placeholder=""
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          {...rest}
        />
        <div className="flex justify-between items-center">
          <span className="text-neutral-65">Select File to Upload</span>
          <img src={ICONS.upload} alt="Upload" className="w-5 h-5" />
        </div>
        
      </div>
      {error && (<p className="text-xs text-red-500 mt-1">{error.message}</p>)}
    </div>
  );
};

export default UploadInput;
