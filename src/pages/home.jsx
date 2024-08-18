import React from 'react';
import "../home.css";
import Navbar from "../navbar";

function Home() {
  return (
    <>
      <div className="header">
        <div>
          <img src="./tes/ebsb-logo.png" className="logo" alt="EBSB Logo"></img>
          <img src="./tes/wording.png" className="text" alt="Wording"></img>
        </div>
        <Navbar />
      </div>

      <div className="content-wrapper">
        <div className="content">
          <h1>Celebrating the Cultural Diversity of India</h1>
          <p className="home">
            Ek Bharat Shreshtha Bharat (EBSB) is a cultural extravaganza that
            brings together the rich tapestry of India's diverse cultures and
            traditions. At IIT Hyderabad, we take immense pride in celebrating
            our unity in diversity through various events and festivals that
            showcase the beauty and depth of Indian culture.
          </p>
          <div className="eventinfo">
            <div>
              <h2>Past events</h2>
              <ul>
                <li className="bullets">Holi</li>
                <li className="bullets">Ethinic Night</li>
                <li className="bullets">Makar Sankranti</li>
                <li className="bullets">Diwali</li>
                <li className="bullets">Dussehra</li>
                <li className="bullets">Onam</li>
              </ul>
            </div>
            <div>
              <h2>Upcoming events</h2>
              <ul>
                <li className="bullets">Onam</li>
                <li className="bullets">Dussehra</li>
              </ul>
            </div>
          </div>
        </div>
        <img className="hero" src="./tes/hero.png" alt="Hero Image"></img>
      </div>
    </>
  );
}

export default Home;
