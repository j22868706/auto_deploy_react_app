import React from 'react'
import './Certification.css'
import Certification_date from '../../assets/certification_data' 


const Certification = () => {
  return (
    <div className='certification'>
<div className="certification-title">
            <h1>My Certification</h1>
        </div>
        <div className="certification-container">
            {Certification_date.map((certification, index) => {
                return <div key={index} className='certification-format'>
                    <h3>{certification.c_name}</h3>
                    <p>{certification.v_num}</p>
                    <p>{certification.i_date}</p>
                    <p>{certification.e_date}</p>
                </div>
            })}
        </div>
      
    </div>
  )
}

export default Certification
