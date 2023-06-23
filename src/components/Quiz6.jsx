import React, { useContext, useEffect } from 'react'
import Art from "../images/art.jpg";
import { IdContext } from './context/idcontext';
import { useNavigate } from 'react-router-dom';

const Quiz6 = ({id}) => {
  const {dispatch}=useContext(IdContext);
  const navigate=useNavigate();
  useEffect(()=>{
    console.log(id);
    dispatch({type:"CHANGE_ID",payload:id})
  },[id])
  return (
    <div className="card">
        <img src={Art} alt="" />
        <div className="card-content">
          Welcome to the Art Quiz! This quiz will test your knowledge of various
          art forms, famous artists, artistic movements, and artistic
          techniques. Get ready to immerse yourself in the vibrant and creative
          world of art. The quiz will consist of multiple-choice questions,
          where you will be presented with different options to choose from.
          Select the option you believe to be the correct answer and let's
          explore the captivating realm of art together. Whether you are an art
          aficionado, an aspiring artist, or simply appreciate the beauty and
          expression of art, this quiz provides an opportunity to challenge your
          understanding and learn interesting facts about renowned artists and
          their works. So, grab your paintbrush or your critical eye and let's
          delve into the realm of artistic brilliance. Good luck, and may your
          artistic knowledge shine brightly!
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

export default Quiz6