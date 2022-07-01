import React from "react";

import Brand from "./Brand";
import { menu } from "./MenuData";
import MenuItem from "./MenuItem";

const Sidebar = ({ open, toggleOpen, setOpen }) => {
  return (
    <div
      onMouseEnter={() => setOpen(true)}
      className="bg-white md:fixed md:rounded-2xl md:mt-4 p-2 drop-shadow-xl w-screen h-screen md:w-auto md:h-auto "
    >
      <Brand open={open} toggleOpen={toggleOpen} />
      {menu.map((item, index) => (
        <MenuItem
          toggleOpen={toggleOpen}
          title={item.title}
          open={open}
          key={index}
          icon={item.icon}
          link={item.link}
        />
      ))}
      {/* dashboard */}
    </div>
  );
};

export default Sidebar;
// (
//   <NavLink
//   to="/admin/dashboard"
//   className={({ isActive }) =>
//     isActive
//       ? "bg-primary text-white p-3  group hover:bg-primary  hover:cursor-pointer flex justify-start items-center text-sm rounded-md hover:text-white font-medium"
//       : "p-3 group hover:bg-primary  hover:cursor-pointer flex justify-start items-center text-sm rounded-md hover:text-white font-medium"
//   }
// >
//   <span className={`mr-2`}>
//     {
//       <SmallShopIcon
//         size="1.5em"
//         className="stroke-customYellow group-hover:stroke-white"
//       />
//     }
//   </span>
//   <p>{open && "Dashboard"}</p>
// </NavLink>
// {/* pos */}
// <NavLink
//   to="/admin/pos"
//   className={({ isActive }) =>
//     isActive
//       ? "bg-primary text-white p-3 group hover:bg-primary  hover:cursor-pointer flex justify-start items-center text-sm rounded-md hover:text-white font-medium"
//       : "p-3 group hover:bg-primary  hover:cursor-pointer flex justify-start items-center text-sm rounded-md hover:text-white font-medium"
//   }
// >
//   <span className={`mr-2`}>
//     {
//       <PriceTagIcon
//         size="1.5em"
//         className="fill-customRed group-hover:fill-white"
//       />
//     }
//   </span>
//   <p>{open && "Pos"}</p>
// </NavLink>
// {/* Orders */}
// <NavLink
//   to="/admin/orders"
//   className={({ isActive }) =>
//     isActive
//       ? "bg-primary text-white p-3 group hover:bg-primary  hover:cursor-pointer flex justify-start items-center text-sm rounded-md hover:text-white font-medium"
//       : "p-3 group hover:bg-primary  hover:cursor-pointer flex justify-start items-center text-sm rounded-md hover:text-white font-medium"
//   }
// >
//   <span className={`mr-2`}>
//     {
//       <BasketIcon
//         size="1.5em"
//         className="fill-customGreen group-hover:fill-white"
//       />
//     }
//   </span>
//   <p>{open && "Orders"}</p>
// </NavLink>
// {/* order-status */}
// <NavLink
//   to="/admin/order-status"
//   className={({ isActive }) =>
//     isActive
//       ? "bg-primary text-white p-3 group hover:bg-primary  hover:cursor-pointer flex justify-start items-center text-sm rounded-md hover:text-white font-medium"
//       : "p-3 group hover:bg-primary  hover:cursor-pointer flex justify-start items-center text-sm rounded-md hover:text-white font-medium"
//   }
// >
//   <span className={`mr-2`}>
//     {
//       <OrderIcon
//         size="1.5em"
//         className="fill-customYellow group-hover:fill-white"
//       />
//     }
//   </span>
//   <p>{open && "Order Status Screeen"}</p>
// </NavLink>
// {/* Expense */}
// <NavLink
//   to="/admin/expense"
//   className={({ isActive }) =>
//     isActive
//       ? "bg-primary text-white p-3 group hover:bg-primary  hover:cursor-pointer flex justify-start items-center text-sm rounded-md hover:text-white font-medium"
//       : "p-3 group hover:bg-primary  hover:cursor-pointer flex justify-start items-center text-sm rounded-md hover:text-white font-medium"
//   }
// >
//   <span className={`mr-2`}>
//     {
//       <BookStackIcon
//         size="1.5em"
//         className="fill-customRed group-hover:fill-white"
//       />
//     }
//   </span>
//   <p>{open && "Expense"}</p>
// </NavLink>
// {/* Customers */}
// <NavLink
//   to="/admin/customers"
//   className={({ isActive }) =>
//     isActive
//       ? "bg-primary text-white p-3 group hover:bg-primary  hover:cursor-pointer flex justify-start items-center text-sm rounded-md hover:text-white font-medium"
//       : "p-3 group hover:bg-primary  hover:cursor-pointer flex justify-start items-center text-sm rounded-md hover:text-white font-medium"
//   }
// >
//   <span className={`mr-2`}>
//     {
//       <ProfileIcon
//         size="1.5em"
//         className="fill-customPurple group-hover:fill-white"
//       />
//     }
//   </span>
//   <p>{open && "Customers"}</p>
// </NavLink>
// {/* Services */}
// <NavLink
//   to="/admin/services"
//   className={({ isActive }) =>
//     isActive
//       ? "bg-primary text-white p-3 group hover:bg-primary  hover:cursor-pointer flex justify-start items-center text-sm rounded-md hover:text-white font-medium"
//       : "p-3 group hover:bg-primary  hover:cursor-pointer flex justify-start items-center text-sm rounded-md hover:text-white font-medium"
//   }
// >
//   <span className={`mr-2`}>
//     {
//       <PriceTagIcon
//         size="1.5em"
//         className="fill-primary group-hover:fill-white"
//       />
//     }
//   </span>
//   <p>{open && "Services"}</p>
// </NavLink>
// {/* Reports */}
// <NavLink
//   to="/admin/reports"
//   className={({ isActive }) =>
//     isActive
//       ? "bg-primary text-white p-3 group hover:bg-primary  hover:cursor-pointer flex justify-start items-center text-sm rounded-md hover:text-white font-medium"
//       : "p-3 group hover:bg-primary  hover:cursor-pointer flex justify-start items-center text-sm rounded-md hover:text-white font-medium"
//   }
// >
//   <span className={`mr-2`}>
//     {
//       <BarGraphIcon
//         size="1.5em"
//         className="fill-customYellow group-hover:fill-white"
//       />
//     }
//   </span>
//   <p>{open && "Reports"}</p>
// </NavLink>
// {/* Tools */}
// <NavLink
//   to="/admin/tools"
//   className={({ isActive }) =>
//     isActive
//       ? "bg-primary text-white p-3 group hover:bg-primary  hover:cursor-pointer flex justify-start items-center text-sm rounded-md hover:text-white font-medium"
//       : "p-3 group hover:bg-primary  hover:cursor-pointer flex justify-start items-center text-sm rounded-md hover:text-white font-medium"
//   }
// >
//   <span className={`mr-2`}>
//     {
//       <GearIcon
//         size="1.5em"
//         className="fill-customOrange group-hover:fill-white"
//       />
//     }
//   </span>
//   <p>{open && "Tools"}</p>
// </NavLink>
// {/* Logout */}
// <NavLink
//   to="/admin/logout"
//   className={({ isActive }) =>
//     isActive
//       ? "bg-primary text-white p-3 group hover:bg-primary  hover:cursor-pointer flex justify-start items-center text-sm rounded-md hover:text-white font-medium"
//       : "p-3 group hover:bg-primary  hover:cursor-pointer flex justify-start items-center text-sm rounded-md hover:text-white font-medium"
//   }
// >
//   <span className={`mr-2`}>
//     {
//       <PowerIcon
//         size="1.5em"
//         className="fill-gray-500 group-hover:fill-white"
//       />
//     }
//   </span>
//   <p>{open && "Logout"}</p>
// </NavLink>
// )
