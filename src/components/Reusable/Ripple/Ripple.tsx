import Ripples from 'react-ripples';
const Ripple = ({ styles, children }) => {
    return (
        <Ripples className={styles} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} during={1200} >
            {children}
        </Ripples>
    );
};

export default Ripple;