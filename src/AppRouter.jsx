import React from 'react'
import { CategoryPage, HomePage } from './Pages'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar/Navbar'

export const AppRouter = () => {
  return (
    <>
        <Navbar />
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/category/:cotegory' element={<CategoryPage />} />
        </Routes>
    </>
  )
}
