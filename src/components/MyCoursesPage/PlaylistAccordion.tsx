import { CiPlay1 } from "react-icons/ci";

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
  const playlists: Playlist[] = [
    {
      module: "Module 1: Introduction to Android Studio",
      progress: "1 of 3",
      duration: "6 min",
      videoUrl:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    },
    {
      module: "Module 2: Intermediate Topics",
      progress: "2 of 3",
      duration: "6 min",
      videoUrl:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    },
    {
      module: "Module 3: Advanced Techniques",
      progress: "3 of 3",
      duration: "6 min",
      videoUrl:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    },
  ];

  return (
    <div className="bg-white py-8 px-4 flex flex-col gap-6 w-1/3 h-[620px]">
      <h1 className="text-2xl font-semibold">Course Playlist</h1>
      <div className="flex flex-col gap-2 w-full max-w-[600px] overflow-y-scroll scroll no-scrollbar">
        {playlists.map((module, index) => (
          <div
            key={index}
            className={`bg-white rounded-lg border ${
              currentVideo === module.videoUrl
                ? "border-blue-500"
                : "border-gray-200"
            } flex items-center justify-between pr-3`}
          >
            <div className="p-4 flex flex-col">
              <h2 className="text-lg font-medium text-gray-900">
                {module.module}
              </h2>
              <p className="text-sm text-gray-600">
                {module.progress} | {module.duration}
              </p>
            </div>
            <button
              onClick={() => module.videoUrl && changeVideo(module)}
              className={`${
                module.videoUrl
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
