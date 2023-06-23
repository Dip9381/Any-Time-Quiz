import React, { useState } from "react";
import Data from './category.json';
import { v4 as uuid } from "uuid";
const Search = ({click}) => {
  const [search,setsearch]=useState(null);
  return (
    <>
      <div id="searchbar">
        <div id="drop">
        <input
           type="text"
           name="category"
           id="category"
           placeholder="Select a category"
          onChange={(e)=>{
            setsearch(e.target.value);
            document.getElementById('drop-down').style.display='block';
          }}
        />
          <div id="drop-down">
            {
              (search===null || search.length===0) && click('')
            }
        {
          Data?.filter((val)=>{
            return search!==null && search.length!==0 && val.category.startsWith(search.charAt(0).toUpperCase()+search.slice(1));
          }).map((val,index)=>{
            return(<>
              <div className="items" onClick={(e)=>{
                click(val);
                document.getElementById('drop-down').style.display='none';
              }} key={uuid()}>{val.category}</div>
            </>)
          })
        }
        </div>
        </div>
        <input
         type="number"
         name="number"
         id="number"
         placeholder="Enter number of questions"
        />
      </div>
      
    </>
  );
};

export default Search;
