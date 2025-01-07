import { useState } from "react";
import { ICONS } from "../../assets";
const PlaylistAccordion = () => {
  const [isAccordionOpen, setIsAccordionOpen] = useState<number | null>(null);

  const playlists = [
    {
      module: "Module 1. Introduction to Android Studio.",
      progress: "0 of 3",
      duration: "6 min",
      lessons: [
        { title: "Introduction to Android", duration: "2 min" },
        { title: "Introduction to Android Studio", duration: "2 min" },
      ],
    },
    {
      module: "Module 2. Introduction to Android Studio.",
      progress: "0 of 3",
      duration: "6 min",
      lessons: [
        { title: "Lesson 1", duration: "2 min" },
        { title: "Lesson 2", duration: "2 min" },
      ],
    },
    {
        module: "Module 1. Introduction to Android Studio.",
        progress: "0 of 3",
        duration: "6 min",
        lessons: [
          { title: "Introduction to Android", duration: "2 min" },
          { title: "Introduction to Android Studio", duration: "2 min" },
        ],
      },
      {
        module: "Module 1. Introduction to Android Studio.",
        progress: "0 of 3",
        duration: "6 min",
        lessons: [
          { title: "Introduction to Android", duration: "2 min" },
          { title: "Introduction to Android Studio", duration: "2 min" },
        ],
      },
      {
        module: "Module 1. Introduction to Android Studio.",
        progress: "0 of 3",
        duration: "6 min",
        lessons: [
          { title: "Introduction to Android", duration: "2 min" },
          { title: "Introduction to Android Studio", duration: "2 min" },
        ],
      },
      {
        module: "Module 1. Introduction to Android Studio.",
        progress: "0 of 3",
        duration: "6 min",
        lessons: [
          { title: "Introduction to Android", duration: "2 min" },
          { title: "Introduction to Android Studio", duration: "2 min" },
        ],
      },
      {
        module: "Module 1. Introduction to Android Studio.",
        progress: "0 of 3",
        duration: "6 min",
        lessons: [
          { title: "Introduction to Android", duration: "2 min" },
          { title: "Introduction to Android Studio", duration: "2 min" },
        ],
      },
    
  ];

  const handleAccordionClick = (index: number) => {
    setIsAccordionOpen((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="bg-white py-8 px-4 flex flex-col gap-6 w-1/3 h-[620px] ">
      <h1 className="text-2xl font-semibold ">Course Playlist</h1>
      <div className="flex flex-col gap-2 w-full max-w-[600px]  overflow-y-scroll ">
        {playlists.map((module, index) => (
          <div
            key={index}
            className="bg-white rounded-lg border border-neutral-55"
          >
            
            <div
              className="p-4 flex items-center justify-between cursor-pointer"
              onClick={() => handleAccordionClick(index)}
            >
              <div>
                <h2 className="text-lg font-Inter text-primary-10">{module.module}</h2>
                <p className="text-sm text-neutral-10">{`${module.progress} | ${module.duration}`}</p>
              </div>
              <img
                src={ICONS.downArrow} 
                alt="arrow"
                className={`transition-transform duration-300 ${
                  isAccordionOpen === index ? "rotate-180" : ""
                }`}
              />
            </div>

            
            <div
              className={`overflow-hidden transition-all duration-300  ${
                isAccordionOpen === index ? "max-h-screen border-t-neutral-55 border-t  " : "max-h-0"
              }`}
            >
              <div className="p-3 flex flex-col gap-4">
                {module.lessons.map((lesson, lessonIndex) => (
                  <div
                    key={lessonIndex}
                    className="flex justify-between items-center text-primary-10"
                  >
                    <span>{lesson.title}</span>
                    
                    <div className="flex gap-1 items-center justify-center">
                        <img src={ICONS.Play} alt="play" />
                        <span className="text-primary-10">{lesson.duration}</span></div>
                    
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlaylistAccordion;
