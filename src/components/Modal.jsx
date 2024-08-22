import React from 'react'
import instructionslogo from '../assets/instructions.png'
import '../Quiz.css'

export default function Modal ({onClose}) {
  return (

    <div className="bg">
        <div className="box-bg">
            <div className="modal-box">
                <h1>Instructions</h1>
                
            </div>
            <div className='instructions--logo--container'>
                <img src={instructionslogo} alt="" />
            </div>
            <div className="instructions">

            <ul>
                    <li>You must attempt every question of the quiz</li>
                    <li>You can select any option only once</li>
                    <li>You will be rewarded +4 points for every correct answer</li>
                    <li>You will get -1 points for every incorrect answer</li>

                </ul>
                

                <button placeholder="Okay" id="okbtn" onClick={onClose} >Ok</button>

                
            </div>
        </div>
    </div>

)
}


