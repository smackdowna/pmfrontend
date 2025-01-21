

const Badge = ({ title }: { title: string }) => {
    return (
        <div className="px-4 py-2 bg-gradient-dark-blue text-neutral-15 leading-6 w-fit rounded-3xl capitalize">
            {title}
        </div>
    );
};

export default Badge;