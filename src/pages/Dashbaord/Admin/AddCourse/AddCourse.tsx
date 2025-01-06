import { ICONS } from "../../../../assets";
import Textarea from "../../../../components/Reusable/TextArea/TextArea";
import TextInput from "../../../../components/Reusable/TextInput/TextInput";

const AddCourse = () => {
  return (
    <div className="flex flex-col p-6 bg-[#F8FAFC] gap-8 w-full">
      <div className="flex items-center w-full justify-between">
        <div className="flex gap-[10px] items-center">
          <button>
            <img src={ICONS.arrowLeft} className="w-9 h-9 " alt="" />
          </button>
          <span className="text-[#0F172A] font-Inter font-semibold leading-7 tracking-tighter text-2xl">
            Add a course
          </span>
        </div>
        <div className="flex items-center gap-[10px]">
          <button className="px-4 py-2 bg-white border-[1px] border-[#DFE2E6] rounded-lg text-[#091E42] font-Inter text-[14px] font-semibold tracking-tight leading-5">
            Cancel
          </button>
          <button className="px-4 py-2 bg-[#051539] border-[1px] border-[#051539] rounded-lg text-white font-Inter text-[14px] font-semibold tracking-tight leading-5">
            Save
          </button>
        </div>
      </div>
      <div className="flex flex-col w-full p-6 bg-white gap-6 rounded-2xl">
        <div className="flex items-center justify-between w-full">
          <span className="text-[#0F172A] font-Inter text-[20px] font-semibold leading-5 tracking-tight">
            Course Details
          </span>
          <div className="flex items-center gap-1 bg-[#D0F6E9] rounded-[50px] px-3 py-2">
            <span className="text-[15px] font-medium leading-5 text-[#243757]">
              Active
            </span>
            <img src={ICONS.arrowDown} className="w-5 h-5" alt="" />
          </div>
        </div>
        {/* Form for the course Details */}
        <form className="flex flex-col gap-4 w-full">
          <TextInput
            label="Course Title"
            name="courseTitle"
            placeholder="Enter course title"
          />
          <Textarea
            label="Course Description"
            name="courseDescription"
            placeholder="Enter course description"
          />
          <TextInput
            label="Category"
            name="courseCategory"
            placeholder="Select Category"
          />
          <TextInput
            label="Author"
            name="courseAuthor"
            placeholder="Select an Author or create one"
          />
          <TextInput
            label="Price"
            name="coursePrice"
            placeholder="Enter course price"
          />
        </form>
      </div>
      <div className="flex flex-col w-full p-6 bg-white gap-6 rounded-2xl">
        <div className="flex items-center justify-between w-full">
          <span className="text-[#0F172A] font-Inter text-[20px] font-semibold leading-5 tracking-tight">
            Upload Course Content
          </span>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center">
          <img
            src={ICONS.folderUpload}
            className="w-[165px] h-[165px]"
            alt=""
          />
          <span className="font-Inter text-[14px] font-normal leading-5 tracking-tight text-[#A6AEBB]">
            No Videos have been added yet
          </span>
          <button className="rounded-xl border-[1px] border-[#DFE2E6]  font-Inter bg-[#FAFBFB] text-[#091E42] text-[14px] font-medium tracking-tight leading-5 px-4 py-[10px]">
            Add a video
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCourse;
