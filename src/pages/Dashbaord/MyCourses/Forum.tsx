import React from "react";
import { ICONS } from "../../../assets";

interface ForumProps {
  onClose: () => void;
}

const Forum: React.FC<ForumProps> = ({ onClose }) => {
  return (
    <div
      className="fixed top-0 right-0 h-full w-[550px] bg-white shadow-lg z-50 transform translate-x-0 transition-transform duration-500"
    >
      <div className="flex justify-between items-center p-4 border-b">
        <h1 className="text-xl font-semibold text-primary-10">Forum</h1>
        <button onClick={onClose} className="text-xl text-neutral-60">
          ✕
        </button>
      </div>
      <div className="flex flex-col relative gap-6 bg-neutral-80 p-6 h-[calc(100%-4rem)]">
        {/* Forum content */}
        <div className="flex flex-col gap-4 h-[70vh] overflow-y-scroll">
          <div className="flex justify-start items-end gap-2 max-w-[390px]">
            <img
              src={ICONS.avatar}
              alt="avatar"
              className="size-7 rounded-full"
            />
            <div className="flex flex-col bg-[#ebedf0] rounded-xl p-4 gap-2">
              <p>
                Hi there, welcome! you can find your course activities here...{" "}
              </p>
              <div className="flex gap-2">
                <p className="text-neutral-65">Pani Puri</p>
                <p className="text-neutral-65">30 mins ago</p>
              </div>
            </div>
          </div>
          <div className="flex justify-end ">
            <div className="flex bg-primary-10 rounded-xl p-4">
              <p className="text-white">Meet link please</p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-5 w-[90%] flex justify-between items-center border border-neutral-300 bg-white rounded-3xl ">
          <input
            type="text"
            placeholder="Ask a question..."
            className=" p-2 rounded-3xl "
          />
          <button className="bg-primary-10 w-8 h-8 flex justify-center  items-center rounded-full mx-2">
            <img src={ICONS.ArrowUp} alt="send" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Forum;
