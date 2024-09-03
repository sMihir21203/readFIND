import React from 'react'
import {Header} from './Components/CompsIndex'
import {Outlet} from 'react-router-dom'

const Route = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
}

export default Route