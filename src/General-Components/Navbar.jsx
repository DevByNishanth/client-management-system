import { Bell, Search } from "lucide-react";
import user from "../assets/user.jpg";

export const Navbar = () => {
  return (
    <>
      <div className="main-container flex justify-between items-center">
        <div className="searchbar bg-[#222c4191]/70 border border-[#141d3291] w-[55%] rounded-full flex items-center gap-2 py-3 px-4">
          <Search size={20} className="text-gray-200" />
          <input
            placeholder="Search clients, deals..."
            className="text-gray-300 w-full outline-none "
          />
        </div>

        <div className="icons-container flex items-center gap-3">
          <div className="bell-icon-container relative">
            <Bell className="text-gray-200" />
            <div className="notification-indicator w-2 h-2 absolute top-0 right-0 bg-amber-500 rounded-full"></div>
          </div>
          <img src={user} className="w-9 h-9 rounded-full object-cover" />
        </div>
      </div>
    </>
  );
};




