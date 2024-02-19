import React, { useState } from "react";
import "./admin.css";
import { Navigate, useNavigate } from "react-router-dom";

const Admin = () => {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const nav = useNavigate();

  function getdataHome() {
    let obj = {
      image,
      name,
      price,
      id: Date.now(),
    };
    let data = JSON.parse(localStorage.getItem("books")) || [];
    data.push(obj);
    localStorage.setItem("books", JSON.stringify(data));
  }

  return (
    <div>
      <admin>
        <div className="container">
          <div className="admin">
            <center>
              <h1
                style={{
                  fontSize: "40px",
                }}
              >
                Admin
              </h1>
            </center>
            <div className="boxes">
              <input
                onChange={(e) => setImage(e.target.value)}
                className="imageInput"
                type="text"
                placeholder="imgURL"
              />
              <input
                onChange={(e) => setName(e.target.value)}
                className="nameInput"
                type="text"
                placeholder="nameBook"
              />
              <input
                onChange={(e) => setPrice(e.target.value)}
                className="priceInput"
                type="text"
                placeholder="priceBook"
              />
              <button
                onClick={() => {
                  nav("/about");
                  getdataHome();
                }}
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </admin>
    </div>
  );
};

export default Admin;
