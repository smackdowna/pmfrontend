import TextInput from "../Reusable/TextInput/TextInput";
import { ICONS } from "../../assets";
import Textarea from "../Reusable/TextArea/TextArea";

interface RecordPaymentProps {
  isOpen: boolean;
  onClose: () => void;
}

const RecordPayment: React.FC<RecordPaymentProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center 
        ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"} 
        transition-opacity duration-300`}
      aria-hidden={!isOpen}
      aria-modal="true"
      role="dialog"
    >
      <div
        className={`flex flex-col p-6 gap-6 bg-white md:w-[673px] w-[90%] rounded-2xl 
          transform ${isOpen ? "translate-y-0" : "translate-y-full"} 
          transition-transform duration-500`}
      >
        <div className="flex items-center w-full justify-between">
          <span className="text-[#15294B] font-semibold text-[18px] leading-6">
            Record Payment
          </span>
          <button
            onClick={onClose}
            className="w-[25px] h-[25px] rounded-full flex items-center justify-center bg-[#F5F6F7]"
          >
            <img src={ICONS.closeBg} className="w-[9px] h-[9px]" alt="" />
          </button>
        </div>
        <form className="flex flex-col gap-4 w-full">
          <TextInput label="Author Name" name="authorName" placeholder="Name" />
          <TextInput label="Reference #" name="reference" placeholder="#" />
          <Textarea label="Note" name="note" placeholder="Write your notes" />
          <hr className="h-[1px] w-full bg-[#DFE2E6]" />
          <div className="flex items-center gap-[10px]">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-[#091E42] bg-[#FAFBFB] border-[1px] border-[#DFE2E6] rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-[#051539] text-white border-[1px] border-[#DFE2E6] rounded-lg"
            >
              Mark Paid
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RecordPayment;
