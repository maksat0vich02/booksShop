import React, { useEffect, useState } from "react";
import { data } from "../../../bookKey";

const Read = () => {
  const [books, setBooks] = useState([]);
  const [value, setValue] = useState("all");

  function Books() {
    setBooks(data);
  }
  let newArr = data.filter((el) => {
    return el.popular && el.popularName && el.popularSurname;
  });
  console.log(newArr);
  useEffect(() => {
    Books();
  }, []);
  return (
    <read>
      <div className="container">
        <div className="read">
          <div className="read-all">
            <h1>All Books</h1>
            <p>Here you can find all the books you need</p>
          </div>
          <div className="read-filter">
            <div className="filter-text">
              <h2>Filter</h2>
              <p>Clear filters</p>
            </div>
            <div className="btn-div">
              <button
                className="btnOne"
                onClick={() => {
                  setValue("all");
                }}
              >
                All-books
              </button>
              <button
                className="btnTwo"
                onClick={() => {
                  setValue("popular");
                }}
              >
                popular
              </button>
            </div>
            <div className="bookBox">
              <div className="filter-left">
                <div className="box">
                  <input className="input-one" type="checkbox" placeholder="" />
                  <p>Autographed Books</p>
                </div>
                <div className="box">
                  <input type="checkbox" />
                  <p>Sci-Fi</p>
                </div>
                <div className="box">
                  <input type="checkbox" />
                  <p>For kids</p>
                </div>
                <div className="box">
                  <input type="checkbox" />
                  <p>For teenagers</p>
                </div>
                <div className="box">
                  <input type="checkbox" />
                  <p>Finance</p>
                </div>
                <div className="box">
                  <input type="checkbox" />
                  <p>Detective</p>
                </div>
                <div className="box">
                  <input type="checkbox" />
                  <p>Romantic</p>
                </div>
                <div className="box">
                  <input type="checkbox" />
                  <p>Psychology</p>
                </div>
                <div className="box">
                  <input type="checkbox" />
                  <p>Self-Improvement</p>
                </div>
                <div className="box">
                  <input type="checkbox" />
                  <p>Educational</p>
                </div>
                <div className="box">
                  <input type="checkbox" />
                  <p>Literature</p>
                </div>
                <div className="box">
                  <input type="checkbox" />
                  <p>Religion</p>
                </div>
              </div>
              <div className="booksBlock">
                {value == "all"
                  ? books.map((el) => {
                      return (
                        <div>
                          <div className="booksShow">
                            <img src={el.image} alt="" />
                            <h1>{el.name}</h1>
                          </div>
                        </div>
                      );
                    })
                  : newArr.map((el) => (
                      <div>
                        <div className="booksShow">
                          <img src={el.image} alt="" />
                          <h1>{el.name}</h1>
                        </div>
                      </div>
                    ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </read>
  );
};

export default Read;
