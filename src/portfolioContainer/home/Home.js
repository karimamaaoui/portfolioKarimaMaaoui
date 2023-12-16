import React from 'react'
import Footer from './footer/Footer'
import './Home.css'
import Profile from './profile/Profile'

export default function Home() {
  return (
    <div className='home-container'>
      
        <Profile/> 
        <Footer/>
    </div>
  )
}
