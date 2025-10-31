import React, { useRef } from 'react'
import { FaFilePdf, FaFolderOpen, FaGithub, FaUserTie } from 'react-icons/fa'
import { IoHomeOutline, IoHomeSharp } from 'react-icons/io5'
import CustomCursor from './components/CustomCursor'
import { motion } from "framer-motion";
import { FaFileAlt } from "react-icons/fa";
import { AiOutlineFileText } from 'react-icons/ai';
import { FaCodeBranch, FaGoogle, FaLinkedin, FaStar, FaUserGroup, FaWhatsapp } from 'react-icons/fa6';
import { CgProfile } from 'react-icons/cg';
import { FiExternalLink } from 'react-icons/fi';
import ProjectCard from './components/ProjectCard';
import { projects, techStacks } from './assets';
import EducationCard from './components/EducationCard';
import ExperienceCard from './components/ExperienceCard';

const App = () => {
  const containerRef = useRef(null);
  const getInTouch = [
    {
      name: 'Github',
      bg: 'bg-gray-900',
      link: 'https://github.com/ayush-may',
      text: 'github.com/ayush-may'
    },
    {
      name: 'gmail',
      // bg: 'bg-[#c71610]',
      bg: 'bg-gray-900',
      link: 'mailto:ayushsharma014may@gmail.com',
      text: 'ayushsharma014may@gmail.com'
    },
    {
      name: 'linkedin',
      bg: 'bg-blue-500',
      link: 'https://www.linkedin.com/in/ayush14may/',
      text: 'linkedin.com/in/ayush14may'
    },
    {
      name: 'WhatsApp',
      bg: 'bg-green-500',
      link: '',
      text: 'Whatsapp'
    },
  ]

  const navOptions = [
    {
      name: "Home",
      link: "#home"
    },
    {
      name: "resume",
      link: "#home"
    },
    {
      name: "Experience",
      link: "#experience"
    },
    {
      name: "Works",
      link: "#works"
    },
  ]

  return (
    <>
      <CustomCursor />
      <div ref={containerRef} className='' >

        <div id='home' className='flex min-h-dvh p-3' >
          <div className="w-full bg-white shadow columns-2 sm:columns-2 md:columns-3 lg:columns-4 gap-5 cursor-default">

            <div className='border border-gray-300 p-4 rounded-xl break-inside-avoid' >
              <p className='text-xl text-black font-normal' >Hii,</p>
              <p className='text-5xl  font-bold bg-amber-300 w-fit p-2 text-white' >
                Ayush Sharma
              </p>
              <p className=' text-neutral-700 text-sm tracking-wide leading-[110%] mt-3' >
                I’m Ayush Sharma, a fast-learning full-stack developer skilled in Laravel, React, and MySQL. I build scalable, performant applications, write clean code, and adapt quickly to new technologies—turning ideas into solid, production-ready solutions with precision, purpose, and relentless curiosity.
              </p>
            </div>


            <div className='my-4 bg-gray-800 text-white p-4 rounded-xl break-inside-avoid items-center gap-3 ' >
              <p className='font-bold' >Social Media</p>
              <div className='inline-block hover:bg-gray-700 duration-200 p-2 rounded-xl' >
                <FaGithub size={30} />
              </div>
              <div className='inline-block hover:bg-gray-700 duration-200 p-2 rounded-xl' >
                <FaLinkedin size={30} />
              </div>
              <div className='inline-block hover:bg-gray-700 duration-200 p-2 rounded-xl' >
                <FaWhatsapp size={30} />
              </div>
              <div className='inline-block hover:bg-gray-700 duration-200 p-2 rounded-xl' >
                <FaGoogle size={30} />
              </div>
            </div>

            <div className='bg-gray-800 text-white p-4 rounded-xl break-inside-avoid items-center gap-3 my-4' >
              <p className="font-semibold text-sm">Tech Stacks</p>
              {
                techStacks.map(e => (<span
                  className="bg-white text-black text-xs m-0.5 p-0.5 px-2 inline-block rounded-xl">
                  {e}
                </span>
                ))
              }
            </div>


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


            <EducationCard />
            <ProjectCard project={projects.distributedTodo} />
            <ProjectCard project={projects.resumeAnalyzer} />
            <ProjectCard project={projects.resumeAnalyzer} />
            <ProjectCard project={projects.distributedTodo} />
            <ExperienceCard />

            <div className='my-4 bg-gray-800 text-white p-4 rounded-xl break-inside-avoid items-center gap-3 ' >
              <p className='font-bold' >Social Media</p>
              <div className='inline-block hover:bg-gray-700 duration-200 p-2 rounded-xl' >
                <FaGithub size={30} />
              </div>
              <div className='inline-block hover:bg-gray-700 duration-200 p-2 rounded-xl' >
                <FaLinkedin size={30} />
              </div>
              <div className='inline-block hover:bg-gray-700 duration-200 p-2 rounded-xl' >
                <FaWhatsapp size={30} />
              </div>
              <div className='inline-block hover:bg-gray-700 duration-200 p-2 rounded-xl' >
                <FaGoogle size={30} />
              </div>
            </div>

            {/* spotify */}
            {/* <div className='break-inside-avoid' >
              <iframe
                data-testid="embed-iframe"
                style={{ borderRadius: "12px" }}
                src="https://open.spotify.com/embed/track/0MRg2bzlVhGQTi4ecu792k?utm_source=generator&theme=0"
                width="100%"
                height="160"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div> */}

            {/* <div className='my-4 border border-gray-300 p-4 rounded-xl break-inside-avoid' >
              <CgProfile size={20} className='inline-block me-auto' />
            </div> */}

          </div>
        </div>

      </div >
    </>
  )
}

export default App