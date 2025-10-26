import React, { useRef } from 'react'
import { FaFilePdf } from 'react-icons/fa'
import { IoHomeOutline, IoHomeSharp } from 'react-icons/io5'
import CustomCursor from './components/CustomCursor'
import { motion } from "framer-motion";

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

        <nav className='flex border border-white items-center justify-center w-fit fixed top-3 left-1/2 
        -translate-x-1/2 rounded-full bg-gray-900 shadow-sm' >
          <ul className='flex' >
            {navOptions.map(op => (
              <li className='p-1'  >
                <a href={op.link} className='inline-block p-2 px-4 duration-200 transition-all cursor-pointer hover:bg-stone-200 text-stone-100
              hover:text-stone-800 rounded-full' >
                  {op.name}
                </a>
              </li>
            ))}

            {/* <IoHomeSharp size={20} /> */}
            {/* <FaFilePdf size={20} /> */}
          </ul>
        </nav>

        <div id='home' className='flex gap-10 min-h-dvh p-10 pt-20' >
          {/* left side */}
          <motion.div
            drag
            dragElastic={0.3}
            whileDrag={{ rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            dragConstraints={containerRef}
            className='rounded-4xl p-5 cursor-default shadow bg-gray-900 w-1/3 relative' >
            <p className='text-2xl text-stone-100 font-bold' >Hii,</p>
            <p className='text-8xl text-stone-100 font-bold' >
              Ayush Sharma
              {/* {(() => {
                const name = "Ayush Sharma".split("")
                const baseDelay = 1;
                return (
                  name.map((letter, index) => (
                    <motion.span
                      key={index}
                      animate={{ y: 0, opacity: 1 }}
                      initial={{ y: -50, opacity: 0 }}
                      transition={{ delay: baseDelay + index * 0.08, type: "spring", stiffness: 10, }}
                    >
                      {letter}
                    </motion.span>
                  ))
                )
              })()} */}
            </p>
            <p className='text-white text-sm leading-tight absolute bottom-5 text-justify right-5 left-5' >
              I’m Ayush Sharma, a fast-learning full-stack developer skilled in Laravel, React, and MySQL. I build scalable, performant applications, write clean code, and adapt quickly to new technologies—turning ideas into solid, production-ready solutions with precision, purpose, and relentless curiosity.
            </p>
          </motion.div>
          {/* right card */}
          <div className='flex-1 h-full flex flex-col gap-2' >

            <div className='flex flex-col gap-2' >
              <h3 className='text-4xl font-bold' >Introduction</h3>

              <motion.div
                drag
                dragElastic={0.3}
                whileDrag={{ rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                dragConstraints={containerRef}
                className='p-5 px-5 rounded-4xl border border-stone-500 mt-5 ' >
                <h4 className='text-2xl font-bold' >A Full Stack Developer</h4>
                <p className='tracking-wide leading-tight mt-3' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ab deleniti ratione quisquam eum nobis aperiam qui corrupti earum, minus rem voluptate, reiciendis placeat quod. Sint natus neque temporibus ullam!</p>
              </motion.div>

            </div>

            <div className='bg-stone-400 h-0.5 w-full mt-3' ></div>

            <div className='flex flex-col flex-1 gap-2 mt-3' >
              <h3 className='text-4xl font-bold' >Get In Touch</h3>

              <div className={`grid grid-cols-3 flex-1 gap-3`}>
                {getInTouch.map((e, i) => (
                  <motion.a
                    key={i}
                    href={e.link}
                    target="_blank"
                    drag
                    dragConstraints={containerRef}
                    dragElastic={0.3}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    whileDrag={{ rotate: 5 }}
                    className={`max-h-[200px] max-w-[400px] cursor-pointer hover:-translate-y-1 duration-300 
                  p-5 px-5 flex-1 rounded-4xl  
                  flex flex-col shadow ${e.bg}`}
                  >
                    <p className='text-stone-100 capitalize font-bold text-2xl'>{e.name}</p>
                    <div className='mt-auto'>
                      <div className='flex items-center'>
                        <span className='h-2 w-2 inline-block rounded-full bg-stone-100'></span>
                        <span className='w-full h-[1px] bg-stone-100 rounded-4xl inline-block'></span>
                        <span className='h-2 w-2 inline-block rounded-full bg-stone-100'></span>
                      </div>
                      <p className='text-end text-stone-100 mt-1 text-sm'>{e.text}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

            </div>

          </div>
        </div>

        {/* Experience */}
        <div id='experience' className='bg-gray-900 min-h-dvh p-10 pt-20 text-stone-100' >
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.3,
              duration: 1,
              type: "spring",
            }}
            viewport={{ once: false }}
            className='text-4xl font-bold text-center' >Experience</motion.p>

          <div className='grid grid-cols-1' >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.3,
                duration: 1,
                type: "spring",
              }}
              viewport={{ once: false }}
              className={`h-[400px] cursor-pointer hover:-translate-y-1 duration-300 
                  p-5 px-5 flex-1 rounded-4xl mt-5 bg-stone-200 
                  flex relative`}
            >
              <span className='absolute top-5 right-5 rounded-4xl px-2 text-white bg-stone-800 text-sm' >Present</span>
              <div className='mt-auto text-stone-900 w-fit h-full'>
                <div className='flex flex-col me-2 items-center h-full flex-1'>
                  <span className='inline-block text-xs'>2025</span>
                  <span className='h-2 w-2 inline-block rounded-full bg-stone-900'></span>
                  <span className='h-full w-[1px] bg-stone-900 rounded-4xl inline-block'></span>
                  <span className='h-2 w-2 inline-block rounded-full bg-stone-900'></span>
                  <span className='inline-block text-xs'>Present</span>
                </div>
              </div>
              <div className='flex flex-col flex-1 ms-3' >
                <div className='w-full h-fit' >
                  <span className=' text-gray-500 text-sm' >On-Site</span>
                  <div className='flex justify-around w-full flex-1' >
                    <div className='flex-1' >
                      <p className='text-stone-900 capitalize font-bold text-2xl leading-tight '>Full Stack Mern Developer</p>
                      <p className='text-stone-500 leading-tight text-sm '>at Kommify Venture Private Limited</p>
                    </div>
                    <span className='text-stone-800 text-sm' >Gwalior, MP</span>
                  </div>
                </div>
                <div className='grid grid-cols-2' >
                  <div>
                    <div className='flex flex-wrap mt-4 gap-2' >
                      <p className='text-stone-800' >Stacks : </p>
                      {['react', 'nodejs', 'scss', 'Mongodb', 'expressjs', 'git', 'github'].map(e => (
                        <p className='text-black hover:bg-stone-800 hover:text-stone-100 duration-200 transition-all px-4 py-0.5 text-sm border rounded-4xl' >#{e}</p>
                      ))}
                    </div>
                    <div className='flex flex-wrap mt-4 gap-2' >
                      <p className='text-stone-800' >Concept Badge : </p>
                      {['JWT Auth', 'REST API', 'MVC', 'Responsive UI', 'Context API', 'State Mgmt'].map(e => (
                        <p className='text-black hover:bg-stone-800 hover:text-stone-100 duration-200 transition-all px-4 py-0.5 text-sm border rounded-4xl' >#{e}</p>
                      ))}
                    </div>
                  </div>
                  <div className='flex-1 h-full ps-10 text-stone-800 border-0 border-l' >
                    <ul className="list-disc">
                      <li>Developed and maintained the subscription management module, including <strong>Razorpay integration</strong> for seamless payment handling and automated session expiration logic.</li>
                      <li>Implemented reusable React Context Providers to <strong>centralize application state and functions</strong>, improving scalability and maintainability across components.</li>
                      <li>Designed and <strong>optimized complex frontend and backend logic</strong> to support dynamic user subscriptions, credit-based access, and feature control.</li>
                      <li>Built responsive and user-friendly interfaces using custom CSS and SCSS without relying on external styling frameworks.</li>
                      <li>Created modular and reusable utility functions to ensure <strong>cleaner code, consistency,</strong> and easier future updates.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.3,
                duration: 1,
                type: "spring",
              }}
              viewport={{ once: false }}
              className={`h-[100px] cursor-pointer hover:-translate-y-1 duration-300 
                  p-5 px-5 flex-1 rounded-4xl mt-5 bg-stone-200 
                  flex justify-center items-center`}
            >
              <p className='text-stone-800 text-lg' >Coming Soon...</p>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App