
type TUploadedProofs = {
    docName: string;
    docImageFront: string;
    docImageBack: string;
    panCardImage: string;
    passBookImage: string;
}

const UploadedProofs: React.FC<TUploadedProofs> = ({ docName, docImageFront, docImageBack, panCardImage, passBookImage }) => {
    const paragraphStyle = "text-neutral-90 text-center";
    const imageStyle = "w-full mt-1 rounded-xl border border-neutral-65/40";
    return (
        <div>
            <p className="text-neutral-90 font-semibold">Uploaded Proofs</p>
            <div className="bg-white w-full rounded-2xl p-6">
                <div className="flex flex-col w-full gap-5 text-neutral-65">
                    <div className="flex items-center justify-between gap-2">
                        <div>
                            <p>{docName} Front Side</p>
                            {
                                docImageFront ?
                                    <img src={docImageFront} alt="" className={imageStyle} />
                                    :
                                    <p className={paragraphStyle}>No document submitted</p>
                            }
                        </div>
                        <div>
                            <p>{docName} Back Side</p>
                            {
                                docImageBack ?
                                    <img src={docImageBack} alt="" className={imageStyle} />
                                    :
                                    <p className={paragraphStyle}>No document submitted</p>
                            }
                        </div>

                    </div>


                    <div className="flex items-center justify-between gap-2">
                        <div>
                            <p>PAN Card</p>
                            {
                                panCardImage ?
                                    <img src={panCardImage} alt="" className={imageStyle} />
                                    :
                                    <p className={paragraphStyle}>No document submitted</p>
                            }
                        </div>
                        <div>
                            <p>Pass Book Image</p>
                            {
                                passBookImage ?
                                    <img src={passBookImage} alt="" className={imageStyle} />
                                    :
                                    <p className={paragraphStyle}>No document submitted</p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UploadedProofs;