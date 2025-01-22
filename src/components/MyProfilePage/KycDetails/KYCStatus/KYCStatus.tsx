
const KYCStatus = ({ kycStatus }: { kycStatus: string }) => {
    const statusCardStyles = kycStatus === "Pending" ?
        "bg-secondary-35 text-secondary-6"
        :
        kycStatus === "Approved" ?
            "bg-secondary-40 text-white"
            :
            "bg-secondary-45 text-secondary-60"
    return (
        <div className="bg-white w-full rounded-2xl p-6">
            <div className="flex justify-between items-center">
                <p className="text-neutral-90 font-semibold">KYC Status</p>
                <div className={`rounded-md p-2 ${statusCardStyles}`}>{kycStatus}</div>
            </div>

        </div>
    );
};

export default KYCStatus;