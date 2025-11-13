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
import ResumeCard from './components/ResumeCard';
import GithubCard from './components/GithubCard';
import SocialMediaCard from './components/SocialMediaCard';

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

        <div id='home' className='flex min-h-dvh p-5' >
          <div className="w-full bg-gray-100 p-5 rounded-xl columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-5 cursor-default relative pb-[70px]">
            <div className='bg-white  shadow p-4 rounded-xl break-inside-avoid' >
              <p className='text-xl text-black font-normal' >Hii,</p>
              <p className='text-5xl  font-bold bg-amber-300 w-fit p-2 text-white' >
                Ayush Sharma
              </p>
              <p className=' text-neutral-700 text-sm tracking-wide leading-[110%] mt-3' >
                I’m Ayush Sharma, a fast-learning full-stack developer skilled in Laravel, React, and MySQL. I build scalable, performant applications, write clean code, and adapt quickly to new technologies—turning ideas into solid, production-ready solutions with precision, purpose, and relentless curiosity.
              </p>
            </div>
            <ResumeCard />

            <div className='my-4 text-3xl font-bold bg-black text-white p-4 rounded-xl break-inside-avoid items-center gap-3 ' >
              Full Stack Developers
              <p className='text-lg font-normal leading-tight' >I’m Ayush Sharma, a fast-learning full-stack developer skilled in Laravel, React, and MySQL. I build scalable, performant applications, write clean code, and adapt quickly to new technologies—turning ideas into solid, production-ready solutions with precision, purpose, and relentless curiosity.</p>
            </div>

            <SocialMediaCard />
            
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

            <EducationCard />
            <GithubCard />
            <ProjectCard project={projects.realChatApp} />
            <ExperienceCard />
            <ProjectCard project={projects.distributedTodo} />
            <ProjectCard project={projects.jobRecommender} />
            <ProjectCard project={projects.UPIpay} />
            <ResumeCard />
            {/* <div className="block my-4 bg-gradient-to-br from-green-600 to-green-500 hover:from-red-600 hover:to-red-600 duration-200 transition-all text-white p-4 rounded-xl break-inside-avoid items-center gap-3 cursor-pointer">
              <FaFilePdf size={20} className="inline" />
              <span className="font-semibold text-3xl text-center w-full inline-block -mt-28">Hire me !</span>
            </div> */}

            <SocialMediaCard />

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

            <footer className="mt-10  text-center text-sm text-gray-500 border-t border-gray-200 absolute bottom-2 left-1/2 -translate-x-1/2">
              © 2025 <strong>Ayush Sharma</strong>
              <span className='block' >·Built with ❤️ using React & Tailwind</span>
            </footer>

          </div>
        </div>

      </div >
    </>
  )
}

export default App