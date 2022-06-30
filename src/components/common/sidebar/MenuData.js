import {
  BarGraphIcon,
  BasketIcon,
  BookStackIcon,
  GearIcon,
  OrderIcon,
  PowerIcon,
  PriceTagIcon,
  ProfileIcon,
  SmallShopIcon,
} from "../../../icons/SidebarIcons";

export const menu = [
  {
    title: "Dashboard",
    link: "/admin/dashboard",
    icon: <SmallShopIcon size="1.5em" className="stroke-customGreen " />,
  },
  {
    title: "Pos",
    link: "/admin/pos",
    icon: <PriceTagIcon size="1.5em" className="fill-customRed " />,
  },
  {
    title: "Orders",
    link: "/admin/orders",
    icon: <BasketIcon size="1.5em" className="fill-customGreen " />,
  },
  {
    title: "Order Status Screeen",
    link: "/admin/order-status",
    icon: <OrderIcon size="1.5em" className="fill-customYellow " />,
  },
  {
    title: "Expense",
    link: "/admin/expense",
    icon: <BookStackIcon size="1.5em" className="fill-customRed " />,
  },
  {
    title: "Customers",
    link: "/admin/customers",
    icon: <ProfileIcon size="1.5em" className="fill-customPurple " />,
  },
  {
    title: "Services",
    link: "/admin/services",
    icon: <PriceTagIcon size="1.5em" className="fill-customYellow " />,
  },
  {
    title: "Reports",
    link: "/admin/reports",
    icon: <BarGraphIcon size="1.5em" className="fill-customYellow " />,
  },
  {
    title: "Tools",
    link: "/admin/tools",
    icon: <GearIcon size="1.5em" className="fill-customOrange " />,
  },
  {
    title: "Logout",
    link: "/admin/logout",
    icon: <PowerIcon size="1.5em" className="fill-gray-500 " />,
  },
];
