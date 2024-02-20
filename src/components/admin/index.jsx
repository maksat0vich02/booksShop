import React, { useState } from "react";
import "./admin.css";
import { Navigate, useNavigate } from "react-router-dom";

const Admin = () => {
  const [img, setImage] = useState("");
  const [name, setName] = useState("");
  const [praice, setPrice] = useState("");

  const nav = useNavigate();

  function getdataHome() {
    let obj = {
      img,
      name,
      praice,
      id: Date.now(),
    };
    let data = JSON.parse(localStorage.getItem("book")) || [];
    data.push(obj);
    localStorage.setItem("book", JSON.stringify(data));
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

                placeholder="surname"
              />
              <button
                onClick={() => {
                  nav("/books");
                placeholder="priceBook"
              />
              <button
                onClick={() => {
                  getdataHome();
                  nav("/books");
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
