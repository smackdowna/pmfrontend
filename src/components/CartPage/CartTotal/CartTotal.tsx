import { IMAGES } from "../../../assets";


const CartTotal = () => {
    return (
        <div className=" w-full xl:w-[500px] flex flex-col gap-6 bg-white rounded-2xl border border-neutral-75 p-5">
            {/* Heading */}
            <div className="flex items-center justify-between">
                <h1 className="heading6 text-sm">Item Total</h1>
                <div className="flex items-center gap-[6px]">
                    <p className="text-neutral-110 text-sm leading-5">₹1,299</p>
                    <h1 className="heading6 text-sm">₹7,345</h1>
                </div>
            </div>

            <hr className="border border-neutral-60" />

            <div className="flex items-center justify-between">
                <div>
                    <h1 className="heading6">To Pay </h1>
                    <p className="text-neutral-85 text-[13px] leading-5 mt-[2px]">Incl. of all taxes and charges</p>
                </div>
                <div>
                    <h1 className="heading6">₹7620</h1>
                    <p className="text-neutral-85 text-[13px] leading-5 mt-[2px]">₹8,234</p>
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