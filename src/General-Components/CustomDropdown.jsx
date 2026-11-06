
import { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";

const CustomDropdown = ({ value, onChange }) => {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    const options = [
        "Website",
        "Web Application",
        "Custom Software",
        "App Development",
        "AI Agents",
        "SEO/Digital Marketing",
        "Social Media Handling",
    ];

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div ref={dropdownRef} className="relative w-full">

            {/* Dropdown Trigger */}
            <button
                type="button"
                onClick={() => setOpen(!open)}
                className={`w-full flex items-center justify-between
                border-b px-2 py-2 bg-transparent outline-none
                text-sm text-left transition-colors
                ${open ? "border-amber-500" : "border-gray-300"}
                hover:border-amber-500`}
            >
                <span className={value ? "text-white" : "text-gray-500"}>
                    {value || "Select service"}
                </span>

                <ChevronDown
                    size={16}
                    className={`text-gray-400 transition-transform
                    ${open ? "rotate-180 text-amber-500" : ""}`}
                />
            </button>

            {/* Dropdown Options */}
            {open && (
                <div className="absolute -top-full left-0 mt-2 w-full
                z-50 rounded-lg border border-gray-700
                bg-[#242933] shadow-xl overflow-hidden
                animate-in fade-in slide-in-from-top-2 duration-150">

                    <div className="max-h-52 overflow-y-auto custom-scrollbar p-1">

                        {options.map((option) => (
                            <button
                                key={option}
                                type="button"
                                onClick={() => {
                                    onChange(option);
                                    setOpen(false);
                                }}
                                className={`w-full flex items-center
                                justify-between px-3 py-2.5
                                text-sm rounded-md transition-colors
                                ${value === option
                                        ? "bg-amber-500/10 text-amber-500"
                                        : "text-gray-300 hover:bg-amber-500/10 hover:text-amber-400"
                                    }`}
                            >
                                <span>{option}</span>

                                {value === option && (
                                    <Check size={15} className="text-amber-500" />
                                )}
                            </button>
                        ))}

                    </div>
                </div>
            )}
        </div>
    );
};

export default CustomDropdown;
