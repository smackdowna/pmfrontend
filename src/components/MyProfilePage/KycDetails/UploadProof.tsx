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

const UploadProof: React.FC<UploadProofProps> = ({ errors = {}, fileNames = {}, onFileChange }) => {
  return (
    <div className="bg-white w-full rounded-2xl p-6">
      <div className="flex flex-col gap-4">
        <p className="text-neutral-90 font-semibold">Upload Proof</p>
        <UploadInput
          label="Aadhaar Card Image"
          name="adImageFile"
          accept="image/*"
          error={errors?.adImageFile || ""}
          fileName={fileNames?.adImageFile || ""}
          onFileChange={onFileChange || (() => {})}
        />
        <UploadInput
          label="PAN Card Image"
          name="panImageFile"
          accept="image/*"
          error={errors?.panImageFile || ""}
          fileName={fileNames?.panImageFile || ""}
          onFileChange={onFileChange || (() => {})}
        />
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
