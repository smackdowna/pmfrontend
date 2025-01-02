import { ReactNode } from "react";

const Paragraph = ({children, classNames} : {children:ReactNode, classNames?:string}) => {
    return (
        <p className={`text-neutral-10 leading-6 font-Inter ${classNames}`}>{children}</p>
    );
};

export default Paragraph;