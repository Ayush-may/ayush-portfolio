import React from 'react'
import { FaFilePdf } from 'react-icons/fa'
import { IoHomeOutline, IoHomeSharp } from 'react-icons/io5'

const App = () => {
  const getInTouch = [
    {
      name: 'gmail',
      bg: 'bg-[#c71610]',
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
      link: 'https://www.linkedin.com/in/ayush14may/',
      text: 'Whatsapp'
    },
  ]


  return (
    <div className='px-[10px]' >

      <nav className='flex items-center justify-center w-fit fixed top-2 left-1/2 -translate-x-1/2 rounded-full bg-stone-500 shadow-sm' >
        <ul className='flex p-0.5' >
          <li className='p-3 duration-200 active transition-all cursor-pointer hover:bg-stone-200 text-stone-300 hover:text-stone-800 rounded-full' >
            <IoHomeSharp size={20} />
          </li>
          <li className='p-3 duration-200 transition-all cursor-pointer hover:bg-stone-200 text-stone-300 hover:text-stone-800 rounded-full' >
            <FaFilePdf size={20} />
          </li>
        </ul>
      </nav>


      <div className='flex gap-10 h-dvh p-10 pt-20' >
        {/* left side */}
        <div className='rounded-4xl p-5 cursor-default shadow bg-blue-500 w-1/3 relative' >
          <p className='text-2xl text-stone-100 font-bold' >Hii,</p>
          <p className='text-8xl text-stone-100 font-bold' >Ayush Sharma</p>
          <p className='text-white text-sm leading-tight absolute bottom-5 text-right right-5' >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nisi voluptas impedit beatae cupiditate. Qui vero expedita mollitia tempore tenetur doloremque natus officia debitis doloribus dolores, libero fugiat sint inventore.</p>
        </div>
        {/* right card */}
        <div className='flex-1 h-full flex flex-col gap-2' >

          <div className='flex flex-col gap-2' >
            <h3 className='text-4xl font-bold' >Introduction</h3>

            <div className='p-5 px-5 rounded-4xl border border-stone-500 mt-5 ' >
              <h4 className='text-2xl font-bold' >A Full Stack Developer</h4>
              <p className='tracking-wide leading-tight mt-3' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ab deleniti ratione quisquam eum nobis aperiam qui corrupti earum, minus rem voluptate, reiciendis placeat quod. Sint natus neque temporibus ullam!</p>
            </div>

          </div>

          <div className='bg-stone-400 h-0.5 w-full mt-3' ></div>

          <div className='flex flex-col flex-1 gap-2 mt-3' >
            <h3 className='text-4xl font-bold' >Get In Touch</h3>

            <div className={`grid grid-cols-3 flex-1 gap-5`} >
              {
                getInTouch.map(e => (
                  <a href={e.link} target='_blank' className={`max-h-[200px] max-w-[400px] cursor-pointer hover:-translate-y-1 duration-300 
                  p-5 px-5 flex-1 rounded-4xl mt-5 
                  flex flex-col shadow ${e.bg}`} >
                    <p className='text-stone-100 capitalize font-bold text-2xl' >{e.name}</p>
                    <div className='mt-auto'>
                      <div className='flex items-center' >
                        <span className='h-2 w-2 inline-block rounded-full bg-stone-100' ></span>
                        <span className='w-full h-[1px] bg-stone-100 rounded-4xl inline-block' ></span>
                        <span className='h-2 w-2 inline-block rounded-full bg-stone-100' ></span>
                      </div>
                      <p className='text-end text-stone-100 mt-1' >{e.text}</p>
                    </div>
                  </a>
                ))
              }
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default App