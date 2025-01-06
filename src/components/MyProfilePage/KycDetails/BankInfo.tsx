import TextInput from "../../Reusable/TextInput/TextInput"
import Dropdown from "../../Reusable/Dropdown/Dropdown"
const BankInfo = () => {
  return (
    <div>
        <div className="bg-white w-full rounded-2xl p-6">
            <div className="flex flex-col gap-4">
              <p className="text-neutral-90 font-semibold">Bank Information</p>
              
              <div className="flex flex-col xl:flex-row gap-4">
                <TextInput  
                    label="Account Holder Name"
                    name="holderName"
                    placeholder="Enter Account Holder's Name"
                    type="text"
                    validation={{
                        required: "Account Holder's Name is required",
                    }}
                />
                <TextInput  
                    label="Account Number"
                    name="accountNumber"
                    placeholder="Enter Account Number"
                    type="text"
                    validation={{
                        required: "Account Number is required",
                    }}
                />
              </div>
              <Dropdown 
                label="Account Type"
                name="accountType"
                options={["Savings", "Current"]}
                validation={{
                    required: "Account Type is required",
                }}
                />
              <TextInput
                label="IFSC Code"
                name="ifscCode"
                placeholder="Enter IFSC Code"
                type="text"
                validation={{
                  required: "IFSC Code is required",
                  pattern: {
                    value: /^[A-Z]{4}[0][A-Z0-9]{6}$/,
                    message: "Enter a valid IFSC Code",
                  },
                }}  
                />

                <div className="flex flex-col xl:flex-row gap-4">
                    <TextInput 
                        label="Bank Name"
                        name="bankName"
                        placeholder="Enter Bank Name"
                        type="text"
                        validation={{
                            required: "Bank Name is required",
                        }}
                    />
                    <TextInput 
                        label="Branch Name"
                        name="branchName"
                        placeholder="Enter Branch Name"
                        type="text"
                        validation={{
                            required: "Branch Name is required",
                        }}
                    />
                </div>

                <div className="flex flex-col xl:flex-row gap-4">
                    <TextInput  
                        label="Nominee Name"
                        name="nomineeName"
                        placeholder="Enter Nominee Name"
                        type="text"
                        validation={{
                            required: "Nominee Name is required",
                        }}
                    />
                    <TextInput  
                        label="Nominee Relation"
                        name="nomineeRelation"
                        placeholder="Enter Nominee Relation"
                        type="text"
                        validation={{
                            required: "Nominee Relation is required",
                        }}
                    />
                </div>
            </div>
          </div>
        </div>
  )
}

export default BankInfo
