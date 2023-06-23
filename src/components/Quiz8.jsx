import React, { useContext, useEffect } from 'react'
import Anime from "../images/anime.jpeg";
import { IdContext } from './context/idcontext';
import { useNavigate } from 'react-router-dom';

const Quiz8 = ({id}) => {
  const {dispatch}=useContext(IdContext);
  const navigate=useNavigate();
  useEffect(()=>{
    console.log(id);
    dispatch({type:"CHANGE_ID",payload:id})
  },[id])
  return (
    <div className="card">
        <img src={Anime} alt="" />
        <div className="card-content">
          Welcome to the Anime and Manga Quiz! This quiz is designed to test
          your knowledge of the fascinating world of anime and manga. Get ready
          to dive into the realm of Japanese animation and graphic novels. The
          quiz will consist of multiple-choice questions, where you will be
          presented with several options to choose from. Select the option you
          believe to be the correct answer and let's explore the vast universe
          of anime and manga together. Whether you are a dedicated anime fan, a
          manga enthusiast, or simply curious about this popular form of
          entertainment, this quiz offers an opportunity to challenge your
          knowledge and discover new series, characters, and storylines. So,
          grab your favorite anime plushie, channel your inner otaku, and let's
          embark on an anime and manga adventure. Good luck, and may your
          answers be as epic as the most thrilling anime battles!
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

export default Quiz8