import React, { useEffect, useState } from "react";

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
