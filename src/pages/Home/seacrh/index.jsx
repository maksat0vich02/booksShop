import React, { useEffect, useState } from "react";
import { data } from "../../../bookKey";

const Search = ({ getPush }) => {
  console.log(getPush);
  const [bookSearch, setBOokSearch] = useState([]);
  function getSearch() {
    setBOokSearch(data);
  }

  let arr = bookSearch.filter((el) => {
    return el.name.toLowerCase() == getPush;
  });

  useEffect(() => {
    getSearch();
  }, [arr]);
  return (
    <div>
      <search>
        <div className="container">
          <div className="search">
            {
              arr.map((el) => (
                <div className="bookShow">
                  <img src={el.image} alt="" />
                  <h1>{el.name}</h1>
                  <p>{el.surName}</p>
                </div>
              ))
            
            }
          </div>
        </div>
      </search>
    </div>
  );
};

export default Search;
