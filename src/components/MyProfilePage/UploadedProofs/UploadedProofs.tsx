
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
                    <div className="flex items-center gap-2">
                        <div>
                            <p className="text-neutral-65">Aadhaar Card</p>
                            <img src={addharCardImage} alt="" className="max-h-[170px] w-full mt-1 rounded-xl border border-neutral-65/40" />
                        </div>
                        <div>
                            <p className="text-neutral-65">PAN Card</p>
                            <img src={panCardImage} alt="" className="h-[170px] w-full mt-1 rounded-xl border border-neutral-65/40" />
                        </div>
                    </div>
                    <div>
                        <p className="text-neutral-65">Pass Book Image</p>
                        <img src={passBookImage} alt="" className="h-[300px] w-full mt-1 rounded-xl border border-neutral-65/40 object-cover" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UploadedProofs;