import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "../../../bookKey";
import { AiOutlineStar } from "react-icons/ai";
import { AiTwotoneMail } from "react-icons/ai";
import { useMainContext } from "../../../Context/MainContext";

const DetailBook = () => {
  const [bookHave, setBookHave] = useState([]);
  const { count, setCount } = useMainContext();

  const { id } = useParams();

  function getBookParams() {
    let arr = data.filter((el) => {
      return id == el.id;
    });
    setBookHave(arr);
  }

  useEffect(() => {
    getBookParams();
    getbookData();
  }, []);

  return (
    <div>
      <div id="detail">
        <div className="container">
          <div className="detail">
            {bookHave.map((el) => (
              <div className="detail-all">
                <div className="detail-div">
                  <img src={el.image} alt="" />
                  <h1>{el.name}</h1>
                  <p>{el.praice}</p>
                </div>
                <div className="detail-right">
                  <h1>{el.information}</h1>
                  <div className="five-div">
                    <p
                      onClick={() => {
                        <div>
                          <div className="mouseDiv">
                            <AiTwotoneMail />
                            <AiTwotoneMail />
                            <AiTwotoneMail />
                            <AiTwotoneMail />
                            <AiTwotoneMail />
                            <button>написать отзыв</button>
                          </div>
                        </div>;
                      }}
                      className="asses"
                    >
                      {el.assesment} <AiOutlineStar />
                    </p>
                    <p>
                      {el.comment} <AiTwotoneMail />
                      отзывы
                    </p>
                    <div className="btn-detail">
                      <button
                        onClick={() => {
                          if (count > 1) {
                            return setCount(count - 1);
                          }
                        }}
                      >
                        -
                      </button>
                      <p>{count}</p>
                      <button
                        onClick={() => {
                          setCount(count + 1);
                        }}
                      >
                        +
                      </button>
                      <button>basket</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {<div></div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailBook;
