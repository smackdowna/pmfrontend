import { ICONS } from '../../../assets';

const SuccessWithTick = ({message} : {message:string}) => {
    return (
        <div className="flex items-center justify-center gap-1">
            <img src={ICONS.tickMark} alt="tick-mark" className='size-6' />
            <p className="text-secondary-15 rounded-xl text-sm">{message}</p>
        </div>
    );
};

export default SuccessWithTick;