import { ICONS } from "../../assets";
import Textarea from "../Reusable/TextArea/TextArea";

interface ReasonForRejectionProps {
  open: boolean;
  onClose: () => void; // Ensure onClose is a function returning void
}

const ReasonForRejection = ({ open, onClose }: ReasonForRejectionProps) => {
  return (
    <div
      className={`fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center 
    ${open ? "opacity-100 visible" : "opacity-0 invisible"} 
    transition-opacity duration-300`}
      aria-hidden={!open}
      aria-modal="true"
      role="dialog"
    >
      <div
        className={`flex flex-col p-6 gap-6 bg-white md:w-[673px] w-[90%] rounded-2xl 
                  transform ${open ? "translate-y-0" : "translate-y-full"} 
                  transition-transform duration-500`}>
        <div className="flex items-center w-full justify-between">
          <span className="text-[#15294B] font-semibold text-[18px] leading-6">
            Reason for Rejection
          </span>
          <button
            onClick={onClose} // Ensure onClose is passed as a function
            className="w-[25px] h-[25px] rounded-full flex items-center justify-center bg-[#F5F6F7]"
          >
            <img src={ICONS.closeBg} className="w-[9px] h-[9px]" alt="" />
          </button>
        </div>
        <form>
          <Textarea
            label="Reason"
            name="reason"
            placeholder="Given Reason for cancel"
          />
        </form>
        <hr className="h-[1px] w-full bg-[#DFE2E6]" />
        <div className="flex items-center gap-[10px]">
          <button
            type="button"
            onClick={onClose} // Ensure onClose is passed as a function
            className="px-4 py-2 text-[#091E42] bg-[#FAFBFB] border-[1px] border-[#DFE2E6] rounded-lg"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-[#051539] text-white border-[1px] border-[#DFE2E6] rounded-lg"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReasonForRejection;
