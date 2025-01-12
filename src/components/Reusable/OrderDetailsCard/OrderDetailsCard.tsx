// Reusable Card Component
interface CardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, children, className }) => (
  <div
    className={`flex flex-col p-4 bg-white rounded-2xl border border-borderColor-20 gap-5 ${className}`}
  >
    {title && (
      <div className="flex items-center justify-between">
        <span className="text-base text-textGray-80 font-semibold leading-6 tracking-tight">
          {title}
        </span>
      </div>
    )}
    {children}
  </div>
);

export default Card;
