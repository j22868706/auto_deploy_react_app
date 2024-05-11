import React from 'react'
import './Projects.css'
import myprojects from '../../assets/myprojects'

function Projects() {
  return (
    <div className='projects'>
      <div className="projects-title">
        <h1>My Projects</h1>
      </div>
      <div className="projects-container">
        {myprojects.map((project, index) => {
          return (
            <a
              href={project.p_url}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
            >
              <img src={project.p_img} alt={project.p_name} />
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default Projects