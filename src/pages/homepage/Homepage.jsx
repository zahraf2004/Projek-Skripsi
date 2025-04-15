import React from "react";
import Header2 from "../../component/header2";
import "../homepage/Homepage.css";
import Banner from "../../component/banner";
import Header from "../../component/header";

// Homepage.js
function Homepage() {
  return(
    <div className="home-container">
      <Header2 />
      <Banner/>
      <main className="main-content">
        <h1>Selamat Datang di Klinik Dr. Yanti</h1>
      </main>
    </div>
  )
}

export default Homepage;
