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
      <span className="text-2xl font-semibold leading-7 tracking-tighter">
        {pageName}
      </span>
      {pageDesc && (
        <span className="text-base font-normal leading-6 tracking-tight">
          {pageDesc}
        </span>
      )}
    </div>
  );
};

export default DashboardHeader;
