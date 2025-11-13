import React from 'react'
import { FaGithub, FaGoogle, FaLinkedin } from 'react-icons/fa'

const SocialMediaCard = () => {
    return (
        <div className='my-4 bg-gray-800 text-white p-4 rounded-xl break-inside-avoid items-center gap-3 ' >
            <p className='font-bold' >Social Media</p>
            <a target='_blank' href='https://github.com/Ayush-may' className='inline-block hover:bg-gray-700 duration-200 p-2 rounded-xl' >
                <FaGithub size={30} />
            </a>
            <a href='https://www.linkedin.com/in/ayush14may/' target='_blank' className='inline-block hover:bg-gray-700 duration-200 p-2 rounded-xl' >
                <FaLinkedin size={30} />
            </a>

            {/* <a href='https://www.linkedin.com/in/ayush14may/' target='_blank' className='inline-block hover:bg-gray-700 duration-200 p-2 rounded-xl' >
                        <FaWhatsapp size={30} />
            </a> */}

            <a href='mailto:ayushsharma014may@gmail.com' target='_blank' className='inline-block hover:bg-gray-700 duration-200 p-2 rounded-xl' >
                <FaGoogle size={30} />
            </a>
        </div>
    )
}

export default SocialMediaCard