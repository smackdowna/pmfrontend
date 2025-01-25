import { ReactNode } from 'react';
import Ripples from 'react-ripples';
type TRipple = {
    styles: string;
    children: ReactNode;
}
const Ripple: React.FC<TRipple> = ({ styles, children }) => {
    return (
        <Ripples className={styles} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} during={1200} >
            {children}
        </Ripples>
    );
};

export default Ripple;