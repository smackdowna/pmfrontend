import React, { useState } from "react";
import { ICONS } from "../../assets";
import Textarea from "../Reusable/TextArea/TextArea";
import TextInput from "../Reusable/TextInput/TextInput";

interface AddVideoProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: {
    title: string;
    description: string;
    videoFile: File | null;
  }) => void;
}

const AddVideo: React.FC<AddVideoProps> = ({ isOpen, onClose, onSubmit }) => {
  const [videoTitle, setVideoTitle] = useState("");
  const [videoDescription, setVideoDescription] = useState("");
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [isVideoAdded, setIsVideoAdded] = useState(false); // Track if a video is already added
  const [uploadProgress, setUploadProgress] = useState(0); // Track upload progress
  const [isUploading, setIsUploading] = useState(false); // Track if video is being uploaded

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setVideoFile(file);
    if (file) {
      setIsUploading(true);
      // Simulating upload progress
      simulateUpload(file);
    }
  };

  const simulateUpload = (file: File) => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10; // Simulating 10% progress at a time
      setUploadProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        setIsUploading(false);
        setIsVideoAdded(true); // Once upload is complete, mark as added
      }
    }, 500); // Update progress every 500ms
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!videoTitle || !videoDescription || !videoFile) {
      alert("All fields are required");
      return;
    }

    // Call the onSubmit function passed from AddCourse
    onSubmit({ title: videoTitle, description: videoDescription, videoFile });
    setIsVideoAdded(true); // Mark the video as added after submission
  };

  const handleDone = () => {
    // Reset the form fields and states
    setVideoTitle("");
    setVideoDescription("");
    setVideoFile(null);
    setIsVideoAdded(false);
    setUploadProgress(0);
    setIsUploading(false);
    onClose(); // Close the modal

    // Call the onSubmit function passed from AddCourse
    onSubmit({ title: videoTitle, description: videoDescription, videoFile });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="flex flex-col p-6 gap-6 bg-white md:w-[673px] w-[90%] rounded-2xl">
        <div className="flex items-center w-full justify-between">
          <span className="text-[#15294B] font-semibold text-[18px] leading-6">
            {isVideoAdded ? "Video Details" : "Add a Video"}
          </span>
        </div>

        {!isVideoAdded ? (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
            <TextInput
              label="Video Title"
              name="videoTitle"
              placeholder="Enter video title"
              value={videoTitle}
              onChange={(e) => setVideoTitle(e.target.value)}
            />
            <Textarea
              label="Description"
              name="videoDescription"
              placeholder="Enter video description"
              value={videoDescription}
              onChange={(e) => setVideoDescription(e.target.value)}
            />
            <div className="flex flex-col gap-4">
              <label htmlFor="courseVideo">Upload a Video</label>
              <div
                className="flex flex-col items-center justify-center w-full p-6 gap-2 border-[1px] border-borderColor-10 rounded-lg cursor-pointer"
                onClick={() => document.getElementById("courseVideo")?.click()}
              >
                <img src={ICONS.addCircle} className="w-6 h-6" alt="" />
                <span className="text-textGray-10 text-[14px] font-Inter leading-5 tracking-tight font-medium">
                  Select a video to Upload
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
                disabled={isUploading || uploadProgress < 100} // Disable button during upload
              >
                Add Video
              </button>
            </div>
          </form>
        ) : (
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-medium">Title: {videoTitle}</h3>
              <p className="text-sm text-gray-500">
                Description: {videoDescription}
              </p>
              {videoFile && (
                <video
                  controls
                  className="w-full rounded-lg"
                  src={URL.createObjectURL(videoFile)}
                >
                  Your browser does not support the video tag.
                </video>
              )}
              <p className="text-sm text-gray-400">
                {videoFile
                  ? `File size: ${(videoFile.size / (1024 * 1024)).toFixed(
                      2
                    )} MB`
                  : "No file uploaded"}
              </p>
            </div>
            <button
              onClick={handleDone}
              className="px-4 py-2 bg-[#051539] text-white border-[1px] border-[#DFE2E6] rounded-lg"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddVideo;
