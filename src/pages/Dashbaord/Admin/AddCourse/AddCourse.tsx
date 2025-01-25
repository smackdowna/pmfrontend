import { useEffect, useRef, useState } from "react";
import { ICONS } from "../../../../assets";
import TextInput from "../../../../components/Reusable/TextInput/TextInput";
import { Link, useNavigate } from "react-router-dom";
import JoditEditor from "jodit-react";
import { useCreateCourseMutation } from "../../../../redux/Features/Admin/adminApi";
import UploadInput from "../../../../components/Reusable/UploadInput/UploadInput";
import { useForm } from "react-hook-form";
import LoadingSpinner from "../../../../components/Loaders/LoadingSpinner/LoadingSpinner";

type TCourseFormData = {
  title: string;
  description: string;
  courseOverview : string;
  courseObjective : string;
  category: string;
  basePrice: string;
  discountedPrice: string;
  file: File | null;
  author: string;
  totalDuration: string;
}
const AddCourse = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TCourseFormData>();
  const [createCourse, { isLoading }] = useCreateCourseMutation();
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [contentError, setContentError] = useState("");
  const [fileName, setFileName] = useState<string>("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  // To validate the description text editor
  useEffect(() => {
    setContentError("");
    if (content?.length === 0) {
      setContentError("");
    } else if (content?.length < 1) {
      setContentError("Content is required");
    } else {
      setContentError("");
    }
  }, [content]);

  const handleFileChange = (name: string, file: File | null) => {
    setFileName(file?.name ? file?.name : name);
    setSelectedFile(file);
  };

  const handleCreateCourse = async (data: TCourseFormData) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("courseOverview", data.courseOverview);
    formData.append("courseObjective", content);
    formData.append("category", data.category);
    formData.append("basePrice", data.basePrice);
    formData.append("discountedPrice", data.discountedPrice);
    // formData.append("numOfVideos", data.numOfVideos);
    formData.append("author", data.author);
    formData.append("totalDuration", data.totalDuration);
    if (selectedFile) {
      formData.append("file", selectedFile);
    }

    const response = await createCourse(formData).unwrap();
    if (response?.success) {
      const id = response?.course?._id;
      navigate(`/admin/add-course-video/${id}`);
    }
  };

  return (
    <div className="flex flex-col p-6 bg-[#F8FAFC] gap-8 w-full">
      <div className="flex items-center w-full justify-between">
        <div className="flex gap-[10px] items-center">
          <Link to="/admin/courses">
            <button>
              <img src={ICONS.arrowLeft} className="w-9 h-9" alt="" />
            </button>
          </Link>
          <span className="text-[#0F172A] font-Inter font-semibold leading-7 tracking-tighter text-2xl">
            Add a course
          </span>
        </div>
      </div>
      <div className="flex flex-col lg:w-[80%] w-full p-6 bg-white gap-6 rounded-2xl mx-auto">
        <form onSubmit={handleSubmit(handleCreateCourse)} className="flex flex-col gap-4 w-full">

          <TextInput
            label="Course Title"
            placeholder="Enter course title"
            {...register("title", { required: "Course title is required" })}
            error={errors.title}
          />

          {contentError && (
            <span className="text-warning-10 text-start">{contentError}</span>
          )}
          <TextInput
            label="Category"
            placeholder="Enter course category"
            {...register("category", { required: "Category is required" })}
            error={errors.category}
          />

          <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4">
            <TextInput
              label="Base Price"
              placeholder="Enter base price"
              {...register("basePrice", {
                required: "Base price is required",
                valueAsNumber: true,
              })}
              error={errors.basePrice}
            />
            <TextInput
              label="Discounted Price"
              placeholder="Enter discounted price"
              {...register("discountedPrice", {
                required: "Discounted price is required",
                valueAsNumber: true,
              })}
              error={errors.discountedPrice}
            />
          </div>
          <TextInput
            label="Author"
            placeholder="Enter author name"
            {...register("author", { required: "Author name is required" })}
            error={errors.author}
          />
          <TextInput
            label="Course Duration"
            placeholder="Enter course duration"
            {...register("totalDuration", { required: "Course duration is required" })}
            error={errors.totalDuration}
          />
          <div className="flex flex-col gap-2 font-Inter">
            <label htmlFor="Description" className="text-neutral-65">
              Description
              <span className="text-red-600"> *</span>
            </label>
            <textarea
              rows={3}
              id="Description"
              placeholder="Enter description"
              className={`px-[18px] py-[14px] rounded-lg bg-neutral-70 border focus:outline-none focus:border-primary-10 transition duration-300 ${errors.description ? "border-red-500" : "border-neutral-75"
                }`}
                {...register("description", { required: "Course description is required" })}
            />
            {errors?.description?.message && (
              <span className="text-red-500 text-sm">{String(errors.description.message)}</span>
            )}
          </div>

          <div className="flex flex-col gap-2 font-Inter">
            <label htmlFor="Description" className="text-neutral-65">
              Course Overview
              <span className="text-red-600"> *</span>
            </label>
            <textarea
              rows={3}
              id="Course Overview"
              placeholder="Enter course overview"
              className={`px-[18px] py-[14px] rounded-lg bg-neutral-70 border focus:outline-none focus:border-primary-10 transition duration-300 ${errors.courseOverview ? "border-red-500" : "border-neutral-75"
                }`}
                {...register("courseOverview", { required: "Course course overview is required" })}
            />
            {errors?.courseOverview?.message && (
              <span className="text-red-500 text-sm">{String(errors.courseOverview.message)}</span>
            )}
          </div>
         <div>
         <label htmlFor="Description" className="text-neutral-65">
              Course Objective
              <span className="text-red-600"> *</span>
            </label>
          <JoditEditor
            ref={editor}
            value={content}
            onChange={(newContent) => setContent(newContent)}
          />
         </div>
          <UploadInput
            label="Course Banner"
            name="file"
            accept="image/*"
            fileName={fileName}
            onFileChange={handleFileChange}
            error={errors.file?.message}
          />

          <div className="flex items-center justify-end gap-[10px]">
            <button
              type="button"
              className="px-4 py-2 bg-white border-[1px] border-[#DFE2E6] rounded-lg text-[#091E42]"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-[#051539] border-[#051539] rounded-lg text-white"
            >
              {isLoading ? <LoadingSpinner /> : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCourse;
