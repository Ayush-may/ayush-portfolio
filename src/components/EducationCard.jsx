import { FaGraduationCap } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import Status from "./Status";

export default function EducationCard() {
    return (
        <div className="my-4 break-inside-avoid relative">
            {/* Header */}
            <FaGraduationCap size={20} className="inline-block mx-2 text-gray-700" />
            <p className="font-semibold inline-block text-neutral-700">
                Education
            </p>
            {/* <BsThreeDotsVertical
                size={15}
                className="inline-block absolute right-2 text-gray-700 top-1"
            /> */}

            {/* Card */}
            <div className="text-neutral-800 border border-gray-300 p-3 rounded-xl bg-white">
                {/* College Info */}
                <div className="rounded-xl overflow-hidden">
                    <p className="font-bold text-neutral-800 text-base">
                        Vikrant Insitute of Technology and Management
                    </p>
                    <p className="text-neutral-600 mt-1">
                        Bachelor of Technology (B.Tech) – Computer Science & Engineering
                    </p>
                    <p className="text-neutral-700  mt-1">
                        <span className="font-semibold">CGPA: 7.14</span>
                    </p>
                </div>

                {/* Duration */}
                <p className="text-neutral-600 text-sm mt-2">
                    <span className="font-semibold">Duration:</span> 2021 – 2025
                </p>

                {/* Status */}
                {/* <p className="bg-green-600 text-sm w-fit text-white px-2 p-0.5 rounded-4xl mt-2 font-medium">
                    Graduated
                </p> */}

                <Status>Graduated</Status>

            </div>
        </div>
    );
}
