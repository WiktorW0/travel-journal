import React from 'react'
import logo from '../images/logo.svg'

function Navbar(){
  return(
    <div className='navbar--main'>
      <img src={logo} alt="logo" className='nabvar--logo'/>
      <h3 className='navbar--title'>my travel journal.</h3>
    </div>
  )
}

export default Navbar