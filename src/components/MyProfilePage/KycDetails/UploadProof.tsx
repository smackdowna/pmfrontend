/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import UploadInput from "../../Reusable/UploadInput/UploadInput";
import { FieldErrors } from "react-hook-form";
import { TSetupProfileData } from "../../../pages/Auth/SetupProfile/SetupProfile";

interface UploadProofProps {
  register?: any;
  errors?: FieldErrors<TSetupProfileData>;
  fileNames?: { [key: string]: string };
  onFileChange?: (name: string, file: File | null) => void;
}

const UploadProof: React.FC<UploadProofProps> = ({ 
  errors = {}, 
  fileNames = {}, 
  onFileChange, 
}) => {

  return (
    <div className="bg-white w-full rounded-2xl p-6">
      <div className="flex flex-col gap-4">
        <p className="text-neutral-90 font-semibold">Upload Proof</p>

        {/* Second Upload Input - Remains the same */}
        <UploadInput
          label="Cancel Cheque/Passbook Image"
          name="passbookImageFile"
          accept="image/*"
          error={errors?.passbookImageFile || ""}
          fileName={fileNames?.passbookImageFile || ""}
          onFileChange={onFileChange || (() => {})}
        />
      </div>
    </div>
  );
};

export default UploadProof;
