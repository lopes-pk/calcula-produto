import {BrowserRouter, Routes, Route} from 'react-router-dom'

import React from 'react'
import Cadastro from './pages/Cadastro';

export default function routes() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Cadastro/>}>
        
      </Route>
    </Routes>
    </BrowserRouter>
  )
}
