// import { ICONS } from "../../../assets";
// import TextInput from "../../../components/Reusable/TextInput/TextInput";
// import Textarea from "../../../components/Reusable/TextArea/TextArea";
// import { useForm } from "react-hook-form";

// interface FormData {
//   fullName: string;
//   email: string;
//   mobileNumber: string;
//   message: string;
// }

// const MyProfile = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<FormData>();

//   const onSubmit = (data: FormData) => {
//     console.log("Form Data:", data);
//   };

//   return (
//     <div className="flex flex-col gap-8">
//       <div className="flex items-center justify-start gap-3">
//         <img src={ICONS.ArrowLeft} alt="Profile" className="w-9 h-9" />
//         <h1 className="text-2xl font-semibold text-neutral-90">My Profile</h1>
//       </div>

//       <div>
//         <p className="text-neutral-90 font-semibold">Personal Information</p>
//         <form
//           onSubmit={handleSubmit(onSubmit)}
//           className="bg-white w-full rounded-2xl"
//         >
//           <div className="grid grid-cols-2 gap-5 ">
//             <div className="p-8 flex flex-col gap-8">
//               <TextInput
//                 label="Name"
//                 placeholder="Enter your name"
//                 validation={{
//                   required: "Full Name is required",
//                   minLength: {
//                     value: 3,
//                     message: "Full Name must be at least 3 characters",
//                   },
//                 }}
//                 error={errors.fullName}
//                 {...register("fullName", {
//                   required: "Full Name is required",
//                   minLength: {
//                     value: 3,
//                     message: "Full Name must be at least 3 characters",
//                   },
//                 })}
//               />
//               <TextInput
//                 label="Email ID"
//                 placeholder="Enter your email"
//                 type="email"
//                 validation={{
//                   required: "Email is required",
//                   pattern: {
//                     value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
//                     message: "Enter a valid email address",
//                   },
//                 }}
//                 error={errors.email}
//                 {...register("email", {
//                   required: "Email is required",
//                 })}
//               />
//               <TextInput
//                 label="Mobile Number"
//                 placeholder="eg., +1 234 567 890"
//                 type="tel"
//                 validation={{
//                   required: "Mobile Number is required",
//                   pattern: {
//                     value: /^\+?[1-9]\d{1,14}$/,
//                     message: "Enter a valid mobile number",
//                   },
//                 }}
//                 error={errors.mobileNumber}
//                 {...register("mobileNumber", {
//                   required: "Mobile Number is required",
//                 })}
//               />
//               <Textarea
//                 label="Message"
//                 placeholder="Write message here..."
//                 rows={6}
//                 validation={{
//                   required: "Message is required",
//                   minLength: {
//                     value: 15,
//                     message: "Feedback must be at least 15 characters",
//                   },
//                 }}
//                 error={errors.message}
//                 {...register("message", {
//                   required: "Message is required",
//                 })}
//               />
//             </div>

//             <div>
              
//             </div>
//           </div>

//           <div className="flex justify-end border-t border-neutral-75 p-8">
//             <button
//               type="submit"
//               className="px-8 py-4 bg-primary-10 text-white rounded-xl text-lg font-semibold"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default MyProfile;

import { ICONS } from "../../../assets";
import KycDetails from "../../../components/MyProfilePage/KycDetails/KycDetails";
import PersonalInfo from "../../../components/MyProfilePage/PersonalInfo/PersonalInfo";

const MyProfile = () => {
  

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-start gap-3">
        <img src={ICONS.ArrowLeft} alt="Profile" className="w-9 h-9" />
        <h1 className="text-2xl font-semibold text-neutral-90">My Profile</h1>
      </div>

      <PersonalInfo />
      <KycDetails />
    </div>
  );
};

export default MyProfile;
