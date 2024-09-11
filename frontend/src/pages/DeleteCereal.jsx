import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import BackButton from '../components/BackButton'
import OtherSpinner from '../components/OtherSpinner'
import axios from 'axios'

const DeleteCereal = () => {
  const [ loading, setLoading ] = useState(false)
  const navigate = useNavigate()
  const { id } = useParams()

  const handleDeleteCereal = () => {
    setLoading(false)
    axios
    .delete(`http://localhost:5555/cereals/${id}`)
    .then(() => {
      setLoading(false)
      navigate('/')
    })
    .catch((err) => {
      setLoading(false)
      alarm('An error happened, please check the console')
      console.log(err)
    })

  }
  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='my-4 text-3xl'>Delete Cereal</h1>
      {loading ? <OtherSpinner /> : ''}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <h3 className='text-2xl'>Are you sure you wish to delete this cereal?</h3>
        <button 
          className='p-4 m-8 w-full text-white bg-red-600' 
          onClick={handleDeleteCereal}>Yes, delete cereal</button>
      </div>
    </div>
  )
}

export default DeleteCereal