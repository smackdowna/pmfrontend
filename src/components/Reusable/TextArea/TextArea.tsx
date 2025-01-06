import React from "react";
import { FieldError } from "react-hook-form";

interface TextareaProps {
  label: string;
  name: string;
  placeholder?: string;
  rows?: number;
  validation?: object;
  error?: FieldError;
  register?: (name: string, options: object) => void;
  value?: string; // Add value for controlled component
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void; // Add onChange for controlled component
}
const Textarea: React.FC<TextareaProps> = ({
  label,
  name,
  placeholder = "",
  rows = 4,
  validation = {},
  error,
  register,
  value, // Destructure value
  onChange, // Destructure onChange
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
        value={value} // Set value for controlled component
        onChange={onChange} // Set onChange for controlled component
        {...(register ? register(name, validation) : {})}
      ></textarea>
      {error && <span className="text-red-500 text-sm">{error.message}</span>}
    </div>
  );
};

export default Textarea;
