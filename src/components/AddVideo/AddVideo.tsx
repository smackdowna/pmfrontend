import React, { useState } from "react";
import { ICONS } from "../../assets";
import TextInput from "../Reusable/TextInput/TextInput";
import { useForm } from "react-hook-form";
import { useAddVideoMutation } from "../../redux/Features/Admin/adminApi";
import { toast } from "sonner";
import LoadingSpinner from "../Loaders/LoadingSpinner/LoadingSpinner";

interface AddVideoProps {
  isOpen: boolean;
  courseId : string;
  onClose: () => void;
  onSubmit: (data: {
    title: string;
    description: string;
    videoFile: File | null;
  }) => void;
}

const AddVideo: React.FC<AddVideoProps> = ({ isOpen, onClose, onSubmit, courseId }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [addVideo, { isLoading }] = useAddVideoMutation();
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setVideoFile(file);
    if (file) {
      setIsUploading(true);
      simulateUpload(file);
    }
  };

  const simulateUpload = (file: File) => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setUploadProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        setIsUploading(false);
      }
    }, 500);
  };

  const handleAddVideo = async (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("videoDuration", data.videoDuration);
    if (videoFile) {
      formData.append("file", videoFile);
    }

    const response = await addVideo({formData, courseId}).unwrap();
    if (response?.success) {
      toast.success("Video added successfully");
      onClose();
    }

  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="flex flex-col p-6 gap-6 bg-white md:w-[673px] w-[90%] rounded-2xl h-[550px] overflow-y-auto">
        <div className="flex items-center w-full justify-between">
          <span className="text-[#15294B] font-semibold text-[18px] leading-6">
            Add a Video
          </span>
        </div>
        <form onSubmit={handleSubmit(handleAddVideo)} className="flex flex-col gap-4 w-full">
          <TextInput
            label="Video Title"
            placeholder="Enter video title"
            {...register("title", { required: "Title is required" })}
            error={errors.title}
          />
          <TextInput
            label="Video Duration"
            placeholder="Ex-5min"
            {...register("videoDuration", { required: "Video duration is required" })}
            error={errors.videoDuration}
          />
          <TextInput
            label="Description"
            placeholder="Enter description"
            {...register("description", { required: "Description is required" })}
            error={errors.description}
          />
          <div className="flex flex-col gap-4">
            <label htmlFor="courseVideo">Upload a Video</label>
            <div
              className={`flex flex-col items-center justify-center w-full p-6 gap-2 border-[1px] border-borderColor-10 rounded-lg cursor-pointer`}
              onClick={() => document.getElementById("courseVideo")?.click()} // Trigger file input on div click
            >
              <img src={ICONS.addCircle} className="w-6 h-6" alt="" />
              <span className="text-textGray-10 text-[14px] font-Inter leading-5 tracking-tight font-medium">
                {videoFile ? "Change video" : "Select a video to Upload"}
              </span>
            </div>
            <input
              type="file"
              name="courseVideo"
              id="courseVideo"
              className="hidden"
              accept="video/*"
              onChange={handleFileChange}
            />
          </div>

          {isUploading && (
            <div className="mt-4">
              <p>Uploading: {uploadProgress}%</p>
              <div className="w-full bg-gray-300 rounded-full">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: `${uploadProgress}%` }}
                ></div>
              </div>
            </div>
          )}
          <div className="flex items-center justify-end gap-[10px]">
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
              {isLoading ? <LoadingSpinner /> : "Add Video"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddVideo;
