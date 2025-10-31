import React from 'react'
import { FaCodeBranch, FaGithub, FaStar } from 'react-icons/fa'
import { FaUserGroup } from 'react-icons/fa6'

const GithubCard = () => {
    return (
        <div className='my-4 bg-gray-800 text-white p-4 rounded-xl flex flex-col items-center break-inside-avoid gap-3'>
            <FaGithub size={20} className='inline-block me-auto' />
            <div className='rounded-full overflow-hidden w-[100px] h-[100px] -mt-5' >
                <img src="https://avatars.githubusercontent.com/u/112775332?v=4" className='w-full h-full' alt="" />
            </div>
            <p className='text-sm text-gray-100' >@ayush-may</p>
            <div className='flex items-center gap-2 ' >
                <p className='p-2 px-3' >
                    <FaCodeBranch size={20} />
                    <span>12</span>
                </p>
                <p className='p-2 px-3' >
                    <FaUserGroup size={20} />
                    <span>12</span>
                </p>
                <p className='p-2 px-3' >
                    <FaStar size={20} />
                    <span>12</span>
                </p>
            </div>
        </div>
    )
}

export default GithubCard