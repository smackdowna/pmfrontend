
type TUploadedProofs = {
    addharCardImage: string;
    panCardImage: string;
    passBookImage: string;
}

const UploadedProofs: React.FC<TUploadedProofs> = ({ addharCardImage, panCardImage, passBookImage }) => {
    return (
        <div>
            <p className="text-neutral-90 font-semibold">Uploaded Proofs</p>
            <div className="bg-white w-full rounded-2xl p-6">
                <div className="flex flex-col w-full gap-5">
                    <div className="flex items-center justify-between gap-2">
                        <div>
                            <p className="text-neutral-65">Aadhaar Card</p>
                            {
                                addharCardImage ?
                                    <img src={addharCardImage} alt="" className="max-h-[170px] w-full mt-1 rounded-xl border border-neutral-65/40" />
                                    :
                                    <p className="text-neutral-90 text-center">No document submitted</p>
                            }
                        </div>
                        <div>
                            <p className="text-neutral-65">PAN Card</p>
                            {
                                panCardImage ?
                                    <img src={panCardImage} alt="" className="max-h-[170px] w-full mt-1 rounded-xl border border-neutral-65/40" />
                                    :
                                    <p className="text-neutral-90 text-center">No document submitted</p>
                            }
                        </div>
                    </div>
                    <div>
                        <p className="text-neutral-65">Pass Book Image</p>
                        {
                            passBookImage ?
                                <img src={passBookImage} alt="" className="max-h-[170px] w-full mt-1 rounded-xl border border-neutral-65/40" />
                                :
                                <p className="text-neutral-90">No document submitted</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UploadedProofs;