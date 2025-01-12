import React from "react";
import { ICONS } from "../../../../assets";
import DashboardHeader from "../../../../components/Reusable/DashboardHeader/DashboardHeader";
import Card from "../../../../components/Reusable/OrderDetailsCard/OrderDetailsCard";
import CustomerDetails from "../../../../components/CustomerDetails/CustomerDetails";
import OrderSummary from "../../../../components/OrderSummaryCard/OrderSummaryCard";

// Default order details
const defaultOrder = {
  courseName: "JavaScript Basics",
  category: "Programming",
  price: 499,
  originalPrice: 999,
  orderId: "ORD123456789",
  orderedOn: "2025-01-01",
  paidOn: "2025-01-02",
  customer: {
    name: "Alice Johnson",
    mobile: "+91 98765 43210",
  },
  itemTotal: 499,
  itemTotalOriginal: 999,
};

// Main Component
const OrderDetails: React.FC = () => {
  const order = defaultOrder;

  // Copy function for orderId
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      alert("Order ID copied to clipboard!");
    });
  };

  return (
    <>
      <DashboardHeader pageName="Order Details" />
      <div className="flex flex-col lg:flex-row justify-between w-full font-Inter gap-8 items-start">
        {/* Left Section */}
        <div className="flex flex-col gap-8 lg:w-2/3 w-full">
          <div className="flex items-center gap-6 justify-between">
            <div className="flex flex-col gap-1">
              <span className="text-base text-textGray-80 font-semibold leading-6 tracking-tight line-clamp-2">
                {order.courseName}
              </span>
              <span className="text-textGray-20 text-[14px] leading-5 tracking-tight">
                {order.category}
              </span>
            </div>
            <div className="flex flex-col gap-1 items-end">
              <span className="text-base text-textGray-80 font-semibold leading-6 tracking-tight">
                ₹{order.price}
              </span>
              <span className="line-through text-[13px] text-textGray-30 leading-5 tracking-tight">
                ₹{order.originalPrice}
              </span>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col w-full lg:w-1/3 gap-4">
          <CustomerDetails
            fullName={order.customer.name}
            mobileNumber={order.customer.mobile}
            link="/customer/details"
          />
          <Card title="Order Details">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between text-textGray-80 text-[14px] leading-5 tracking-tight">
                <span>Order ID</span>
                <span
                  className="flex items-center gap-[6px] cursor-pointer"
                  onClick={() => copyToClipboard(order.orderId)}
                >
                  <img src={ICONS.copy} className="w-5 h-5" alt="Copy Icon" />
                  <span>{order.orderId}</span>
                </span>
              </div>
              <div className="flex items-center justify-between text-textGray-80 text-[14px] leading-5 tracking-tight">
                <span>Ordered on</span>
                <span>{order.orderedOn}</span>
              </div>
              <div className="flex items-center justify-between text-textGray-80 text-[14px] leading-5 tracking-tight">
                <span>Paid on</span>
                <span>{order.paidOn}</span>
              </div>
            </div>
          </Card>
          <Card>
            <div className="flex items-center justify-between">
              <span className="text-base text-textGray-80 font-semibold leading-6 tracking-tight">
                Item Total
              </span>
              <div className="flex items-center gap-[6px]">
                <span className="line-through text-[13px] text-textGray-30 leading-5 tracking-tight">
                  ₹{order.itemTotalOriginal}
                </span>
                <span className="text-base text-textGray-80 font-semibold leading-6 tracking-tight">
                  ₹{order.itemTotal}
                </span>
              </div>
            </div>
            <hr className="bg-neutral-800 w-full h-[1px]" />
            <div className="flex items-center gap-6 justify-between">
              <div className="flex flex-col gap-1">
                <span className="text-base text-textGray-80 font-semibold leading-6 tracking-tight line-clamp-2">
                  Amount Paid
                </span>
                <span className="text-textGray-20 text-[14px] leading-5 tracking-tight">
                  Incl. of all taxes and charges
                </span>
              </div>
              <div className="flex flex-col gap-1 items-end">
                <span className="text-base text-textGray-80 font-semibold leading-6 tracking-tight">
                  ₹7620
                </span>
                <span className="line-through text-[13px] text-textGray-30 leading-5 tracking-tight">
                  ₹8,234
                </span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default OrderDetails;
