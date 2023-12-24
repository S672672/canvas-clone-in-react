import React from "react";
import "./App.css";
import Card from './card';

function App() {
  return (
    <>
      <div className="div1">
        <div className="div2">
          <div className="sidebar">
            <p>Courses</p>
          </div>
          <div className="side">
            <p>DashBoard</p>
          </div>
          <div className="side">
            <p>About</p>
          </div>
          <div className="side">
            <p>calender</p>
          </div>
          <div className="side">
            <p>Profile</p>
          </div>
        </div>

        <div className="navbar">
          <div className="navitem">
            <div className="Icon">
              <h1>DashBoard</h1>
            </div>
            <div className="settingIcon">
              <h1>Setting</h1>
            </div>
          </div>
          <div className="bodysync">
            <Card
              header="Puti herne subject"
              subhead="subCode"
              noti="N"
              message="M"
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
