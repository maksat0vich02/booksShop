import React, { useEffect, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { useMainContext } from "../../Context/MainContext";
import { NavLink, useNavigate } from "react-router-dom";

const Header = ({ pullValue }) => {
  const [password, setPassword] = useState("");
  const [modal, setModal] = useState(false);
  const { count } = useMainContext();
  const navigate = useNavigate();
  const { darkMode, setDarkMode } = useMainContext();
  const DarkMode = JSON.parse(localStorage.getItem("dark_mode"));
  function getLocal() {
    localStorage.setItem("dark_mode", JSON.stringify(darkMode));
  }

  function passwordName() {
    if (password === "alim5010") {
      return password;
    }
  }

  console.log(password);
  useEffect(() => {
    getLocal();
    passwordName();
  }, [DarkMode]);

  return (
    <div>
      <header
        style={{
          background: darkMode ? "black" : "white",
          transition: "1s",
        }}
      >
        <div className="container">
          <div className="header">
            <nav>
              <h4>Bookshop</h4>
              <NavLink
                style={{
                  fontSize: "18px",
                  color: darkMode ? "white" : "black",
                }}
                to="/"
              >
                Home
              </NavLink>
              <a
                onClick={() => {
                  window.scroll({
                    top: 1200,
                    left: 0,
                    behavior: "smooth",
                  });
                }}
                style={{
                  color: darkMode ? "white" : "black",
                }}
                href="#"
              >
                Categories
              </a>
              <a
                style={{
                  color: darkMode ? "white" : "black",
                }}
                href="#"
              >
                Recent
              </a>
              <a
                onClick={() => {
                  window.scroll({
                    top: 2100,
                    left: 0,
                    behavior: "smooth",
                  });
                }}
                style={{
                  color: darkMode ? "white" : "black",
                }}
                href="#"
              >
                Books
              </a>
              <a
                onClick={() => {
                  window.scroll({
                    top: 3010,
                    left: 0,
                    behavior: "smooth",
                  });
                }}
                style={{
                  color: darkMode ? "white" : "black",
                }}
                href="#"
              >
                About us
              </a>
              <NavLink
                onClick={() => {
                  setModal(!modal);
                }}
              >
                Admin
              </NavLink>
            </nav>
            <div
              style={{
                transform: modal ? "scale(1)" : "scale(0)",
                transform: modal ? "translateY(500px)" : "translateY(-1000px)",
                transition: modal ? "1s" : "1s",
                display: modal ? "block" : "none",
              }}
              className="admin-blocks"
            >
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="password?..."
              />
              <button
                onClick={() => {
                  {
                    if (password == "") {
                      return alert("напишите пароль!!!");
                    } else if (password == "alim5010") {
                      navigate("/admin");
                    }
                  }
                  setModal(!modal);
                }}
              >
                add
              </button>
            </div>

            <div className="header-btn">
              <button
                onClick={() => {
                  navigate("/search");
                }}
                className="header-btn"
              >
                <input
                  onInput={(e) => pullValue(e.target.value)}
                  type="text"
                  placeholder="search . . ."
                />
              </button>
              <button
                onClick={() => {
                  navigate("/basket");
                }}
                className="header-btn-two"
              >
                <FaCartShopping /> {count}
              </button>

              <div
                onClick={() => {
                  setDarkMode(!darkMode);
                  getLocal();
                }}
                className="header_box"
              >
                <div
                  style={{
                    transform: darkMode ? "translateX(30px)" : "",
                  }}
                  className="header_travel"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
