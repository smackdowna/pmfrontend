
import TextInput from '../../Reusable/TextInput/TextInput'

const IdentityInfo = () => {
  return (
    <div className="bg-white w-full rounded-2xl p-6">
            <div className="flex flex-col gap-4">
              <p className="text-neutral-90 font-semibold">Identity Information</p>
              <TextInput
                label="PAN Card"
                name="panNumber"
                placeholder="Enter your PAN Number"
                type="text"
                validation={{
                  required: "PAN Number is required",
                  pattern: {
                    value: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
                    message: "Enter a valid PAN Number",
                  },
                }}
              />
              <TextInput
                label="Aadhaar Card"
                name="aadhaarNumber"
                placeholder="Enter your Aadhaar Number"
                type="text"
                validation={{
                  required: "Aadhaar Number is required",
                  pattern: {
                    value: /^[2-9]{1}[0-9]{11}$/,
                    message: "Enter a valid Aadhaar Number",
                  },
                }}
              />
            </div>
          </div>
  )
}

export default IdentityInfo
