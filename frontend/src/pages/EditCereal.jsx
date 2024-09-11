import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import BackButton from '../components/BackButton'
import OtherSpinner from '../components/OtherSpinner'
import axios from 'axios'

const EditCereal = () => {
  const [ title, setTitle ] = useState('')
  const [loading, setLoading ] = useState(false)
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    setLoading(true)
    axios
    .get(`http://localhost:5555/cereals/${id}`)
    .then((response) => {
      setTitle(response.data.title)
      setLoading(false)      
    })
    .catch((err) => {
      setLoading(false)
      alert('An error happended, please check the console')
      console.log(err)
    })
  }, ([]))

  const handleEditCereal = () => {
    const data = {
      title
    }
    setLoading(true)
    axios
    .put(`http://localhost:5555/cereals/${id}`, data)
    .then(() => {
      setLoading(false)
      navigate('/')
    })
    .catch((err) => {
      alert('Cereal did not save, check console for more info')
      console.log(err)
    })
  }
  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='my-4 text-3xl'>Edit Cereal</h1>
      {loading ? <OtherSpinner /> : ''}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='mr-4 text-xl text-gray-500'>Title</label>
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='px-4 py-2 w-full border-2 border-gray-500'
          />
        </div>       
        <button className='p-2 m-8 bg-sky-300' onClick={handleEditCereal}>
          Save
        </button>
      </div>
    </div>
  )
}

export default EditCereal