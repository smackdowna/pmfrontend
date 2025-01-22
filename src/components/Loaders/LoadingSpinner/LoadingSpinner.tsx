
const LoadingSpinner = ({ fontSize = "text-lg" }: { fontSize?: string }) => {
    return (
        <div className="flex items-center justify-center gap-3">
            <div className="size-5 animate-[spin_1s_linear_infinite] rounded-full border-2 border-r-white border-neutral-10/70"></div>
            <p className={`text-white rounded-xl ${fontSize}`}>Loading...</p>
        </div>
    );
};

export default LoadingSpinner;