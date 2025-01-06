import React from "react";
import { FieldError } from "react-hook-form";

interface TextInputProps {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
  error?: FieldError;
  register?: (name: string, options: object) => void;
  validation?: object;
  value?: string; // Add value for controlled input
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // Add onChange for controlled input
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  name,
  placeholder = "",
  type = "text",
  error,
  register,
  validation = {},
  value, // Destructure value
  onChange, // Destructure onChange
}) => {
  return (
    <div className="flex flex-col gap-2 font-Inter">
      <label htmlFor={name} className="text-neutral-65">
        {label}
        <span className="text-primary-10">*</span>
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className={`px-[18px] py-[14px] rounded-lg bg-neutral-70 border ${
          error ? "border-red-500" : "border-neutral-75"
        }`}
        value={value} // Set value
        onChange={onChange} // Set onChange
        {...(register ? register(name, validation) : {})}
      />
      {error && <span className="text-red-500 text-sm">{error.message}</span>}
    </div>
  );
};

export default TextInput;
