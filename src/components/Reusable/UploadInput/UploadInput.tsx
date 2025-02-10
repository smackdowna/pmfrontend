/* eslint-disable @typescript-eslint/no-explicit-any */
import { ICONS } from "../../../assets";

interface UploadInputProps {
  label: string;
  name: string;
  accept?: string;
  error?: any;
  fileName: string;
  onFileChange: (name: string, file: File | null) => void;
  isRequired? : boolean;
}

const UploadInput: React.FC<UploadInputProps> = ({ label, name, accept, error, fileName, onFileChange, isRequired=true }) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    onFileChange(name, file);
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="text-neutral-65">
        {label}
        {
          isRequired && <span className="text-red-600">*</span>
        }
      </label>
      <div
        className={`relative border rounded-lg px-[18px] py-[14px] bg-neutral-70 ${
          error ? "border-red-500" : "border-neutral-75"
        }`}
      >
        <input
          type="file"
          name={name}
          accept={accept}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          onChange={handleFileChange}
          required={isRequired}
        />
        <div className="flex justify-between items-center">
          <span className="text-neutral-65">
            {fileName || "Select File to Upload"}
          </span>
          <img src={ICONS.upload} alt="Upload" className="w-5 h-5" />
        </div>
      </div>
      {error && <p className="text-xs text-red-500 mt-1">{error.message}</p>}
    </div>
  );
};

export default UploadInput;
