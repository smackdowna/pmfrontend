import React from "react";
import { FieldError } from "react-hook-form";

interface TextareaProps {
  label: string;
  name: string;
  placeholder?: string;
  rows?: number;
  validation?: object;
  error?: FieldError;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Textarea: React.FC<TextareaProps> = ({
  label,
  name,
  placeholder = "",
  rows = 4,
  validation = {},
  error,
  onChange,
}) => {
  return (
    <div className="flex flex-col gap-2 font-Inter">
      <label htmlFor={name} className="text-neutral-65">
        {label}
        <span className="text-primary-10">*</span>
      </label>
      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        rows={rows}
        className={`px-[18px] py-[14px] rounded-lg bg-neutral-70 border ${
          error ? "border-red-500" : "border-neutral-75"
        }`}
        onChange={onChange}
      ></textarea>
      {error && (
        <span className="text-red-500 text-sm">{error.message}</span>
      )}
    </div>
  );
};

export default Textarea;
