import Card from "../Reusable/OrderDetailsCard/OrderDetailsCard";
import { ICONS } from "../../assets";

// OrderSummary Component
interface OrderSummaryProps {
  orderId: string;
  orderedOn: string;
  paidOn: string;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({
  orderId,
  orderedOn,
  paidOn,
}) => (
  <Card title="Order Details">
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between text-textGray-80 text-[14px] leading-5 tracking-tight">
        <span>Order Id</span>
        <span className="flex items-center gap-[6px]">
          <img src={ICONS.copy} className="w-5 h-5" alt="Copy Icon" />
          <span>{orderId}</span>
        </span>
      </div>
      <div className="flex items-center justify-between text-textGray-80 text-[14px] leading-5 tracking-tight">
        <span>Ordered on</span>
        <span>{orderedOn}</span>
      </div>
      <div className="flex items-center justify-between text-textGray-80 text-[14px] leading-5 tracking-tight">
        <span>Paid on</span>
        <span>{paidOn}</span>
      </div>
    </div>
  </Card>
);

export default OrderSummary;
