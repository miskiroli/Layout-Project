import React from "react";

const Videos = () => {
  return (
    <>
      <div className="row main-container">
        <main className="col">
          <h3>Videók</h3>

          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    className="embed-responsive-item"
                    src="https://www.youtube.com/embed/Ckom3gf57Yw"
                  ></iframe>
                </div>
              </div>
              <div className="col-md-4">
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    className="embed-responsive-item"
                    src="https://www.youtube.com/embed/CD-E-LDc384"
                  ></iframe>
                </div>
              </div>
              <div className="col-md-4">
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    className="embed-responsive-item"
                    src="https://www.youtube.com/embed/E0ozmU9cJDg"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </main>
        <aside className="col-4">
          <h3>Archiv tartalom</h3>
          <ul>
            <li>Metallica-The unforgiven</li>
            <li>Metallica-Enter Sadman</li>
            <li>Metallica-Master of puppets</li>
          </ul>
        </aside>
      </div>
      <footer className="row">
        <p className="col">Footer</p>
      </footer>
    </>
  );
};

export default Videos;
