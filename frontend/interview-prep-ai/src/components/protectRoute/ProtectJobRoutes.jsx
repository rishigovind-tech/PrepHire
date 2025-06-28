import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectJobRoutes = ({children}) => {


    const token=localStorage.getItem('companyToken')


  return (
    <div>

        {
            token ? children:<Navigate to={"/jobhome"}/>
        }
    </div>
  )
}

export default ProtectJobRoutes