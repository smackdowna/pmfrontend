/* eslint-disable @typescript-eslint/no-explicit-any */
import SelectDropdown from "../../Reusable/Dropdown/SelectDropdown";
import TextInput from "../../Reusable/TextInput/TextInput";
import UploadInput from "../../Reusable/UploadInput/UploadInput";

type TIdentityInfo = {
  register?: any;
  errors?: any;
  selectedDocument?: string;
  setSelectedDocument?: (value: string) => void;
  fileNames?: { [key: string]: string };
  onFileChange?: (name: string, file: File | null) => void;
};

const IdentityInfo: React.FC<TIdentityInfo> = ({ register, errors, selectedDocument, setSelectedDocument, onFileChange, fileNames }) => {

  const documentLabel =
    selectedDocument === "Aadhar Card" ? "Aadhaar Card Image" :
      selectedDocument === "Pan Card" ? "PAN Card Image" :
        selectedDocument === "Driving License" ? "Driving License Image" :
          selectedDocument === "Voter ID" ? "Voter ID Image" :
            selectedDocument === "Passport" ? "Passport Image" :
              "Identity Proof Image";
              
  return (
    <div className="bg-white w-full rounded-2xl p-6">
      <div className="flex flex-col gap-4">
        <p className="text-neutral-90 font-semibold">Identity Information</p>

        <TextInput
          label="PAN Card"
          {...register?.("panNumber", {
            pattern: {
              value: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
              message: "Enter a valid PAN Number",
            },
          })}
          error={errors?.panNumber}
          placeholder="Enter your PAN Number"
          isRequired={false}
        />

        <UploadInput
          label={"PAN Card Image"}
          name="identityProofFile"
          accept="image/*"
          error={errors?.identityProofFile || ""}
          fileName={fileNames?.identityProofFile || ""}
          onFileChange={onFileChange || (() => { })}
          isRequired={false}
        />

        {/* Dropdown for selecting document type */}
        <SelectDropdown
          label="Document Type"
          options={["Aadhar Card", "Driving License", "Voter ID", "Passport"]}
          error={errors?.documentType}
          {...register?.("documentType")}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedDocument?.(e.target.value)}
          isRequired={false}
        />

        {/* Conditionally Render Inputs Based on Selection */}
        {selectedDocument === "Aadhar Card" && (
          <TextInput
            label="Aadhaar Card"
            {...register?.("documentNumber", {
              pattern: {
                value: /^[2-9]{1}[0-9]{11}$/,
                message: "Enter a valid Aadhaar Number",
              },
            })}
            error={errors?.documentNumber}
            placeholder="Enter your Aadhaar Number"
            isRequired={false}
          />
        )}

        {selectedDocument === "Driving License" && (
          <TextInput
            label="Driving License"
            {...register?.("documentNumber", {
            })}
            error={errors?.documentNumber}
            placeholder="Enter your Driving License Number"
            isRequired={false}
          />
        )}

        {selectedDocument === "Voter ID" && (
          <TextInput
            label="Voter ID"
            {...register?.("documentNumber", {
            })}
            error={errors?.documentNumber}
            placeholder="Enter your Voter ID"
            isRequired={false}
          />
        )}

        {selectedDocument === "Passport" && (
          <TextInput
            label="Passport"
            {...register?.("documentNumber", {
            })}
            error={errors?.documentNumber}
            placeholder="Enter your Passport Number"
            isRequired={false}
          />
        )}

        {
          selectedDocument &&
          <UploadInput
            label={documentLabel}
            name="identityProofFile"
            accept="image/*"
            error={errors?.identityProofFile || ""}
            fileName={fileNames?.identityProofFile || ""}
            onFileChange={onFileChange || (() => { })}
          />
        }
      </div>
    </div>
  );
};

export default IdentityInfo;
