interface DashboardHeaderProps {
  pageName: string;
  pageDesc?: string;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  pageName,
  pageDesc,
}) => {
  return (
    <div className="flex flex-col font-Inter text-[#0F172A]">
      <h1 className="text-2xl font-semibold leading-7 tracking-tighter">
        {pageName}
      </h1>
      {pageDesc && (
        <p className="text-base font-normal leading-6 tracking-tight mt-1">
          {pageDesc}
        </p>
      )}
    </div>
  );
};

export default DashboardHeader;
