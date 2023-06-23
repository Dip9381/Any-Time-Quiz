import React, { useContext, useEffect } from 'react'
import Computer from "../images/computer.jpeg";
import { useNavigate } from 'react-router-dom';
import { IdContext } from './context/idcontext';

const Quiz3 = ({id}) => {
  const {dispatch}=useContext(IdContext);
  const navigate=useNavigate();
  useEffect(()=>{
    console.log(id);
    dispatch({type:"CHANGE_ID",payload:id})
  },[id])
  return (
    <div className="card">
        <img src={Computer} alt="" />
        <div className="card-content">
          Welcome to the Computer Quiz! This quiz is designed to test your
          knowledge of various aspects of computers and technology. Get ready to
          dive into the world of computer science, hardware, software,
          programming languages, and more. The quiz will consist of
          multiple-choice questions, where you will be given several options to
          choose from. Select the option you believe to be the correct answer
          and see how well you fare in the realm of computers. Whether you are a
          computer enthusiast, a tech-savvy individual, or simply curious about
          the inner workings of these powerful machines, this quiz offers an
          opportunity to challenge your understanding and expand your knowledge
          of the digital world. So, gear up, power on, and get ready to test
          your computer expertise. Good luck, and may your answers be bug-free!
          <div>
            <button onClick={()=>navigate('/quiz')}>Start</button>
            <div>
              Time limit: 5 Min <i className="fa-solid fa-clock"></i>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Quiz3