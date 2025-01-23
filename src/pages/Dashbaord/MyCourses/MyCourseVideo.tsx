import VideoPlayer from "../../../components/MyCoursesPage/VideoPlayer";
import Playlist from "../../../components/MyCoursesPage/PlaylistAccordion";
import { ICONS, IMAGES } from "../../../assets";
import { Link } from "react-router-dom";
import { useState } from "react";

const MyCourseVideo = () => {
  const [currentModule, setCurrentModule] = useState({
    module: "Module 3: Advanced Techniques",
    progress: "0 of 3",
    duration: "6 min",
    videoUrl:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  });

  return (
    <div>
      <div className="flex w-full justify-between items-center py-3 px-6">
        <img src={IMAGES.pmGurukulLogo} alt="pmgurukul" className="size-9" />
        <div className="bg-white flex justify-end items-center">
          <ul className="flex gap-5">
            <li>
              <Link to="/dashboard">
                <img src={ICONS.Bell} />
              </Link>
            </li>
            <li>
              <Link to="/dashboard">
                <img src={ICONS.UserCircle} />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-1 overflow-y-hidden">
        <VideoPlayer moduleData={currentModule} />
        <Playlist
          changeVideo={(module) =>
            setCurrentModule({ ...module, videoUrl: module.videoUrl || "" })
          }
          currentVideo={currentModule.videoUrl}
        />
      </div>
    </div>
  );
};

export default MyCourseVideo;
