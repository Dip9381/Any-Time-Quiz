import React, { useContext, useEffect } from 'react'
import Geo from "../images/geography.jpeg";
import { IdContext } from './context/idcontext';
import { useNavigate } from 'react-router-dom';

const Quiz7 = ({id}) => {
  const {dispatch}=useContext(IdContext);
  const navigate=useNavigate();
  useEffect(()=>{
    console.log(id);
    dispatch({type:"CHANGE_ID",payload:id})
  },[id])
  return (
    <div className="card">
        <img src={Geo} alt="" />
        <div className="card-content">
          Welcome to the Geography Quiz! This quiz is designed to test your
          knowledge of the world's geography, including continents, countries,
          capitals, physical features, and more. Get ready to embark on a global
          adventure and test your geographical expertise. The quiz will consist
          of multiple-choice questions, where you will be presented with several
          options to choose from. Select the option you believe to be the
          correct answer and let's explore the diverse landscapes and cultures
          of our planet. Whether you are a travel enthusiast, a geography buff,
          or simply curious about the world we live in, this quiz offers an
          exciting opportunity to challenge your knowledge and discover
          interesting facts about different regions. So, grab your imaginary
          passport and get ready to explore the world. Good luck, and may your
          geographical compass guide you to success!
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

export default Quiz7