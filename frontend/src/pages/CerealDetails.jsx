import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import BackButton from '../components/BackButton'
import OtherSpinner from '../components/OtherSpinner'


// ts 3846 for cereal timestamp
const CerealDetails = () => {
  const [ cereal, setCereal ] = useState({})
  const [ imagePath, setImagePath ] = useState()
  const [ loading, setLoading ] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/cereals/${id}`)
      .then((response) => {
        setCereal(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setImagePath(encodeURI("/cerealPictures/" + cereal.name + ".jpg"))
    console.log('imagePath: ',imagePath)
  }, [cereal])

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='my-4 text-3-xl'>Show Cereal</h1>
      {loading ? ( <OtherSpinner /> ) : (
        <div className='flex flex-col p-4 rounded-xl border-2 border-sky-400 w-fit' >
          <div className='my-4'>
            <span className='mr-4 text-xl text-gray-500'>Id</span>
            <span>{cereal._id}</span>
          </div>
          <div className='my-4'>
            <span className='mr-4 text-xl text-gray-500'>Name</span>
            <span>{cereal.name}</span>
            <span className='mr-4 text-xl text-gray-500'></span>
            <span><img src={imagePath} alt='Cereal image' /></span>
          </div>
        </div>
      )}      
    </div>
  )
}

export default CerealDetails