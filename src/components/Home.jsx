import React from "react";
import tacsko from "../assets/tacskó.jpg";
import auto1 from "../assets/auto1.jpg";
import auto2 from "../assets/auto2.jpg";
const Home = () => {
  return (
    <>
      <div className="row main-container">
        <main className="col ">
          <h3>Videók</h3>

          <div className="container">
            <div className="row">
              <div className="col-md-4 ">
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    className="embed-responsive-item"
                    src="https://www.youtube.com/embed/Ckom3gf57Yw"
                  ></iframe>
                </div>
              </div>
              <div className="col-md-4 ">
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    className="embed-responsive-item"
                    src="https://www.youtube.com/embed/CD-E-LDc384"
                  ></iframe>
                </div>
              </div>
              <div className="col-md-4 ">
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    className="embed-responsive-item"
                    src="https://www.youtube.com/embed/E0ozmU9cJDg"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          <h3>Képek</h3>
          <div className="container">
            <div className="row">
              <div className="col-md-4 ">
                <div className="image-container">
                  <img src={tacsko} alt="Szálkásszőrű tacskó" />
                </div>
              </div>
              <div className="col-md-4 ">
                <div className="image-container">
                  <img src={auto1} alt="Piros Auto" />
                </div>
              </div>
              <div className="col-md-4 ">
                <div className="image-container">
                  <img src={auto2} alt="Kék Auto" className="image-fluid" />
                </div>
              </div>
            </div>
          </div>
        </main>
        <aside className="col-md-4">
          <h3>Archiv tartalom</h3>
          <ul>
            <li>Metallica-The unforgiven</li>
            <li>Metallica-Enter Sadman</li>
            <li>Metallica-Master of puppets</li>
            <li>Kedvenc kutyám</li>
            <li>Autóm 1</li>
            <li>Autóm 2</li>
          </ul>
        </aside>
        <footer className="row">
          <p className="col">Footer</p>
        </footer>
      </div>
    </>
  );
};

export default Home;
