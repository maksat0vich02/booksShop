import React, { useEffect, useState } from "react";
import { data } from "../../../bookKey";
import { Link } from "react-router-dom";

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
            {arr.map((el) => (
              <div className="bookShow">
                <Link to={`/book/detailBook/${el.id}`}>
                  {" "}
                  <img src={el.image} alt="" />
                </Link>

                <h1>{el.name}</h1>
                <p>{el.surName}</p>
              </div>
            ))}
          </div>
        </div>
      </search>
    </div>
  );
};

export default Search;
