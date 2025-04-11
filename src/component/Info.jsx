import React, { useContext } from 'react'
import '../css/Qestions.css'
import { AppContext } from '../context/AppProvider'
import { LuLightbulb } from "react-icons/lu";

const Info = () => {
  const{jobRole,experience,jobDescription} = useContext(AppContext);

  return (
    <div className="info_container">
      <h1 className='heding'>Lets Get Started</h1>
      <div className="info">
        <h1><strong>Job Role/Job Position : </strong>{jobRole}</h1>
        <h1><strong>Job Description/Tech Stack : </strong>{jobDescription}</h1>
        <h1><strong>Years of Exprience : </strong>{experience}</h1>
      </div>

      <div className="info_alert">
        <span><LuLightbulb style={{fontSize:"1rem", color:"orange"}}/> Information</span>
        <p>Enable Vedio Web Cam and Microphone to start your AI Genartaed mock interview , it has 5 questions which you can answer and at the last you will get the report on the basis of your answer. Note: we never record your vedio, Web cam access you can disable at any time if you want</p>

      </div>
    </div>
  )
}

export default Info