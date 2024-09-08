import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import Spinner from '..components/Spinner.jsx';
import OtherSpinner from '../components/OtherSpinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';


const Home = () => {

  const [cereals, setCereals] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios
    .get('http://localhost:5555/cereals')
    .then((response) => {
      //console.log('database has been called..')
      setCereals(response.data.data)
      setLoading(false)
    })
    .catch((err) => {
    console.log(err)
    setLoading(false)
  }) 
}, []) 

//come back here to rewrite after creating database, ts: 30:40
  return (
    <div className='p-4'>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl my-8'>Cereal List</h1>
        <Link to='cereals/create'><MdOutlineAddBox className='text-sky-800 text-4xl' /></Link>
      </div>
      {loading ?   ( <OtherSpinner /> ) : (
        <table className='w-full border-seperate border-spacing-2'>
          <thead>
            <tr>
              <th className='border border-slate-600 rounded-md'>Title</th>
            </tr>
          </thead>
          <tbody>
            {cereals.map((cereal, index) => (
              <tr key={cereal._id} className='h-8'>
                <td className='border border-slate-700 rounded-md text-center'>
                  {index + 1}
                </td>
                <td className='border border-slate-700 rounded-md text-center'>
                  {cereal.title}
                </td>
                <td className='border border-slate-700 rounded-md text-center'>
                  <div className='flex justify-center gap-x-4'>
                    <Link to={`/cereals/details/${cereal._id}`} >
                      <BsInfoCircle className='text-2x-xl text-green-800'/>
                    </Link>
                    <Link to={`/cereals/edit/${cereal._id}`} >
                      <AiOutlineEdit className='text-2x-xl text-green-800'/>
                    </Link>
                    <Link to={`/cereals/delete/${cereal._id}`} >
                      <MdOutlineDelete className='text-2x-xl text-red-600'/>
                    </Link>
                  </div>
                </td>

              </tr>

            ))}
          </tbody>
        </table>)
      }
    </div>
  )
}

export default Home