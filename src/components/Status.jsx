import React from 'react'

const Status = ({ children, color = `bg-green-600` }) => {
    return (
        <p className={`${color} text-xs w-fit text-white px-2 p-0.5 rounded-4xl mt-2 font-medium`} >
            {children}
        </p >
    )
}

export default Status