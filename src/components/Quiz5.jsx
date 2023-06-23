import React, { useContext, useEffect } from 'react'
import GK from "../images/GK.jpeg";
import { IdContext } from './context/idcontext';
import { useNavigate } from 'react-router-dom';

const Quiz5 = ({id}) => {
  const {dispatch}=useContext(IdContext);
  const navigate=useNavigate();
  useEffect(()=>{
    console.log(id);
    dispatch({type:"CHANGE_ID",payload:id})
  },[id])
  return (
    <div className="card">
        <img src={GK} alt="" />
        <div className="card-content">
          Welcome to the General Knowledge Quiz! This quiz is designed to test
          your knowledge on a wide range of topics, including history, science,
          geography, literature, pop culture, and more. Get ready to put your
          general knowledge to the test! The quiz will consist of
          multiple-choice questions, where you will be given several options to
          choose from. Select the option you believe to be the correct answer
          and see how well-rounded your knowledge is. Whether you are a trivia
          enthusiast, a curious learner, or someone who loves to stay informed
          about the world around you, this quiz offers a chance to challenge
          yourself and discover new facts along the way. So, prepare to exercise
          your brain and embrace the joy of learning. Good luck, and let's see
          how much general knowledge you possess!
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
export default Quiz5
