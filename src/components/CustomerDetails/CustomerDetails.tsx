import Card from "../Reusable/OrderDetailsCard/OrderDetailsCard";
import { Link } from "react-router-dom";
// CustomerDetails Component
interface CustomerDetailsProps {
  fullName: string;
  mobileNumber: string;
  link?: string;
}

const CustomerDetails: React.FC<CustomerDetailsProps> = ({
  fullName,
  mobileNumber,
  link,
}) => (
  <Card>
    <div className="flex items-center justify-between">
      <span className="text-base text-textGray-80 font-semibold leading-6 tracking-tight">
        Customer Details
      </span>
      <Link to={link || ""}>
        <span className="text-blue-10 text-[14px] leading-5 tracking-tight font-medium underline underline-offset-1">
          View full details
        </span>
      </Link>
    </div>
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between text-textGray-80 text-[14px] leading-5 tracking-tight">
        <span>Full Name</span>
        <span>{fullName}</span>
      </div>
      <div className="flex items-center justify-between text-textGray-80 text-[14px] leading-5 tracking-tight">
        <span>Mobile Number</span>
        <span>{mobileNumber}</span>
      </div>
    </div>
  </Card>
);

export default CustomerDetails;
