import { CiPlay1 } from "react-icons/ci";
import { useGetCourseLectureQuery } from "../../redux/Features/Course/courseApi";
import { useParams } from "react-router-dom";

interface Playlist {
  module: string;
  progress: string;
  duration: string;
  videoUrl?: string;
}

interface PlaylistProps {
  changeVideo: (module: Playlist) => void;
  currentVideo: string;
}

const Playlist: React.FC<PlaylistProps> = ({ changeVideo, currentVideo }) => {
  const {id} = useParams();
  const {data} = useGetCourseLectureQuery(id);
  console.log(data);

  return (
    <div className="bg-white py-8 px-4 flex flex-col gap-6 w-1/3 h-[620px]">
      <h1 className="text-2xl font-semibold">Course Playlist</h1>
      <div className="flex flex-col gap-2 w-full max-w-[600px] overflow-y-scroll scroll no-scrollbar">
        {data?.lectures.map((lecture) => (
          <div
            key={lecture?._id}
            className={`bg-white rounded-lg border cursor-pointer ${
              currentVideo === lecture?.video.url
                ? "border-blue-500"
                : "border-gray-200"
            } flex items-center justify-between pr-3`}
            onClick={() => lecture?.video?.url && changeVideo(lecture)}
          >
            <div className="p-4 flex flex-col">
              <h2 className="text-lg font-medium text-gray-900">
                {lecture.title}
              </h2>
              {/* <p className="text-sm text-gray-600">
                {module.progress} | {module.duration}
              </p> */}
            </div>
            <button
              className={`${
                lecture?.video?.url
                  ? "text-blue-500 hover:scale-105"
                  : "text-gray-400"
              }`}
            >
              <CiPlay1 className="text-xl" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Playlist;
