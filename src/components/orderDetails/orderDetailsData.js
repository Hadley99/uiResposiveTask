import { LikeIcon, ReactIcon, TickIcon } from "../../icons/OrderDetailsIcons";
import { BasketIcon } from "../../icons/SidebarIcons";

export const orderDetailsData = [
  {
    title: "PENDING ORDERS",
    color: "#a7a8af",
    noOfOrders: 202,
    icon: <BasketIcon size="1.3em" className="fill-white " />,
  },
  {
    title: "PROCESSING ORDERS",
    color: "#faad40",
    noOfOrders: 99,
    icon: <ReactIcon size="1.3em" className="fill-white " />,
  },
  {
    title: "READY TO DELIVER",
    color: "#2ecf88",
    noOfOrders: 263,
    icon: <LikeIcon size="1.3em" className="fill-white " />,
  },
  {
    title: "DELIVERED ORDERS",
    color: "#0083ff",
    noOfOrders: 345,
    icon: <TickIcon size="1.3em" className="fill-transparent  stroke-white " />,
  },
];
