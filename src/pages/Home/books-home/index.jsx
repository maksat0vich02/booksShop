import { Link, NavLink } from "react-router-dom";
import { data } from "../../../bookKey";
import { useEffect, useState } from "react";

const Books = () => {
  const [dataone, setData] = useState([]);

  function getbookData() {
    let data = JSON.parse(localStorage.getItem("books")) || [];
    setData(data);
  }

  useEffect(() => {
    getbookData();
  }, []);

  return (
    <div>
      <book>
        <div className="container">
          <div className="book">
            <div className="books_text">
              <h1>Books</h1>
              <NavLink
                to="/read"
                style={{
                  cursor: "pointer",
                }}
              >
                View all
              </NavLink>
            </div>
            <div className="book_display">
              {data.map((el) => (
                <div className="book_div">
                  <Link to={`/book/detailBook/${el.id}`}>
                    {" "}
                    <img src={el.image} alt="img-one" />
                  </Link>
                  <h1>{el.name}</h1>
                  <p>{el.surName}</p>
                </div>
              ))}

              {dataone.map((el) => (
                <div>
                  <div className="book_div">
                    <Link to={`/book/detailBook/${el.id}`}>
                      {" "}
                      <img src={el.image} alt="" />
                    </Link>
                    <h1>{el.name}</h1>
                    <p>{el.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </book>
    </div>
  );
};

export default Books;
