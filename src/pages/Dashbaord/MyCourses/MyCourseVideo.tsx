import VideoPlayer from "../../../components/MyCoursesPage/VideoPlayer";
import PlaylistAccordion from "../../../components/MyCoursesPage/PlaylistAccordion";
import { ICONS, IMAGES } from "../../../assets";
import { Link } from "react-router-dom";

const MyCourseVideo = () => {
  return (
    <div className="">
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

      <div className="flex flex-1 overflow-y-hidden ">
        <VideoPlayer />
        <PlaylistAccordion />
      </div>
    </div>
  );
};

export default MyCourseVideo;
