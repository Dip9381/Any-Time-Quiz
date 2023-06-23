import React, { useContext, useEffect, useState } from 'react'
import { IdContext } from './context/idcontext'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Quiz = () => {
  // console.log(window.location.pathname);
  const navigate=useNavigate();
  const [quiz,setquiz]=useState(null);
  const {data} = useContext(IdContext);
  // const [score,setscore]=useState(0);
  useEffect(()=>{
   axios.get('https://opentdb.com/api.php?amount=10&category='+data.id)
    .then((res)=>{
      // console.log(res.data.results);
      setquiz(res.data.results);
    })
    .catch((err)=>console.log(err));
  },[])
  let seconds=0;
  let mins=0;
  function countdown(mins,seconds){
    if(mins==5){
      check(null);
    }
    else{
      if(document.getElementById('timer')){
        document.getElementById('timer').innerHTML=(mins<10?0+''+mins:mins)+':'+(seconds<10? 0+''+seconds:seconds);
      if(seconds==59)
      setTimeout(()=>countdown(mins+1,0),1000);
      else
      setTimeout(()=>countdown(mins,seconds+1),1000);
      }
    }
  }
  
  function shuffleArray(array) {
    console.log(array)
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  const check=(e)=>{
    // e.preventDefault();
    document.getElementById('timer').style.display='none';
    let score=0;
    for(let i=0;i<quiz.length;i++){
      // console.log(document.querySelector('input[name="options'+i+'"]:checked'))
      if(document.querySelector('input[name="options'+i+'"]:checked')!==null &&document.querySelector('input[name="options'+i+'"]:checked').value===quiz[i].correct_answer){
        document.querySelector('input[name="options'+i+'"]:checked').parentNode.parentNode.style.border='blue 2px solid';
        score++;
      }
      else{
        document.querySelector('input[name="options'+i+'"]').parentNode.parentNode.style.border='red 2px solid';
      }
    }
    document.getElementById('result').style.display='block';
    document.getElementById('result').innerHTML='You have scored '+score;
  }
  // console.log()
  return (
    <>
    <button id='quit' onClick={()=>navigate('/')}><i class="fa-solid fa-arrow-left"></i>Quit</button>
    <div id='quiz'>
      <div id='timer' onLoad={countdown(mins,seconds)}>
      </div>
      {/* <center><h3>{val.category}</h3></center> */}
      {
        quiz?.map((val,index)=>{
          return(<>
          <div className='box'>
            {index+1}.{val.question} <br />
            {shuffleArray([...val.incorrect_answers,val.correct_answer])
            .map((ele,index1)=>{
              return(<>
              <p><input type="radio" name={"options"+index} className={"options"+index}  value={ele}/>
              <label htmlFor={"options"+index}>{ele}</label>
              </p>
              </>)
            })
            }
          </div>
          </>)
        })
      }
      <center><button id='submit' onClick={()=>{check()}}>submit</button>
      <div id='result'>

      </div>
      </center>
    </div>
    </>
  )
}

export default Quiz