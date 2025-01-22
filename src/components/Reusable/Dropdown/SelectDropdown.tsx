/* eslint-disable @typescript-eslint/no-explicit-any */
// interface DropdownProps {
//   label: string;
//   options: string[];
//   error?: any;
//   [key: string]: any; // To handle `register` props from react-hook-form
// }

// const Dropdown: React.FC<DropdownProps> = ({ label, options, error, ...rest }) => {
//   return (
//     <div className="flex flex-col gap-2 font-Inter">
//       <label className="text-neutral-65">
//         {label}
//         <span className="text-red-600">*</span>
//       </label>
//       <select
//         className={`px-[18px] py-[14px] rounded-lg bg-neutral-70 border text-neutral-65 ${
//           error ? "border-red-500" : "border-neutral-75"
//         }`}
//         {...rest}
//       >
//         <option value="" disabled>
//           Select {label}
//         </option>
//         {options.map((option, index) => (
//           <option key={index} value={option}>
//             {option}
//           </option>
//         ))}
//       </select>
//       {error && <p className="text-xs text-red-500 mt-1">{error.message}</p>}
//     </div>
//   );
// };

// export default Dropdown;

import { forwardRef } from "react";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";


interface DropdownProps {
  label: string;
  options: string[];
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
}

const SelectDropdown = forwardRef<HTMLSelectElement, DropdownProps>(
  ({ label, options, error, ...rest }, ref) => {
    return (
      <div className="flex flex-col gap-2 font-Inter">
        <label className="text-neutral-65">
          {label}
          <span className="text-red-600">*</span>
        </label>
        <select
          ref={ref}
          className={`px-[18px] py-[14px] rounded-lg bg-neutral-70 border text-neutral-65 focus:outline-none focus:border-primary-10 transition duration-300 ${
            error ? "border-red-500" : "border-neutral-75"
          }`}
          {...rest}
        >
          <option value="" disabled>
            Select {label}
          </option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        {error && typeof error.message === 'string' && <p className="text-xs text-red-500 mt-1">{error.message}</p>}
      </div>
    );
  }
);

SelectDropdown.displayName = "SelectDropdown";

export default SelectDropdown;
