import React, { useEffect } from "react";
import Heading from "./Heading.jsx";
import Search from "./Search.jsx";
import Body from "./Body.jsx";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Quiz from "./Quiz.jsx";
import { useContext } from "react";
import { IdContext } from "./context/idcontext.jsx";
const Main = () => {
  const [categ, setcateg] = useState("");
  const handlecategory = (ele) => {
    setcateg(ele);
  };
  const {data} = useContext(IdContext);
  useEffect(()=>{
    console.log(data);
  },[data])
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Heading />
                <Search click={handlecategory} />
                <Body category={categ}/>
              </>
            }
          ></Route>
            {/* {console.log(quizid)} */}
          <Route path={"/quiz"} element={
            <>
            <Heading />
          <Quiz/>
            </>}>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Main;
