import React, { useEffect, useState } from "react";
import "./basker.css";
import { useMainContext } from "../../../Context/MainContext";

const Basket = () => {
  const [orders, setOrders] = useState([]);
  const { basket, setBasket } = useMainContext();

  function orderDeletedata(id) {
    let orderStorage = JSON.parse(localStorage.getItem("order")) || [];
    orderStorage = orderStorage.filter((el) => el.id !== id);
    localStorage.setItem("order", JSON.stringify(orderStorage));
    getOrderStorage();
  }

const Basket = () => {
  const [orders, setOrders] = useState([]);
  function getOrderStorage() {
    let orderStorage = JSON.parse(localStorage.getItem("order")) || [];
    setOrders(orderStorage);
    localStorage.setItem("order", JSON.stringify(orderStorage));
  }
  useEffect(() => {
    getOrderStorage();
  }, []);

  return (
    <div>
      <basket>
        <div className="container">
          <div className="basket">
            {orders.map((el) => (
              <div>
                <div className="basket-data">
                  <img src={el.image} alt="" />
                  <div className="basket-all">
                    <div className="basket-text">
                      <h1>{el.name}</h1>
                      <p>{el.price}$</p>
                    </div>

                    <div className="basket-btn">
                      <button
                        onClick={() => orderDeletedata(el.id)}
                        className="basket-delete"
                      >
                        delete
                      </button>
                      <div className="plus-div">
                        <button
                          onClick={() => {
                            if (basket > 1) {
                              return setBasket(basket - 1);
                            }
                          }}
                        >
                          -
                        </button>
                        <p>{basket}</p>
                        <button
                          onClick={() => {
                            setBasket(basket + 1);
                          }}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <img src={el.image} alt="" />
                <h1>{el.name}</h1>
              </div>
            ))}
          </div>
        </div>
      </basket>
    </div>
  );
};

export default Basket;
