import { ICONS } from "../../../assets";


const CartItem = () => {
    const paragraphStyle = "text-neutral-85 text-sm leading-5 mt-1";

    return (
        <div className="flex items-center justify-between w-full">
            <div>
                <h1 className="heading6 ">UI UX Decoded Course by Pani Puri</h1>
                <p className={paragraphStyle}>Tech & Development</p>
            </div>
            <div className="flex items-center gap-6">
                <div>
                    <h1 className="heading6 ">₹1,099</h1>
                    <p className={`${paragraphStyle} line-through`}>₹1,299</p>
                </div>
                <img src={ICONS.deleteIcon} alt="delete-icon" className="size-6 cursor-pointer" />
            </div>

        </div>
    );
};

export default CartItem;