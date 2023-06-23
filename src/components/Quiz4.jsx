import React, { useContext, useEffect } from 'react'
import History from "../images/history.jpeg";
import { useNavigate } from 'react-router-dom';
import { IdContext } from './context/idcontext';

const Quiz4 = ({id}) => {
  const {dispatch}=useContext(IdContext);
  const navigate=useNavigate();
  useEffect(()=>{
    console.log(id);
    dispatch({type:"CHANGE_ID",payload:id})
  },[id])
  return (
    <div className="card">
        <img src={History} alt="" />
        <div className="card-content">
          Welcome to the History Quiz! This quiz is designed to test your
          knowledge of various historical events, periods, and figures. Get
          ready to embark on a journey through time as we explore significant
          moments in human history. The quiz will consist of multiple-choice
          questions, where you will be presented with several options to choose
          from. Select the option you believe to be the correct answer and
          discover how well you know the past. Whether you are a history buff, a
          student of the subject, or simply intrigued by the events that shaped
          our world, this quiz provides an exciting opportunity to challenge
          your knowledge and learn fascinating facts along the way. So, brace
          yourself for a trip through the annals of time, and let's test your
          historical acumen. Good luck, and may your answers illuminate the
          past!
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

export default Quiz4