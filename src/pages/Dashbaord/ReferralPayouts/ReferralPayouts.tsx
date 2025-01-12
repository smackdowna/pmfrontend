import { ICONS } from "../../../assets";
import TransactionHistory from "../../../components/ReferralPayoutsPage/TransactionHistory";

const ReferralPayouts = () => {
  const handleCopy = () => {
    const referralCode = "PM 4454 8698";
    navigator.clipboard.writeText(referralCode).then(() => {
      alert("Referral code copied to clipboard!");
    });
  };

  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold text-neutral-90">
          Referral & Payouts
        </h1>
        <p className="text-neutral-90">Write something here</p>
        </div>
        <div className="flex justify-between items-center bg-white rounded-lg border border-neutral-75">
          <div className="flex flex-col px-4">
            <p className="text-neutral-10">Referral Code</p>
            <p className="text-primary-10 text-lg font-semibold">
              PM 4454 8698
            </p>
          </div>
          <div
            onClick={handleCopy}
            className="bg-neutral-15 p-4 rounded-r-lg cursor-pointer"
            title="Copy to clipboard"
          >
            <img src={ICONS.Copy} alt="Copy" className="" />
          </div>
        </div>
      </div>
      {/* Rest of the component remains unchanged */}
      <div className="flex flex-row flex-wrap xl:flex-nowrap justify-between items-center gap-6">
        <div className="bg-white w-1/2 rounded-2xl border border-neutral-75 h-[218px] flex flex-col gap-4 justify-between ">
          <div className="flex justify-between items-center p-6 pb-0">
            <div className="flex gap-2">
              <p className="text-neutral-65">My Commission</p>
              <img src={ICONS.InfoCircle} alt="commission" className="" />
            </div>
            <select className=" p-2 rounded-lg bg-neutral-60 ">
              {month.map((month, index) => (
                <option key={index} value={month}>
                  {month}
                </option>
              ))}
            </select>
          </div>
          <p className="text-primary-10 text-5xl font-bold px-6">₹0</p>

          <div className="border-t border-neutral-45">
            <div className="flex justify-start gap-2 py-3 items-center p-6">
              <div className="bg-neutral-80 rounded-[100px] p-3">
                <img src={ICONS.Wallet} />
              </div>
              <p className="text-neutral-10 border-r-2 border-neutral-15 pr-2">
                Approved Payout
              </p>
              <p className="text-primary-10 text-lg font-semibold">₹2,304</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-1/2 gap-5">
          <div className="flex gap-5">
            <div className="flex gap-3 bg-white max-h-[96px] w-full rounded-2xl p-6">
              <div className="flex justify-center items-center h-14 w-14 bg-neutral-80 rounded-[100px] p-3">
                <p className="text-primary-10 font-bold text-4xl">₹</p>
              </div>
              <div>
                <p className="text-neutral-10 ">Total Earnings</p>
                <p className="text-primary-10 text-xl font-semibold">
                  ₹1,00,00,230.98
                </p>
              </div>
            </div>
            <div className="flex gap-3 bg-white max-h-[96px] w-full rounded-2xl p-6">
              <div className="flex justify-center items-center h-14 w-14 bg-neutral-80 rounded-[100px] p-3">
                <img src={ICONS.ShareCircle} alt="share" className="" />
              </div>
              <div>
                <p className="text-neutral-10 ">Total Referrals</p>
                <p className="text-primary-10 text-xl font-semibold">2,000</p>
              </div>
            </div>
          </div>
          <div className="flex gap-3 bg-white max-h-[96px] w-full rounded-2xl p-6">
            <div className="flex justify-center items-center h-14 w-14 bg-neutral-80 rounded-[100px] p-3">
              <img src={ICONS.ClockCircle} alt="share" className="" />
            </div>
            <div>
              <p className="text-neutral-10 ">Total Duration</p>
              <p className="text-primary-10 text-xl font-semibold">2,000</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col ">
      <h1 className="text-lg font-semibold mb-4">Transaction History</h1>
      <TransactionHistory data={[]} headers={[]} showHeader={false} />
      </div>
      
    </div>
  );
};

export default ReferralPayouts;
