import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs'

export const BackButton = ({ destination = '/' }) => {
  return (
    <div className='flex'>
        <Link to={destination} className='px-4 py-1 text-white bg-sky-800 rounded-1g w-fit' >
             <BsArrowLeft className='text-2-xl' />
        </Link>
        </div>
  )
}


export default BackButton