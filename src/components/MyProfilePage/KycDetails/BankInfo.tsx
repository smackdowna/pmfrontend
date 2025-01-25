/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent } from "react";
import SelectDropdown from "../../Reusable/Dropdown/SelectDropdown";
import TextInput from "../../Reusable/TextInput/TextInput";
import { BankInfoField } from "../../../pages/Auth/SetupProfile/SetupProfile";

type TBankInfoProps = {
  register?: any;
  errors?: any;
  index?: number;
  handleBankInfoChange?: (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>, field: BankInfoField) => void;
};

const BankInfo: React.FC<TBankInfoProps> = ({
  register = () => ({}),
  errors = {},
  index = 0,
  handleBankInfoChange = () => {},
}) => {
  return (
    <div className="bg-white w-full rounded-2xl p-6">
      <div className="flex flex-col gap-4">
        <p className="text-neutral-90 font-semibold">Bank Information</p>
        <div className="flex flex-col xl:flex-row gap-4">
          <TextInput
            label="Account Holder Name"
            {...register(`bankInfo.${index}.accholderName`, { required: "Account Holder's Name is required" })}
            error={errors?.bankInfo?.[index]?.accholderName}
            placeholder="Enter Account Holder's Name"
            onChange={(e) => handleBankInfoChange(e, "accholderName")}
          />
          <TextInput
            label="Account Number"
            {...register(`bankInfo.${index}.accNumber`, {
              required: "Account Number is required",
              pattern: {
                value: /^[0-9]*$/,
                message: "Enter a valid Account Number",
              },
            })}
            error={errors?.bankInfo?.[index]?.accNumber}
            placeholder="Enter Account Number"
            onChange={(e) => handleBankInfoChange(e, "accNumber")}
          />
        </div>
        <SelectDropdown
          label="Account Type"
            {...register(`bankInfo.${index}.accType`, { required: "Account Type is required" })}
            error={errors?.bankInfo?.[index]?.accType}
            options={["Savings", "Current", "Other"]}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => handleBankInfoChange(e, "accType")}
          />
          <TextInput
            label="IFSC Code"
          {...register(`bankInfo.${index}.ifscCode`, {
            required: "IFSC Code is required",
            pattern: {
              value: /^[A-Z]{4}[0][A-Z0-9]{6}$/,
              message: "Enter a valid IFSC Code",
            },
          })}
          error={errors?.bankInfo?.[index]?.ifscCode}
          placeholder="Enter IFSC Code"
          onChange={(e) => handleBankInfoChange(e, "ifscCode")}
        />
        <div className="flex flex-col xl:flex-row gap-4">
          <TextInput
            label="Bank Name"
            {...register(`bankInfo.${index}.bankName`, { required: "Bank Name is required" })}
            error={errors?.bankInfo?.[index]?.bankName}
            placeholder="Enter Bank Name"
            onChange={(e) => handleBankInfoChange(e, "bankName")}
          />
          <TextInput
            label="Branch Name"
            {...register(`bankInfo.${index}.bankBranch`, { required: "Branch Name is required" })}
            error={errors?.bankInfo?.[index]?.bankBranch}
            placeholder="Enter Branch Name"
            onChange={(e) => handleBankInfoChange(e, "bankBranch")}
          />
        </div>
        <div className="flex flex-col xl:flex-row gap-4">
          <TextInput
            label="Nominee Name"
            {...register(`bankInfo.${index}.nominName`, { required: "Nominee Name is required" })}
            error={errors?.bankInfo?.[index]?.nominName}
            placeholder="Enter Nominee Name"
            onChange={(e) => handleBankInfoChange(e, "nominName")}
          />
          <TextInput
            label="Nominee Relation"
            {...register(`bankInfo.${index}.nomiRelation`, { required: "Nominee Relation is required" })}
            error={errors?.bankInfo?.[index]?.nomiRelation}
            placeholder="Enter Nominee Relation"
            onChange={(e) => handleBankInfoChange(e, "nomiRelation")}
          />
        </div>
      </div>
    </div>
  );
};

export default BankInfo;
