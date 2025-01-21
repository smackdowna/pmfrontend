/* eslint-disable @typescript-eslint/no-explicit-any */
import TextInput from "../../Reusable/TextInput/TextInput";
import { ChangeEvent } from "react";
import { BankInfoField } from "../../../pages/Auth/SetupProfile/SetupProfile";
import SelectDropdown from "../../Reusable/Dropdown/SelectDropdown";

type TBankInfo = {
  register?: any;
  errors?: any;
  handleBankInfoChange?: (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>, field: BankInfoField) => void;
};
const BankInfo:React.FC<TBankInfo> = ({register, errors, handleBankInfoChange}) => {

  return (
    <div className="bg-white w-full rounded-2xl p-6">
      <div className="flex flex-col gap-4">
        <p className="text-neutral-90 font-semibold">Bank Information</p>
        <div className="flex flex-col xl:flex-row gap-4">
          <TextInput
            label="Account Holder Name"
            {...register("holderName", { required: "Account Holder's Name is required" })}
            error={errors.holderName}
            placeholder="Enter Account Holder's Name"
            onChange={(e) => handleBankInfoChange && handleBankInfoChange(e, "accountHolderName")}
          />
          <TextInput
            label="Account Number"
            {...register("accountNumber", {
                required: "Account Number is required", 
                pattern: {
                    value: /^[0-9]*$/,
                    message: "Enter a valid Account Number",
                },
            })}
            onChange={(e) => handleBankInfoChange && handleBankInfoChange(e, "accountNumber")}
            error={errors.accountNumber}
            placeholder="Enter Account Number"
          />
        </div>
        <SelectDropdown
          label="Account Type"
            {...register("accountType", { required: "Account Type is required" })}
            error={errors.accountType}
            options={["Savings", "Current", "Other"]}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleBankInfoChange && handleBankInfoChange(e, "accountType")}
          />
          <TextInput
            label="IFSC Code"
          {...register("ifscCode", {
            required: "IFSC Code is required",
            pattern: {
              value: /^[A-Z]{4}[0][A-Z0-9]{6}$/,
              message: "Enter a valid IFSC Code",
            },
          })}
          onChange={(e) => handleBankInfoChange && handleBankInfoChange(e, "ifscCode")}
          error={errors.ifscCode}
          placeholder="Enter IFSC Code"
        />
        <div className="flex flex-col xl:flex-row gap-4">
          <TextInput
            label="Bank Name"
            {...register("bankName", { required: "Bank Name is required" })}
            error={errors.bankName}
            placeholder="Enter Bank Name"
            onChange={(e) => handleBankInfoChange && handleBankInfoChange(e, "bankName")}
          />
          <TextInput
            label="Branch Name"
            {...register("bankBranch", { required: "Branch Name is required" })}
            error={errors.bankBranch}
            placeholder="Enter Branch Name"
            onChange={(e) => handleBankInfoChange && handleBankInfoChange(e, "bankBranch")}
          />
        </div>
        <div className="flex flex-col xl:flex-row gap-4">
          <TextInput
            label="Nominee Name"
            {...register("nomineeName", { required: "Nominee Name is required" })}
            error={errors.nomineeName}
            placeholder="Enter Nominee Name"
            onChange={(e) => handleBankInfoChange && handleBankInfoChange(e, "nomineeName")}
          />
          <TextInput
            label="Nominee Relation"
            {...register("nomineeRelation", { required: "Nominee Relation is required" })}
            error={errors.nomineeRelation}
            placeholder="Enter Nominee Relation"
            onChange={(e) => handleBankInfoChange && handleBankInfoChange(e, "nomineeRelation")}
          />
        </div>
      </div>
    </div>
  );
};

export default BankInfo;
