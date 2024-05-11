import React from 'react'
import "./Aboutme.css"
import profile_img from '../../assets/profile.jpg'

const Aboutme = () => {
  return (
    <div className='profile'>
        <img src={profile_img} alt='my picture'/>
        <h1>Who Is <span>Hungchih</span>?</h1>
        <p>Hello there! I'm Hungchih, and I'm embarking on an exciting transition from my role as an Occupational Therapist to that of a Software Engineer. With a background rooted in Occupational Therapy, I've always been drawn to problem-solving, effective communication, and fostering strong connections with colleagues. As I take this leap into a new field, I'm eager to channel my creativity and logical thinking into crafting innovative solutions. Join me on this thrilling journey as I blend my past experiences with newfound technical skills to shape a rewarding career in software engineering!</p>
    </div>
  )
}

export default Aboutme
