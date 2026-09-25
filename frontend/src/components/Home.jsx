import React from 'react'
import profilePicture from '../assets/Profile Picture2.jpg'
import './Home.css'

export default function Home() {
  return (
    <div>
      <img src={profilePicture} alt='Profile photo' />
        <h1>MERN Stack Developer</h1>
        <p>My name is Sathish Kumar</p>
        <p>I am BE Computer Science and Engineering Graduate</p>
        <p>I am a Computer Science and Engineering graduate with a strong interest in web development. I have completed a Full Stack MERN Development course, where I gained hands-on experience with MongoDB, Express.js, React.js, and Node.js.

I enjoy building responsive and user-friendly web applications and continuously improving my development skills. I am currently looking for an opportunity to start my career as a Web Developer or MERN Stack Developer, where I can apply my knowledge, work on real-world projects, and grow as a professional.
</p>
    </div>
  )
}
