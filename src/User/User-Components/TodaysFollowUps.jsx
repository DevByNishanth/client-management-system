import { Calendar1Icon, CalendarCheck, Clock } from 'lucide-react'
import React from 'react'

import {
    Phone,
    MessageCircle,
    Mail,
    CalendarDays,
} from "lucide-react";

const followUps = [
    {
        id: 1,
        clientName: "Arjun Sharma",
        projectName: "E-commerce Website",
        followUpTime: "11:30 AM",
        followUpType: "Call",
        icon: Phone,
    },
    {
        id: 2,
        clientName: "Priya Nair",
        projectName: "CRM Dashboard",
        followUpTime: "02:00 PM",
        followUpType: "WhatsApp",
        icon: MessageCircle,
    },
    {
        id: 3,
        clientName: "Rahul Verma",
        projectName: "Portfolio Website",
        followUpTime: "04:30 PM",
        followUpType: "Mail",
        icon: Mail,
    },
    {
        id: 4,
        clientName: "Sneha Reddy",
        projectName: "Mobile Application",
        followUpTime: "10:00 AM",
        followUpType: "Meeting",
        icon: CalendarDays,
    },
    {
        id: 5,
        clientName: "Karthik Kumar",
        projectName: "Admin Dashboard",
        followUpTime: "03:30 PM",
        followUpType: "Call",
        icon: Phone,
    },
];

const TodaysFollowUps = () => {
    return (
        <>
            <div className="main-container  col-span-4 bg-[#222c4191]/40 border border-[#28395e91]  rounded-2xl">

                <div className="header px-4 py-4 flex items-start gap-2">
                    <CalendarCheck size={16} className="text-white" />
                    <div className="-mt-[7px]">
                        <p className="text-lg font-semibold text-white">Today's follow ups</p>
                        <p className="text-xs text-gray-400">Your scheduled client activities</p>
                    </div>
                </div>
                <div className="card-container px-4 space-y-2 h-[calc(100vh-400px)] overflow-auto custom-scrollbar">
                    {followUps.map((item) => {
                        const Icon = item.icon
                        const followType = item.followUpType.toLowerCase();
                        return <div className="card w-full flex gap-2 p-2 rounded-lg bg-[#1c2438e3] border border-[#151b28]">
                            <div className={`icon-container w-12 h-10 rounded-lg flex items-center justify-center  ${followType == "mail" ? "bg-[#0c387d]" : followType == "call" ? "bg-emerald-800" : followType == "meeting" ? "bg-violet-800" : "bg-cyan-800"} `}>
                                <Icon size={14} className='text-white' />
                            </div>
                            <div className="content-container text-white w-full">
                                <div className="header flex justify-between">
                                    <p className="text-sm">{item.clientName}</p>
                                    <button className={` text-xs ${followType == "mail" ? "text-[#3378e7]" : followType == "call" ? "text-emerald-600" : followType == "meeting" ? "text-violet-600" : "text-cyan-600"}`}>{item.followUpType}</button>
                                </div>
                                <p className="text-gray-400 text-xs">{item.projectName}</p>
                                <p className="flex items-center gap-1 text-xs mt-1 text-gray-400"><span><Clock size={12} /></span>{item.followUpTime}</p>
                            </div>
                        </div>
                    })}
                </div>

            </div>
        </>
    )
}

export default TodaysFollowUps
