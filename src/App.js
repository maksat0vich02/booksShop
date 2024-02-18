import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { useMainContext } from "./Context/MainContext";
import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./pages/Home";
import Read from "./pages/Home/book-all/read";
import Search from "./pages/Home/seacrh";
import DetailBook from "./pages/Home/detailBook";

function App() {
  const { darkMode } = useMainContext();
  const [getPull, setGetPull] = useState("");

  return (
    <div
      style={{
        background: darkMode ? "black" : "white",
        color: darkMode ? "white" : "black",
        objectFit: "cover",
        transition: "1s",
      }}
      className="App"
    >
      <Header pullValue={setGetPull} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/read" element={<Read />} />
        <Route path="/search" element={<Search getPush={getPull} />} />
        <Route path="/book/detailBook/:id" element={<DetailBook />} />
        <Route path="/book/basket/booksId" element={}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
