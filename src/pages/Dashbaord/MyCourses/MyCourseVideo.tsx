import VideoPlayer from "../../../components/MyCoursesPage/VideoPlayer";
import Playlist from "../../../components/MyCoursesPage/PlaylistAccordion";
import { ICONS, IMAGES } from "../../../assets";
import { Link } from "react-router-dom";
import { useState } from "react";

const MyCourseVideo = () => {
  const [currentModule, setCurrentModule] = useState({
    module: "",
    progress: "",
    duration: "",
    videoUrl:
      "",
  });

  return (
    <div>
      <div className="flex w-full justify-between items-center py-3 px-6">
        <Link to={"/"} className="flex items-center gap-2">
          <img
            src={IMAGES.pmGurukulLogo}
            alt="PM-Gurukul"
            className="size-12"
          />
          <h1 className="text-primary-10 font-semibold text-2xl">PM Gurukul</h1>
        </Link>{" "}
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
          changeVideo={(module) => {
            console.log(module);
            setCurrentModule({ ...module, videoUrl: module?.video?.url || "" })
          } }
          currentVideo={currentModule.videoUrl}
        />
      </div>
    </div>
  );
};

export default MyCourseVideo;