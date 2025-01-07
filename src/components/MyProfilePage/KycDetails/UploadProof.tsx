// import UploadInput from "../../Reusable/UploadInput/UploadInput"
// const UploadProof = () => {
//   return (
//     <div className="bg-white w-full rounded-2xl p-6">
//             <div className="flex flex-col gap-4">
//               <p className="text-neutral-90 font-semibold">Upload Proof</p>
//               <UploadInput
//                 label="Aadhaar Card Image"
//                 name="aadhaarCardImage"
//                 accept="image/*"
//               />
//               <UploadInput
//                 label="PAN Card Image"
//                 name="panCardImage"
//                 accept="image/*"
//               />
//               <UploadInput
//                 label="Cancel Cheque/Passbook Image"
//                 name="cancelChequeImage"
//                 accept="image/*"
//               />
//             </div>
//           </div>
//   )
// }

// export default UploadProof
// import { useFormContext } from "react-hook-form";
// import UploadInput from "../../Reusable/UploadInput/UploadInput";

// const UploadProof = () => {
//   const { register, formState: { errors } } = useFormContext();

//   return (
//     <div className="bg-white w-full rounded-2xl p-6">
//       <div className="flex flex-col gap-4">
//         <p className="text-neutral-90 font-semibold">Upload Proof</p>
//         <UploadInput
//           label="Aadhaar Card Image"
//           {...register("aadhaarCardImage", { required: "Aadhaar Card Image is required" })}
//           error={errors.aadhaarCardImage}
//           accept="image/*"
//         />
//         <UploadInput
//           label="PAN Card Image"
//           {...register("panCardImage", { required: "PAN Card Image is required" })}
//           error={errors.panCardImage}
//           accept="image/*"
//         />
//         <UploadInput
//           label="Cancel Cheque/Passbook Image"
//           {...register("cancelChequeImage", { required: "Cancel Cheque/Passbook Image is required" })}
//           error={errors.cancelChequeImage}
//           accept="image/*"
//         />
//       </div>
//     </div>
//   );
// };

// export default UploadProof;


// import { useFormContext } from "react-hook-form";
// import UploadInput from "../../Reusable/UploadInput/UploadInput";

// const UploadProof = () => {
//   const {
//     register,
//     formState: { errors },
//     watch,
//   } = useFormContext();

//   // Watch the file input fields
//   const aadhaarCardImage = watch("aadhaarCardImage");
//   const panCardImage = watch("panCardImage");
//   const cancelChequeImage = watch("cancelChequeImage");

//   return (
//     <div className="bg-white w-full rounded-2xl p-6">
//       <div className="flex flex-col gap-4">
//         <p className="text-neutral-90 font-semibold">Upload Proof</p>
//         <UploadInput
//           label="Aadhaar Card Image"
//           {...register("aadhaarCardImage", {
//             required: "Aadhaar Card Image is required",
//             validate: (value) => value && value.length > 0 || "Please upload a valid file",
//           })}
//           error={errors.aadhaarCardImage}
//           accept="image/*"
//         />
//         <UploadInput
//           label="PAN Card Image"
//           {...register("panCardImage", {
//             required: "PAN Card Image is required",
//             validate: (value) => value && value.length > 0 || "Please upload a valid file",
//           })}
//           error={errors.panCardImage}
//           accept="image/*"
//         />
//         <UploadInput
//           label="Cancel Cheque/Passbook Image"
//           {...register("cancelChequeImage", {
//             required: "Cancel Cheque/Passbook Image is required",
//             validate: (value) => value && value.length > 0 || "Please upload a valid file",
//           })}
//           error={errors.cancelChequeImage}
//           accept="image/*"
//         />
//       </div>
//     </div>
//   );
// };

// export default UploadProof;


import React from "react";
import { useFormContext } from "react-hook-form";
import UploadInput from "../../Reusable/UploadInput/UploadInput";

const UploadProof = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="bg-white w-full rounded-2xl p-6">
      <div className="flex flex-col gap-4">
        <p className="text-neutral-90 font-semibold">Upload Proof</p>
        <UploadInput
          label="Aadhaar Card Image"
          // name="aadhaarCardImage"
          accept="image/*"
          error={errors.aadhaarCardImage}
          {...register("aadhaarCardImage", {
            required: "Aadhaar Card Image is required",
          })}
        />
        <UploadInput
          label="PAN Card Image"
          // name="panCardImage"
          accept="image/*"
          error={errors.panCardImage}
          {...register("panCardImage", {
            required: "PAN Card Image is required",
          })}
        />
        <UploadInput
          label="Cancel Cheque/Passbook Image"
          // name="cancelChequeImage"
          accept="image/*"
          error={errors.cancelChequeImage}
          {...register("cancelChequeImage", {
            required: "Cancel Cheque/Passbook Image is required",
          })}
        />
      </div>
    </div>
  );
};

export default UploadProof;
