import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../component/Header'
import Footer from '../component/Footer'
import useGsapAos from '../component/hooks/useGsapAos'

const Layout = () => {
    useGsapAos();
  return (
    <>
    <Header/>
    {/* <div className='webbody'> */}
    <Outlet/>
    {/* </div> */}
    <Footer/>
    </>
  )
}

export default Layout