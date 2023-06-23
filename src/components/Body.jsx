import React from "react";
import Default from './Default.jsx';
import Quiz1 from './Quiz1.jsx';
import Quiz2 from './Quiz2.jsx';
import Quiz3 from './Quiz3.jsx';
import Quiz4 from './Quiz4.jsx';
import Quiz5 from './Quiz5.jsx';
import Quiz6 from './Quiz6.jsx';
import Quiz7 from './Quiz7.jsx';
import Quiz8 from './Quiz8.jsx';
import Quiz9 from './Quiz9.jsx';
import Quiz10 from './Quiz10.jsx';
import { useNavigate } from 'react-router-dom'

const Body = ({category}) => {
  const navigate=useNavigate();

  return (
    <>
        
      <div id="main">
        {category === '' && <Default/>}
        {category.category ==='Science & Nature' && <Quiz1 id={category.id}/>}
        {category.category ==='Sports' && <Quiz2 id={category.id}/>}
        {category.category ==='Computers' && <Quiz3 id={category.id}/>}
        {category.category ==='History' && <Quiz4 id={category.id}/>}
        {category.category ==='General Knowledge' && <Quiz5 id={category.id}/>}
        {category.category ==='Art' && <Quiz6 id={category.id}/>}
        {category.category ==='Geography' && <Quiz7 id={category.id}/>}
        {category.category ==='Japanese Anime and Manga' && <Quiz8 id={category.id}/>}
        {category.category ==='Vehicles' && <Quiz9 id={category.id}/>}
        {category.category ==='Music' && <Quiz10 id={category.id}/>}
      </div>
    </>
  );
};

export default Body;
