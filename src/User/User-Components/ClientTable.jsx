
import React from "react";
import { ArrowUpRight } from "lucide-react";

const clients = [
    {
        id: 1,
        name: "Acme Solutions",
        email: "contact@acme.com",
        phone: "+91 98765 43210",
        service: "Web Application",
        status: "Active",
    },
    {
        id: 2,
        name: "Pixel Studios",
        email: "hello@pixel.com",
        phone: "+91 98765 12345",
        service: "Website",
        status: "Pending",
    },
    {
        id: 3,
        name: "Nova Technologies",
        email: "info@nova.com",
        phone: "+91 98765 67890",
        service: "AI Agents",
        status: "Active",
    },
    {
        id: 4,
        name: "Bright Media",
        email: "team@bright.com",
        phone: "+91 98765 98765",
        service: "SEO / Digital Marketing",
        status: "Inactive",
    },
];

const ClientTable = () => {


    const avatarColors = [
        "bg-linear-to-r  from-amber-600 to-amber-900"
    ];
    return (
        <div className="w-full overflow-hidden mt-4  ">

            {/* Table Header */}
            <div className="overflow-x-auto">
                <table className="w-full min-w-[850px] text-left">

                    <thead className="bg-[#1d273b]">
                        <tr className="">
                            <th className="px-5 py-4 text-xs font-medium uppercase tracking-wider text-slate-500">
                                Client Name
                            </th>

                            <th className="px-5 py-4 text-xs font-medium uppercase tracking-wider text-slate-500">
                                Email
                            </th>

                            <th className="px-5 py-4 text-xs font-medium uppercase tracking-wider text-slate-500">
                                Phone
                            </th>

                            <th className="px-5 py-4 text-xs font-medium uppercase tracking-wider text-slate-500">
                                Service
                            </th>

                            <th className="px-5 py-4 text-xs font-medium uppercase tracking-wider text-slate-500">
                                Status
                            </th>

                            <th className="px-5 py-4 text-xs font-medium uppercase tracking-wider text-slate-500 text-right">
                                Actions
                            </th>
                        </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody>
                        {clients.map((client) => (
                            <tr
                                key={client.id}
                                className=" transition-colors hover:bg-slate-800/40 "
                            >
                                {/* Client Name */}
                                <td className="px-5 py-4">
                                    <div className="flex items-center gap-2">
                                        <span
                                            className={`${avatarColors[client.id % avatarColors.length]} 
            w-8 h-8 rounded-full flex items-center justify-center 
            text-xs font-semibold text-white`}
                                        >
                                            {client.name.slice(0, 1).toUpperCase()}
                                        </span>

                                        <p className="text-sm font-medium text-slate-200">
                                            {client.name}
                                        </p>
                                    </div>
                                </td>

                                {/* Email */}
                                <td className="px-5 py-4">
                                    <p className="text-sm text-slate-400">
                                        {client.email}
                                    </p>
                                </td>

                                {/* Phone */}
                                <td className="px-5 py-4">
                                    <p className="text-sm text-slate-400">
                                        {client.phone}
                                    </p>
                                </td>

                                {/* Service */}
                                <td className="px-5 py-4">
                                    <p className="text-sm text-slate-300">
                                        {client.service}
                                    </p>
                                </td>

                                {/* Status */}
                                <td className="px-5 py-4">
                                    <span
                                        className={`inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium ${client.status === "Active"
                                            ? "bg-emerald-500/10 text-emerald-400"
                                            : client.status === "Pending"
                                                ? "bg-amber-500/10 text-amber-400"
                                                : "bg-slate-500/10 text-slate-400"
                                            }`}
                                    >
                                        {client.status}
                                    </span>
                                </td>

                                {/* Actions */}
                                <td className="px-5 py-4">
                                    <div className="flex justify-end">
                                        <button
                                            className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-700 text-slate-400 transition-all hover:border-amber-500/40 hover:bg-amber-500/10 hover:text-amber-400"
                                            title="View client"
                                        >
                                            <ArrowUpRight size={15} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ClientTable;
