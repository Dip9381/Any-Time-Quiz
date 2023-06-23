import React, { useContext } from "react";
import Nature from "../images/nature.jpg";
import Sport from "../images/sport.jpg";
import Computer from "../images/computer.jpeg";
import History from "../images/history.jpeg";
import GK from "../images/GK.jpeg";
import Art from "../images/art.jpg";
import Geo from "../images/geography.jpeg";
import Anime from "../images/anime.jpeg";
import Vehicle from "../images/vehicle.jpeg";
import Music from "../images/music.jpeg";
import { IdContext } from "./context/idcontext";
import { useNavigate } from "react-router-dom";
const Default = () => {
  const {dispatch}=useContext(IdContext);
  const navigate=useNavigate();
  const onstart=(id)=>{
    console.log(id);
    dispatch({type:"CHANGE_ID",payload:id})
    navigate('/quiz');
  }
  return (
    <>
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
            <button onClick={()=>onstart(17)}>Start</button>
            <div>
              Time limit: 5 Min <i className="fa-solid fa-clock"></i>
            </div>
          </div>
        </div>
      </div>
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
            <button onClick={()=>onstart(21)}>Start</button>
            <div>
              Time limit: 5 Min <i className="fa-solid fa-clock"></i>
            </div>
          </div>
        </div>
      </div>
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
            <button onClick={()=>onstart(18)}>Start</button>
            <div>
              Time limit: 5 Min <i className="fa-solid fa-clock"></i>
            </div>
          </div>
        </div>
      </div>
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
            <button onClick={()=>onstart(23)}>Start</button>
            <div>
              Time limit: 5 Min <i className="fa-solid fa-clock"></i>
            </div>
          </div>
        </div>
      </div>
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
            <button onClick={()=>onstart(9)}>Start</button>
            <div>
              Time limit: 5 Min <i className="fa-solid fa-clock"></i>
            </div>
          </div>
        </div>
      </div>
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
            <button onClick={()=>onstart(25)}>Start</button>
            <div>
              Time limit: 5 Min <i className="fa-solid fa-clock"></i>
            </div>
          </div>
        </div>
      </div>
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
            <button onClick={()=>onstart(22)}>Start</button>
            <div>
              Time limit: 5 Min <i className="fa-solid fa-clock"></i>
            </div>
          </div>
        </div>
      </div>
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
            <button onClick={()=>onstart(31)}>Start</button>
            <div>
              Time limit: 5 Min <i className="fa-solid fa-clock"></i>
            </div>
          </div>
        </div>
      </div>
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
            <button onClick={()=>onstart(28)}>Start</button>
            <div>
              Time limit: 5 Min <i className="fa-solid fa-clock"></i>
            </div>
          </div>
        </div>
      </div>
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
            <button onClick={()=>onstart(12)}>Start</button>
            <div>
              Time limit: 5 Min <i className="fa-solid fa-clock"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Default;
