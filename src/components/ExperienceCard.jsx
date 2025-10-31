import { FaBriefcase } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function ExperienceCard() {
  return (
    <div className="my-4 break-inside-avoid relative">
      {/* Header */}
      <FaBriefcase size={20} className="inline-block mx-2 text-gray-700" />
      <p className="font-semibold text-sm inline-block text-neutral-700">
        Experience
      </p>
      <BsThreeDotsVertical
        size={15}
        className="inline-block absolute right-2 text-gray-700 top-1"
      />

      {/* Card */}
      <div className="text-neutral-800 border border-gray-300 p-3 rounded-xl bg-white shadow-sm">
        {/* Company Info */}
        <div className="rounded-xl overflow-hidden">
          <p className="font-bold text-neutral-800 text-base">
            Kommon School
          </p>
          <p className="text-neutral-600 text-sm mt-1">
            Full Stack MERN Developer
          </p>
        </div>

        {/* Duration */}
        <p className="text-neutral-600 text-xs mt-2">
          <span className="font-semibold">Duration:</span> July 2025 – Present
        </p>

        {/* Status */}
        <p className="text-blue-600 text-xs mt-1 font-medium">
          💼 Currently Working
        </p>
      </div>
    </div>
  );
}
