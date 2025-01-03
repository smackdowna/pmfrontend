import { TMyCourse } from "./mycourse.types"
import { Link } from "react-router-dom"
import { ICONS } from "../../assets"

const MyCoursesCard : React.FC<TMyCourse> = ({ _id, title, instructor, enrolled,progress, image })  => {
  return (
    <div className="bg-white border border-neutral-45 rounded-[24px] font-Inter w-[270px] h-[410px] relative">
            <img src={image} alt="" className="rounded-t-[24px] w-full h-[150px] object-cover" />
            <div className="rounded-full bg-[rgba(5,21,57,0.65)] backdrop-blur-[7.5px] py-1 px-2 flex items-center gap-[2px] w-fit text-white font-medium text-sm absolute top-4 left-4">
                <img src={ICONS.avatar} alt={""} className="size-8 rounded-full" />
                <h1 className="text-primary-10 font-medium leading-6">{instructor}</h1>
            </div>
            <div className="flex items-center gap-1 p-3 bg-neutral-50 w-full">
                    <img src={ICONS.Calendar} alt="user-icon" className="size-[14px]" />
                    <p className="text-primary-10 text-sm leading-7">Enrolled on {enrolled}</p>
            </div>

            <div className="p-5 flex flex-col gap-4">

                <h1 className="text-primary-10 text-xl leading-7 font-semibold">
                    {title.length > 20 ? `${title.slice(0, 20)}...` : title}
                </h1>

                <div>
                    {progress}%
                    <p className="text-neutral-95 text-sm">Course Progress</p>
                </div>
                <div className="flex gap-2">
                <Link to={`/course/${_id}`} className="bg-neutral-60 border border-neutral-55 py-[10px] px-4 text-primary-10 text-sm leading-5 font-semibold w-full rounded-lg text-center">
                    Check Forum
                </Link>
                
                <Link to={`/my-course/${_id}`} className="bg-secondary-20 flex justify-center items-center gap-2 py-[10px] px-4 text-primary-10 text-sm leading-5 font-semibold w-full rounded-lg text-center">
                    {progress===0 ? "Start" : "Resume"}
                    <img src={ICONS.PlayCircle} alt="play-icon" className="" />
                </Link>
                </div>
                
            </div>
        </div>
  )
}

export default MyCoursesCard
