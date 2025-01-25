import { IMAGES } from "../../../assets";
import { TCartData } from "../../../types/cartData.types";

const CartTotal = ({cartData} : {cartData:TCartData[]}) => {
const discountedPriceTotal = cartData && cartData?.reduce((acc, currVal) => acc + currVal.discountedPrice, 0);
const gst = discountedPriceTotal * 18/100;

    return (
        <div className=" w-full xl:w-[500px] flex flex-col gap-6 bg-white rounded-2xl border border-neutral-75 p-5">
            {/* Heading */}
            <div className="flex items-center justify-between">
                <h1 className="heading6 text-sm">Item Total</h1>
                <div className="flex items-center gap-[6px]">
                    <h1 className="heading6 text-sm">₹ {discountedPriceTotal}</h1>
                </div>
            </div>
            <div className="flex items-center justify-between">
                <h1 className="heading6 text-sm">GST</h1>
                <div className="flex items-center gap-[6px]">
                    <h1 className="heading6 text-sm">₹ {gst}</h1>
                </div>
            </div>

            <hr className="border border-neutral-60" />

            <div className="flex items-center justify-between">
                <div>
                    <h1 className="heading6">To Pay </h1>
                </div>
                <div>
                    <h1 className="heading6">₹ {discountedPriceTotal + gst}</h1>
                </div>
            </div>

            <div className="flex flex-col gap-4">
                <button className="bg-primary-gradient-light px-5 py-[10px] text-primary-10 font-semibold leading-6 rounded-[10px] shadow-primary-shadow w-full">Proceed to Payment</button>

                <div className="flex items-center justify-center gap-4">
                    <img src={IMAGES.securePayment} alt="secure-payment" className="" />
                    <img src={IMAGES.razorpay} alt="razorpay" className="" />
                    <img src={IMAGES.secureSSL} alt="secure-payment" className="" />
                </div>
            </div>
        </div>
    );
};

export default CartTotal;