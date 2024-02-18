import React from "react";
import HomeGenres from "./HomeGenres";
import NewBook from "./NewBook";
import Books from "./books-home";
import About from "./about";

const Home = () => {
  return (
    <>
      <section>
        <div
          id="home"
          style={{
            background:
              " URl(https://s3-alpha-sig.figma.com/img/8349/5572/98f1103d0d2b49aa6f5a81e024091169?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mFVzQ7xmFVQQPz~MQvQlYTf4lmC887hedQQDXeoJ1TQk1BtJ4xm1Xr3~TxKvyqtLeLDXJHOeoNS9yjbzS3PbVh1dcPR~ww8SurO3Uq8bwiGbh8FvTFAhYUT3K18mE8c3xdMyTDh7lc-u4rDvZ5jADnYPJs6TJbIEnd1drtY-M6Pkyi84MVPRJUJUASL1hdQ26cm9fDo2hWwbitChNsWUMJMst-BVPhFJsPaQDRb1Qo4IKfRmDpcGG~-XEk-8wrHUWkArtcLK-KrmB51hfmgRfiu7SjJWLlH4qFVcDYbi0dVwQiFNLjYsFoMmU-iIKFh83UE7tZP4L6cK4o1l2DWcwg__) no-repeat center/cover",
            width: "100%",
            height: "100vh",
          }}
        >
          <div className="container">
            <div className="home">
              <h1>Welcome to our Bookshop</h1>
              <p>A place where you can get all the books you want!</p>
            </div>
          </div>
        </div>
      </section>
      <HomeGenres />
      <NewBook />
      <Books />
      <About />
    </>
  );
};

export default Home;
