import React from 'react'
import { FaFilePdf } from 'react-icons/fa'
import resume  from '../assets/resume.pdf'

const ResumeCard = () => {
    return (
        <a
            href={resume}
            download="Ayush_Sharma_Resume.pdf"
            className="block my-4 bg-gradient-to-br from-red-600 to-red-500 hover:from-red-600 hover:to-red-600 duration-200 transition-all text-white p-4 rounded-xl break-inside-avoid items-center gap-3 cursor-pointer">
            <FaFilePdf size={20} className="inline-block" />
            <span className="font-semibold">Download Resume</span>
        </a>
    )
}

export default ResumeCard