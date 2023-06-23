import React, { useContext, useEffect } from 'react'
import Music from "../images/music.jpeg";
import { IdContext } from './context/idcontext';
import { useNavigate } from 'react-router-dom';

const Quiz10 = ({id}) => {
  const {dispatch}=useContext(IdContext);
  const navigate=useNavigate();
  useEffect(()=>{
    console.log(id);
    dispatch({type:"CHANGE_ID",payload:id})
  },[id])
  return (
    <div className="card">
        <img src={Music} alt="" />
        <div className="card-content">
          Welcome to the Music Quiz! This quiz is designed to test your
          knowledge of various music genres, famous musicians, iconic songs, and
          musical history. Get ready to tune in and put your musical expertise
          to the test. The quiz will consist of multiple-choice questions, where
          you will be presented with several options to choose from. Select the
          option you believe to be the correct answer and let's explore the
          diverse world of music together. Whether you are a music aficionado, a
          dedicated musician, or simply someone who enjoys the power of melody
          and rhythm, this quiz offers an opportunity to challenge your
          knowledge and discover interesting facts about different genres and
          artists. So, warm up your vocal cords, tap your feet to the beat, and
          let's hit all the right notes in this musical journey. Good luck, and
          may your answers strike a harmonious chord!
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

export default Quiz10