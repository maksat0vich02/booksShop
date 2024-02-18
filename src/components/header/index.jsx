import React, { useEffect } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { useMainContext } from "../../Context/MainContext";
import { NavLink, useNavigate } from "react-router-dom";

const Header = ({ pullValue }) => {
  const navigate = useNavigate();
  const { darkMode, setDarkMode } = useMainContext();
  const DarkMode = JSON.parse(localStorage.getItem("dark_mode"));
  function getLocal() {
    localStorage.setItem("dark_mode", JSON.stringify(darkMode));
  }

  useEffect(() => {
    getLocal();
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
            </nav>

            <div className="header-btn">
              <button
                onClick={() => {
                  navigate("/search");
                }}
                className="header-btn"
              >
                <input
                  onChange={(e) => pullValue(e.target.value)}
                  type="text"
                  placeholder="search . . ."
                />
              </button>
              <button className="header-btn-two">
                <FaCartShopping />
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
