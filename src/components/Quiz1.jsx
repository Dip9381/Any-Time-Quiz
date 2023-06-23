import React, {useEffect ,useContext} from 'react'
import Nature from "../images/nature.jpg";
import { IdContext } from './context/idcontext';
import { useNavigate } from 'react-router-dom';
const Quiz1 = ({id}) => {
  const {dispatch}=useContext(IdContext);
  const navigate=useNavigate();
  useEffect(()=>{
    console.log(id);
    dispatch({type:"CHANGE_ID",payload:id})
  },[id])
  return (
    <div className="card">
        <img src={Nature} alt="" />
        <div className="card-content">
          Welcome to the Science and Nature Quiz! This quiz is designed to test
          your knowledge about various scientific disciplines and the natural
          world. Prepare to explore the realms of biology, physics, chemistry,
          astronomy, environmental science, and more. The quiz consists of a
          series of multiple-choice questions, where you will be provided with
          several options to choose from. Select the option you believe to be
          the correct answer and let's see how well you can navigate through the
          fascinating world of science and nature. Whether you are a science
          enthusiast, a student, or simply curious about the wonders of the
          universe, this quiz offers an exciting opportunity to challenge your
          understanding and learn something new along the way. Get ready to
          engage your brain and embark on a thrilling journey of discovery.
          <div>
            <button onClick={()=>{
             navigate('/quiz');
            }}>Start</button>
            <div>
              Time limit: 5 Min <i className="fa-solid fa-clock"></i>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Quiz1