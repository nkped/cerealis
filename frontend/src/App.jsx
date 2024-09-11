import React from 'react'
import { Routes, Route } from 'react-router-dom';
import EditCereal from './pages/EditCereal.jsx';
import CreateCereal from './pages/CreateCereal.jsx';
import DeleteCereal from './pages/DeleteCereal.jsx';
import Home from './pages/Home.jsx';
import CerealDetails from './pages/CerealDetails.jsx';


const App = () => {
  return (
    <Routes>
      {/* <Route path='/' element={<Home />} /> */}
      <Route path='cereals' element={<Home />} />
      <Route path='cereals/details/:id' element={<CerealDetails />} />
      <Route path='cereals/create' element={<CreateCereal />} />
      <Route path='cereals/edit/:id' element={<EditCereal />} />
      <Route path='cereals/delete/:id' element={<DeleteCereal />} />
    </Routes>
  )
}

export default App