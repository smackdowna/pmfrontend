import Container from '../../Shared/Container/Container';
import { IMAGES } from '../../../assets';
import Heading1 from '../../Reusable/Heading1/Heading1';
import Paragraph from '../../Reusable/Paragraph/Parahraph';
import Ripple from '../../Reusable/Ripple/Ripple';

const SessionAnnouncement = () => {
    return (
        <div className='bg-white py-[96px] font-Inter'>
            <Container>
                <div className='flex flex-col lg:flex-row gap-8 lg:gap-0 items-center justify-between'>
                    <img src={IMAGES.sessionAnnouncement} alt="session-announcement" className='w-full max-w-[600px]' />
                    <div>
                        <div className='flex flex-col gap-4'>
                            <div className='rounded-3xl bg-neutral-15 px-4 py-[6px] text-primary-10 font-medium leading-6 text-center w-fit'>Stay tuned! Date coming soon!</div>
                            <Heading1 classNames='max-w-[599px]'>
                                Level Up with Our Next Big Session!
                            </Heading1>
                            <Paragraph classNames='max-w-[467px]'>
                                We’ve hosted blockbuster Sunday sessions on topics like content creation, marketing, video editing, and finance. The next one’s in the works! What topic should we cover next? Let us know!
                            </Paragraph>
                        </div>

                       
                        <Ripple styles="rounded-xl w-fit mt-7">
                        <button className="bg-primary-gradient px-5 py-[10px] text-primary-10 text-xl font-semibold leading-7 rounded-[10px] w-fit">
                            Give Feedback
                        </button>
                        </Ripple>
                    </div>
                </div>
            </Container>

        </div>
    );
};

export default SessionAnnouncement;