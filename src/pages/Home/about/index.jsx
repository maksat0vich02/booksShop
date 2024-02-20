import React, { useEffect, useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaShoppingBasket } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const About = () => {
  // function getOrderData() {
  //   let data = JSON.parse(localStorage.getItem("books")) || [];
  //   data = data[0];
  //   let orderStorage = JSON.parse(localStorage.getItem("order")) || [];
  //   orderStorage.push(data);
  //   localStorage.setItem("order", JSON.stringify(orderStorage));
  // }

  // function deleteData(id) {
  //   let data = JSON.parse(localStorage.getItem("books")) || [];
  //   data = data.filter((el) => el.id !== id);
  //   localStorage.setItem("books", JSON.stringify(data));
  //   getbookData();
  // }

  const [product, setProduct] = useState([]);
  const navigate = useNavigate();

  function getOrderData(index) {
    let data = JSON.parse(localStorage.getItem("books")) || [];
    data = data[0];
    let orderStorage = JSON.parse(localStorage.getItem("order")) || [];
    orderStorage.push(data);
    localStorage.setItem("order", JSON.stringify(orderStorage));
  }

  function deleteData(id) {
    let data = JSON.parse(localStorage.getItem("books")) || [];
    data = data.filter((el) => el.id !== id);
    localStorage.setItem("books", JSON.stringify(data));
    getbookData();
  }

  function getbookData() {
    let data = JSON.parse(localStorage.getItem("books")) || [];
    setProduct(data);
  }
  console.log(product);

  useEffect(() => {
    getbookData();
  }, []);
  return (
    <div>
      <about>
        <div className="container">
          <div className="about">
            <h1>About Us</h1>
            <div className="about_all">
              <div className="about-left">
                <img
                  src="https://s3-alpha-sig.figma.com/img/64de/bfb8/2fa9ba3a6b9e3b3e631264c7305409ba?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XY~ULMvF-m5vXji0sbKO-WFzG~AQHJ6-1NnBcS3yxa4pRGmdMXeSQNp5rYG2Hhckul1Iz9W1wj2i36tYi8Auop~uZenQIre5CdU16Sua4CR~k5hiY16GgyEYC2a6QvbFussJtD7z6W5L6rm0k3gNAo9KglGTCn1w4XNDzJSj0mM88W9hs-oxvAkOB0hpvGu5oX9y-hSOTmn1ZRfCFQZud-ip5MpdcCUi-JppPxSBXZ8-56oRPR5rAaLm8astAOJlMfo3n5pMZlChO8Zd~g20ZLiLfS6SBCxJrKSew71sYJSFs3lbNupfc2w9OXqDurqPeoIdYHx~OUk1C8LvXz7XgQ__"
                  alt=""
                />
              </div>
              <div className="about-right">
                <p>
                  We believe that books have the power to change lives, and{" "}
                  <br />
                  we're dedicated to helping our customers find the perfect{" "}
                  <br /> book for them. Whether you're looking for an escape
                  from <br /> reality, an educational read, or a book to inspire
                  you, we've <br /> got you covered. <br /> <br />
                  Thank you for choosing to shop with us. We look forward to{" "}
                  <br />
                  helping you discover your next favorite book!
                </p>
              </div>
            </div>
            <div className="book-get"></div>
          </div>
        </div>
      </about>
    </div>
  );
};

export default About;
