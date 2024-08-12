import React from 'react'
import { useState } from 'react'
import Lottie from 'lottie-react'
import Exam from '../assets/Exam.json'
import {Navigate} from 'react-router-dom'


const Hero = () => {
    const [showQuiz,setShowQuiz] = useState(false);

    if(showQuiz) {
        return <Navigate to='/Quiz' target='_blank' />;
    }
  return (
    <div>
      <div id="main">
        
        
        <div className="bar--container"  >
            <div className="container" >
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div> 
        </div>

        <div className="pplimg--container">
            <Lottie  className ="imgif" animationData={Exam}></Lottie>
        </div>
        
        <div className="start-button">
        <button type='button' id="start" onClick={() => setShowQuiz(true)}>Start quiz</button> 
        {/* {showQuiz && <Quiz />} */}
        
        </div>
    </div>
    </div>
  )
}

export default Hero
