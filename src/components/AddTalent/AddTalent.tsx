import React, { FormEvent, useRef, useState } from "react";
import TextInput from "../Reusable/TextInput/TextInput";
import { ICONS } from "../../assets";

interface AddTalentProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddTalent: React.FC<AddTalentProps> = ({ isOpen, onClose }) => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log("Form submitted!");
    console.log("Selected Image:", selectedImage);
    // Add form data handling logic here
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      console.log("Image Selected:", file.name);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div
      className={`fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center 
        ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"} 
        transition-opacity duration-300`}
      aria-hidden={!isOpen}
      aria-modal="true"
      role="dialog"
    >
      <div
        className={`flex flex-col p-6 gap-6 bg-white md:w-[673px] w-[90%] rounded-2xl 
          transform ${isOpen ? "translate-y-0" : "translate-y-full"} 
          transition-transform duration-500`}
      >
        <div className="flex items-center w-full justify-between">
          <span className="text-[#15294B] font-semibold text-[18px] leading-6">
            Add a Talent
          </span>
          <button
            onClick={onClose}
            className="w-[25px] h-[25px] rounded-full flex items-center justify-center bg-[#F5F6F7]"
          >
            <img src={ICONS.closeBg} className="w-[9px] h-[9px]" alt="" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
          <TextInput label="Author Name" name="authorName" placeholder="Name" />
          <div className="flex flex-col gap-4">
            <label htmlFor="profileImage">Profile Image</label>
            <div
              className="flex flex-col items-center justify-center w-full p-6 gap-2 border-[1px] border-borderColor-10 rounded-lg cursor-pointer"
              onClick={triggerFileInput}
            >
              {selectedImage ? (
                <img
                  src={URL.createObjectURL(selectedImage)}
                  className="w-24 h-24 object-cover rounded-full"
                  alt="Selected Profile"
                />
              ) : (
                <>
                  <img
                    src={ICONS.addCircle}
                    className="w-6 h-6"
                    alt="Add Circle Icon"
                  />
                  <span className="text-textGray-10 text-[14px] font-Inter leading-5 tracking-tight font-medium">
                    Select an image to Upload
                  </span>
                </>
              )}
            </div>
            <input
              type="file"
              name="profileImage"
              id="profileImage"
              className="hidden"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleImageChange}
            />
          </div>
          <hr className="h-[1px] w-full bg-[#DFE2E6]" />
          <div className="flex items-center gap-[10px]">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-[#091E42] bg-[#FAFBFB] border-[1px] border-[#DFE2E6] rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-[#051539] text-white border-[1px] border-[#DFE2E6] rounded-lg"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTalent;
