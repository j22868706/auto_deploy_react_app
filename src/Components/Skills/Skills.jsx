import React from 'react'
import './Skills.css'
import Aboutme from '../../assets/aboutme.jpg'

function Skills() {
  return (
    <div className='skills'>
<div className="skills-title">
        <h1>Skills</h1>
      </div>
      <div className="skills-sections">
        <div className="skills-left">
            <img src={Aboutme} alt='me' />
        </div>
        <div className="skills-right">
            <div className="skills-para">
                <p>I possess a diverse set of skills range from front-end technologies to bakc-end development, cloud service, and database management. </p>
            </div>
            <div className="skills-skill">
                <div className="skill"><p>HTML & CSS</p><hr style={{ width: '70%' }} /></div>
                <div className="skill"><p>Node.Js</p><hr style={{ width: '50%' }} /></div>
                <div className="skill"><p>React</p><hr style={{ width: '50%' }} /></div>
                <div className="skill"><p>Python and flask</p><hr style={{ width: '60%' }} /></div>
                <div className="skill"><p>AWS Services</p><hr style={{ width: '75%' }} /></div>
                <div className="skill"><p>Docker</p><hr style={{ width: '65%',}}/></div>                                
            </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
