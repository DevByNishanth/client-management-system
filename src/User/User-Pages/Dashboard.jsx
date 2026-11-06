import React, { useState } from "react";
import { Sidebar } from "../../General-Components/Sidebar";
import { Navbar } from "../../General-Components/Navbar";
import LeadsChart from "../User-Components/LeadsChart";
import {
  ArrowBigRight,
  ArrowUp,
  MoveUpRight,
  Plus,
  UserRoundPlus,
} from "lucide-react";
import TodaysFollowUps from "../User-Components/TodaysFollowUps";
import AddClientForm from "../User-Components/AddClientForm";
import ClientTable from "../User-Components/ClientTable";
import Statcard from "../User-Components/Statcard";

export const Dashboard = () => {
  console.log("")

  // states 
  const [isAddClientFormOpen, setIsAddClientFormOpen] = useState(false)

  return (
    <>
      <div className="main-container h-[94.1vh]  flex gap-5">
        <Sidebar />

        <div className="main-content-container w-full">
          <Navbar />


          {/* content */}
          <div className="main-content-container mt-4 h-[calc(100vh-105px)] hide-scrollbar overflow-auto  ">
            <header className="flex justify-between">
              <div>
                <p className="font-semibold text-gray-100 text-xl">
                  Welcome back, Nishanth!{" "}
                  <span className="text-2xl">👋</span>{" "}
                </p>
                <p className=" text-gray-400 text-sm mt-1">
                  Achieve more. Close more deals.
                </p>
              </div>
              <button onClick={() => setIsAddClientFormOpen(true)} className="bg-linear-to-r from-amber-600 via-amber-700 to-amber-800 text-md font-medium text-white px-5 flex items-center gap-2 h-10 rounded cursor-pointer ">
                <UserRoundPlus size={15} />  Add Client
              </button>
            </header>

            <Statcard />


            {/* Chart and Follow-ups */}
            <div className="mt-5 grid grid-cols-12 gap-4 items-stretch">

              {/* Sales Chart */}
              <div className="col-span-12 xl:col-span-8 min-w-0 h-[400px]">
                <LeadsChart />
              </div>

              {/* Today's Follow-ups */}
              <div className="col-span-12 xl:col-span-4 min-w-0 h-[400px]">
                <TodaysFollowUps />
              </div>

            </div>

            {/* Client Table */}
            <div className="mt-5 min-w-0">
              <ClientTable />
            </div>
          </div>
        </div>
      </div>


      {isAddClientFormOpen && <AddClientForm setIsAddClientFormOpen={setIsAddClientFormOpen} />}
    </>
  );
};
