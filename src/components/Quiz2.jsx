import React, { useContext, useEffect } from 'react'
import Sport from "../images/sport.jpg";
import { useNavigate } from 'react-router-dom';
import { IdContext } from './context/idcontext';
const Quiz2 = ({id}) => {
  const {dispatch}=useContext(IdContext);
  const navigate=useNavigate();
  useEffect(()=>{
    console.log(id);
    dispatch({type:"CHANGE_ID",payload:id})
  },[id])
  return (
    <div className="card">
        <img src={Sport} alt="" />
        <div className="card-content">
          Welcome to the Sports Quiz! This quiz is designed to test your
          knowledge of various sports and sporting events. Get ready to
          challenge yourself with questions about popular sports, iconic
          athletes, memorable moments, and more. The quiz will consist of
          multiple-choice questions, where you will be given several options to
          choose from. Select the option you believe to be the correct answer
          and see how well you fare in the world of sports. Whether you are a
          dedicated sports fan, an aspiring athlete, or simply enjoy the thrill
          of competition, this quiz offers a chance to showcase your sports
          knowledge and learn some fascinating facts along the way. Get ready to
          kick off the quiz and demonstrate your sporting prowess. Good luck and
          let the games begin!
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
export default Quiz2
