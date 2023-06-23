import React, { useContext, useEffect } from 'react'
import Vehicle from "../images/vehicle.jpeg";
import { IdContext } from './context/idcontext';
import { useNavigate } from 'react-router-dom';

const Quiz9 = ({id}) => {
  const {dispatch}=useContext(IdContext);
  const navigate=useNavigate();
  useEffect(()=>{
    console.log(id);
    dispatch({type:"CHANGE_ID",payload:id})
  },[id])
  return (
    <div className="card">
        <img src={Vehicle} alt="" />
        <div className="card-content">
          Welcome to the Vehicles Quiz! This quiz is designed to test your
          knowledge of various vehicles, including cars, motorcycles, airplanes,
          ships, and more. Get ready to rev your engines and soar through the
          world of transportation. The quiz will consist of multiple-choice
          questions, where you will be presented with several options to choose
          from. Select the option you believe to be the correct answer and let's
          explore the fascinating world of vehicles together. Whether you are a
          car enthusiast, an aviation lover, or simply interested in the
          mechanics of transportation, this quiz offers an opportunity to
          challenge your knowledge and learn interesting facts about different
          types of vehicles. So, fasten your seatbelts, put on your pilot hat,
          or grab your captain's wheel, and let's embark on a thrilling journey
          through the world of vehicles. Good luck, and may your knowledge drive
          you to success!
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

export default Quiz9