import { useState } from "react";
import { ICONS } from "../../../../../assets";
import AddVideo from "../../../../../components/AddVideo/AddVideo";
import { useParams } from "react-router-dom";
import { useGetSingleCourseByIdQuery } from "../../../../../redux/Features/Course/courseApi";
import { useDeleteVideoMutation } from "../../../../../redux/Features/Admin/adminApi";
import Spinner from "../../../../../components/Loaders/Spinner/Spinner";

const AddCourseVideo = () => {
    const [deleteVideo, {isLoading}] = useDeleteVideoMutation();
    const {id} = useParams();
    const {data} = useGetSingleCourseByIdQuery(id);
    console.log(data?.course?.lectures);
    const [isModalOpen, setModalOpen] = useState(false);
    const [videos, setVideos] = useState<
        { title: string; description: string; videoFile: File | null }[]
    >([]);

    const handleAddVideo = (videoData: {
        title: string;
        description: string;
        videoFile: File | null;
    }) => {
        setVideos((prevVideos) => [...prevVideos, videoData]);
    };

    const handledDeleteVideo = async (lectureId: string) => {
        try {
            const response = await deleteVideo({courseId: id, lectureId}).unwrap();
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <div className="flex flex-col lg:w-[80%] w-full p-6 bg-white gap-6 rounded-2xl mx-auto">
                <div className="flex items-center justify-between w-full">
                    <span className="text-[#0F172A] font-Inter text-[20px] font-semibold leading-5 tracking-tight">
                        Upload Course Content
                    </span>
                    {videos.length > 0 && (
                        <button className="bg-[#FAFBFB] font-Inter text-[14px] font-semibold leading-5 tracking-tight border-[1px] border-[#DFE2E6] rounded-lg px-3 py-[6px]">
                            Add Video
                        </button>
                    )}
                </div>
                <div className="flex flex-col gap-4 items-center justify-center">
                    {data?.course?.lectures?.length === 0 ? (
                        <>
                            <img
                                src={ICONS.folderUpload}
                                className="w-[165px] h-[165px]"
                                alt=""
                            />
                            <span className="font-Inter text-[14px] text-[#A6AEBB]">
                                No Videos have been added yet
                            </span>
                        </>
                    ) : (
                        <ul className="w-full flex flex-col gap-2 max-h-[240px] overflow-y-auto">
                            {data?.course?.lectures?.map((video, index) => (
                                <li
                                    key={index}
                                    className="flex justify-between border-[1px] border-[#EBEDF0] rounded-[6px] p-[10px]"
                                >
                                    <div className="flex items-center gap-2">
                                        <img src={ICONS.mp4} className="w-5 h-5" alt="" />
                                        <span className="text-[#091E42] overflow-ellipsis text-[14px] font-medium leading-5 tracking-tight">
                                            {video?.title}
                                        </span>
                                        <span className="text-[#98A1B0] overflow-ellipsis text-[14px] leading-5 tracking-tight">
                                            {video?.videoDuration}
                                        </span>
                                    </div>
                                    {
                                        isLoading ?
                                        <Spinner/> :
                                        <button
                                        onClick={() =>handledDeleteVideo(video?._id)}
                                    >
                                        <img src={ICONS.closeRed} className="w-5 h-5" alt="" />
                                    </button>
                                    }
                                </li>
                            ))}
                        </ul>
                    )}
                    <button
                        onClick={() => setModalOpen(true)}
                        className="rounded-xl border-[1px] border-[#DFE2E6] px-4 py-[10px]"
                    >
                        Add a video
                    </button>
                </div>
            </div>
            <AddVideo
            courseId={id}
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
                onSubmit={handleAddVideo}
            />
        </div>
    );
};

export default AddCourseVideo;