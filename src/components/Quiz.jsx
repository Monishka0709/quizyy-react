import React, {useRef, useState} from 'react'
import '../Quiz.css'
import Modal from './Modal'
import { data } from '../assets/data'
// import {  toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const Quiz = () => {

    
    let [index, setIndex] = useState(0)
    let [question, setQuestion] = useState(data[index])
    let [lock, setLock] = useState(false)
    let [score, setScore] = useState(0)
    let [result, setResult] = useState(false)
    let [showModal, setShowModal] = useState(true)
    let [isButtonDisabled, setButtonDisabled] = useState(false)

    

    let Option1 = useRef(null)
    let Option2 = useRef(null)
    let Option3 = useRef(null)
    let Option4 = useRef(null)

    let option_array = [Option1,Option2,Option3,Option4]

    // toast('Instructions:'+<br/>+'You will be rewarded +4 marks for every correct answer'+'You will be getting -1 marks for every incorrect answer')
    

    const checkAns = (e,ans) => {
        
        if(lock === false){
            if(question.ans===ans) {
                e.target.classList.add("correct");
                setLock(true)
                setScore(prev => prev+4)
                setButtonDisabled(true)
                
            }
            else {
                e.target.classList.add("incorrect");
                setButtonDisabled(true)
                setLock(true)
                setScore(prev => prev-1)
                option_array[question.ans-1].current.classList.add("correct")
            }    
        }

        
    }

    

    const next = () => {
        setButtonDisabled(false)
        if(lock === true) {
            if (index == data.length-1) {
                setResult(true)
                return 0
                
            }
            setIndex(++index)
            setQuestion(data[index])
            setLock(false)
            option_array.map((option)=> {
                option.current.classList.remove("correct")
                option.current.classList.remove("incorrect")
                return null
            })
        }
    }

    const reset = () => {
        setIndex(0)
        setQuestion(data[0])
        setLock(false)
        setScore(0)
        setResult(false)
    }

  return (
    
    <div className='quiz--container'>
        {showModal && <Modal onClose={() => setShowModal(false)}/> }
        <h1>Quiz App</h1>
        <hr/>
        {result?<></>:<>
            <h2>{index + 1}. {question.question}</h2>
        <div className='btn--container'>
            <button ref={Option1} className='btn' onClick={(e) => {checkAns(e,1)}} disabled={isButtonDisabled}>{question.option1}</button>
            <button ref={Option2} className='btn' onClick={(e) => {checkAns(e,2)}} disabled={isButtonDisabled}>{question.option2}</button>
            <button ref={Option3} className='btn' onClick={(e) => {checkAns(e,3)}} disabled={isButtonDisabled}>{question.option3}</button>
            <button ref={Option4} className='btn' onClick={(e) => {checkAns(e,4)}} disabled={isButtonDisabled}>{question.option4}</button>
        </div>
        <button onClick={next} className='nextbtn'>Next</button>
        <div className='indexing'>{index + 1} of {data.length} questions</div>
      </>}

        {result?<>
        <h2>You scored {score} out of {data.length*4}</h2>
        <button className='nextbtn' onClick={reset}>Reset</button>
        </>:<></>}
        
    </div>
  )
}

export default Quiz
