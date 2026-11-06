import { Building, Mail, Phone, User, BriefcaseBusiness, User2, UserCheck, X, ChevronDown, Check, NotepadText } from "lucide-react"
import { useState, useRef, useEffect } from "react";
import CustomDropdown from "../../General-Components/CustomDropdown";

const options = [
    "Website",
    "Web Application",
    "Custom Software",
    "App Development",
    "AI Agents",
    "SEO/Digital Marketing",
    "Social Media Handling",
];



const AddClientForm = ({ setIsAddClientFormOpen }) => {

    const [service, setService] = useState("")








    return (
        <>
            <div className="tint fixed inset-0 z-10 bg-black/80 backdrop-blur-[4px]"></div>
            <div className="form-container w-[40%] fixed z-20 top-[50%] right-12 translate-y-[-50%] rounded-lg bg-[#2b303a9a]  ">
                <div className="header border-b border-gray-700 flex gap-2 justify-between px-4 py-5">
                    <div className="main-container flex gap-2">
                        <span className="text-white"><UserCheck /></span>
                        <div className="c
                        ontainer-1 -mt-1">
                            <p className="text-white font-semibold text-lg flex items-center gap-3"> Add New Client</p>
                            <p className="text-gray-400 text-xs ">Lorem ipsum dolor sit amet consectetur adipisicing.
                            </p>
                        </div>
                    </div>
                    <X onClick={() => setIsAddClientFormOpen(false)} className="text-gray-300 cursor-pointer" size={32} />
                </div>


                <div className="input-container input-container mt-3 px-4 py-4">
                    {/* name and company name */}
                    <div className=" grid grid-cols-2 gap-4">
                        <div className="name-container ">
                            <div className="lable flex items-center gap-1 text-xs text-gray-300">
                                <User size={13} />
                                <p>Client name <span>(required)</span> </p>
                            </div>
                            <input className="border-b mt-[10px] border-gray-300 outline-none focus:border-amber-700 px-2 bg-transparent w-full text-white " />
                        </div>
                        <div className="comopany-container ">
                            <div className="lable flex items-center gap-1 text-xs text-gray-300">
                                <Building size={13} />
                                <p>Company name</p>
                            </div>
                            <input className="border-b mt-[10px] border-gray-300 outline-none focus:border-amber-700 px-2 bg-transparent w-full text-white " />
                        </div>
                    </div>

                    {/* email  */}
                    <div className="email-container mt-5 ">
                        <div className="lable flex items-center gap-1 text-xs text-gray-300">
                            <Mail size={13} />
                            <p>Email</p>
                        </div>
                        <input className="border-b mt-[10px] border-gray-300 outline-none focus:border-amber-700 px-2 bg-transparent w-full text-white " />
                    </div>

                    {/* Phone */}
                    <div className="email-container mt-5 ">
                        <div className="lable flex items-center gap-1 text-xs text-gray-300">
                            <Phone size={13} />
                            <p>Phone</p>
                        </div>
                        <input className="border-b mt-[10px] border-gray-300 outline-none focus:border-orange-500 px-2 bg-transparent w-full text-white " />
                    </div>

                    {/* Interested Service */}
                    <div className="service-container mt-5">

                        <div className="label flex items-center gap-1 text-xs text-gray-300">
                            <BriefcaseBusiness size={13} />
                            <p>Interested Service</p>
                        </div>

                        <div className="mt-[10px]">
                            <CustomDropdown
                                value={service}
                                onChange={setService}
                            />
                        </div>

                    </div>

                    {/* notes */}
                    <div className="email-container mt-5 ">
                        <div className="lable flex items-center gap-1 text-xs text-gray-300">
                            <NotepadText size={13} />
                            <p>Notes</p>
                        </div>
                        <textarea className="border-b mt-[10px] min-h-10 max-h-30 border-gray-300 outline-none focus:border-orange-500 px-2 bg-transparent w-full text-white " />

                    </div>

                    <button className="bg-linear-to-r from-amber-600 via-amber-700 to-amber-800 w-full p-4 rounded-lg cursor-pointer text-white mt-5">Submit</button>

                </div>


            </div>
        </>
    )
}

export default AddClientForm
