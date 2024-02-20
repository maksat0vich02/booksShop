import React, { useEffect, useState } from "react";
import { useMainContext } from "../../../Context/MainContext";
import { AiOutlineStar } from "react-icons/ai";

const Basket = () => {
  const [basket, setBasket] = useState([]);
  const { count, setCount } = useMainContext();
  const [color, setColor] = useState(false);

  function removeBasketData(id) {
    let orders = JSON.parse(localStorage.getItem("order")) || [];
    orders = orders.filter((el) => el.id !== id);
    localStorage.setItem("order", JSON.stringify(orders));
    getBasketData();
  }

  function getBasketData() {
    let orders = JSON.parse(localStorage.getItem("order")) || [];
    setBasket(orders);
  }

  useEffect(() => {
    getBasketData();
  }, []);

  return (
    <div>
      <basket>
        <div className="container">
          <div className="basket">
            {basket.map((el) => (
              <div>
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
                          removeBasketData(el.id);
                        }}
                      >
                        delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </basket>
    </div>
  );
};

export default Basket;
