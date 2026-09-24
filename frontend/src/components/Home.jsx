import React from 'react'
import profilePicture from '../assets/Profile Picture2.jpg'
import './Home.css'

export default function Home() {
  return (
    <div>
      <img src={profilePicture} alt='Profile photo' />
        <h1>Full Stack developer</h1>
        <p>My name is Sathish Kumar</p>
        <p>I am BE Computer Science and Engineering Graduate</p>
    </div>
  )
}
