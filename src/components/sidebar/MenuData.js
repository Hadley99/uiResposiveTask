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
} from "../../icons/SidebarIcons";

export const menu = [
  {
    title: "Dashboard",
    icon: (
      <SmallShopIcon
        size="1.5em"
        className="stroke-primary group-hover:stroke-white"
      />
    ),
  },
  {
    title: "Pos",
    icon: (
      <PriceTagIcon
        size="1.5em"
        className="fill-customRed group-hover:fill-white"
      />
    ),
  },
  {
    title: "Orders",
    icon: (
      <BasketIcon
        size="1.5em"
        className="fill-customGreen group-hover:fill-white"
      />
    ),
  },
  {
    title: "Order Status Screeen",
    icon: (
      <OrderIcon
        size="1.5em"
        className="fill-customYellow group-hover:fill-white"
      />
    ),
  },
  {
    title: "Expense",
    icon: (
      <BookStackIcon
        size="1.5em"
        className="fill-customRed group-hover:fill-white"
      />
    ),
  },
  {
    title: "Customers",
    icon: (
      <ProfileIcon
        size="1.5em"
        className="fill-customPurple group-hover:fill-white"
      />
    ),
  },
  {
    title: "Services",
    icon: (
      <PriceTagIcon
        size="1.5em"
        className="fill-primary group-hover:fill-white"
      />
    ),
  },
  {
    title: "Reports",
    icon: (
      <BarGraphIcon
        size="1.5em"
        className="fill-customYellow group-hover:fill-white"
      />
    ),
  },
  {
    title: "Tools",
    icon: (
      <GearIcon
        size="1.5em"
        className="fill-customOrange group-hover:fill-white"
      />
    ),
  },
  {
    title: "Logout",
    icon: (
      <PowerIcon
        size="1.5em"
        className="fill-gray-500 group-hover:fill-white"
      />
    ),
  },
];
