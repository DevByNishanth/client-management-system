import { NavLink } from "react-router-dom";
import user from "../assets/user.jpg";
import {
  LayoutDashboard,
  Users,
  BriefcaseBusiness,
  CalendarDays,
  ChevronDown,
} from "lucide-react";

import logo from "../assets/logo1.png";

const userNavLinks = [
  {
    icon: LayoutDashboard,
    label: "Dashboard",
    link: "/user",
  },
  {
    icon: Users,
    label: "Clients",
    link: "/user/clients",
  },
  {
    icon: BriefcaseBusiness,
    label: "Projects",
    link: "/user/projects",
  },
  {
    icon: CalendarDays,
    label: "Calendar",
    link: "/user/calendar",
  },
];

export const Sidebar = () => {
  return (
    <div className="sidebar relative w-[20%] sidebar bg-[#222c4191]/40 border border-[#28395e91]  rounded-xl h-full">
      {/* Logo */}
      <div className="logo-container flex items-center mt-2 gap-2 p-4">
        <img className="w-10 h-10 object-cover" src={logo} alt="BDEFlow Logo" />

        <h1 className="text-amber-500 font-semibold text-lg">
          BDE<span className="text-gray-100">FLOW</span>
        </h1>
      </div>

      {/* Navigation Links */}
      <div className="links-container flex flex-col gap-2 p-4  w-full">
        {userNavLinks.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.link}
              to={item.link}
              end={item.link === "/user"}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200
                ${
                  isActive
                    ? "bg-linear-to-r from-amber-600 via-amber-700 to-amber-800 text-[#ffffff] shadow-md shadow-amber-500/10"
                    : "text-gray-200 hover:bg-white/5 hover:text-gray-100"
                }`
              }
            >
              <Icon size={19} strokeWidth={2} />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </div>

      {/* profile card  */}
      <div className="profile-card flex text-white   border-[#28395e91]/50 bg-linear-to-r from-transparent via-0% to-amber-500/10 items-center gap-3 absolute bottom-0 rounded-b-xl py-2 px-4  w-full">
        <img src={user} className="w-12 h-12 rounded-full object-cover" />
        <div className="content">
          <p>Nishanth</p>
          <p className="text-gray-300 text-xs flex items-center gap-1">
            BDE Team{" "}
            <span>
              <ChevronDown size={12} />
            </span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
