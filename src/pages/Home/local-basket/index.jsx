import React, { useEffect } from "react";
import { useState } from "react";
import "./local.css";
import { useMainContext } from "../../../Context/MainContext";
import { AiOutlineStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
const Local = () => {
  const [order, setOrder] = useState([]);
  const { count, setCount } = useMainContext();
  const [color, setColor] = useState(false);
  const navigate = useNavigate();

  function deletedata(id) {
    let data = JSON.parse(localStorage.getItem("book")) || [];
    data = data.filter((el) => el.id !== id);
    localStorage.setItem("book", JSON.stringify(data));
    getData();
  }

  function getOrderData() {
    let data = JSON.parse(localStorage.getItem("book")) || [];
    data = data[0];
    let orders = JSON.parse(localStorage.getItem("order")) || [];
    orders.push(data);
    localStorage.setItem("order", JSON.stringify(orders));
    getData();
  }

  function getData(id) {
    let data = JSON.parse(localStorage.getItem("book")) || [];
    setOrder(data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <local>
        <div className="container">
          <div className="local">
            {order.map((el) => (
              <div className="display-local">
                <div className="local-div">
                  <img src={el.img} alt="" />
                  <h1>{el.name}</h1>
                  <p>{count * 15}$</p>
                </div>

                <div className="local-right">
                  <div className="local-center">
                    <h3>
                      оценки:{" "}
                      <AiOutlineStar
                        style={{ color: color ? "yellow" : "" }}
                        onClick={() => {
                          setColor(!false);
                        }}
                      />
                      <AiOutlineStar
                        style={{ color: color ? "yellow" : "" }}
                        onClick={() => {
                          setColor(!false);
                        }}
                      />
                      <AiOutlineStar />
                      <AiOutlineStar />
                      <AiOutlineStar />{" "}
                    </h3>
                  </div>
                  <div className="btn-deleteTwo">
                    <button
                      onClick={() => {
                        deletedata(el.id);
                      }}
                    >
                      delete
                    </button>
                  </div>
                  <div className="btn-minus">
                    <button
                      onClick={() => {
                        if (count > 1) {
                          return setCount(count - 1);
                        }
                      }}
                    >
                      -
                    </button>
                    <p className="local-p">{count}</p>
                    <button
                      onClick={() => {
                        setCount(count + 1);
                      }}
                    >
                      +
                    </button>
                    <button
                      onClick={() => {
                        getOrderData();
                        navigate("/basket");
                      }}
                    >
                      basket
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </local>
    </div>
  );
};

export default Local;
