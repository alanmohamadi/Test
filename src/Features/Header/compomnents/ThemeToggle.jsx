import { useState } from "react";
import { motion } from "framer-motion";
import Icon from "../../../Shared/Components/Icon/Icon";

export default function ThemeToggle() {
    const [enabled, setEnabled] = useState(false);

    return (
        <button
            onClick={() => setEnabled(!enabled)}
            className={`relative  w-28 h-10 flex items-center rounded-[20px]  p-6 transition-colors duration-300 ${enabled ? "bg-yellow-400" : " bg-[#232325]"
                }`}
        >
            <motion.div
                animate={{
                    x: enabled ? 56 : -18,
                }}
                transition={{ type: "spring", stiffness: 100, damping: 30 }}
                className={`w-8 h-8 rounded-full flex items-center justify-center shadow-xl ${enabled ? "bg-yellow-100" : "bg-blue-100 "
                    }`}
            >
                {enabled ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="w-5 h-5 text-yellow-600 bg-transparent"
                    >
                        <circle cx="12" cy="12" r="4" />
                        <path d="M12 2v2m0 16v2m8-10h2M2 12h2m14.24-6.24l1.41-1.41M4.34 19.66l1.41-1.41m0-12.49L4.34 4.34m14.31 14.32l-1.41-1.41" />
                    </svg>
                ) : (
                    <div className=" bg-transparent">

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="w-5 h-5 text-gray-800  bg-transparent"
                        >
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                        </svg>
                    </div>
                )}
            </motion.div>
        </button>
    );
}
