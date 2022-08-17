import React from "react";
import "./home.css";

const Home = (props) => {
  // console.log(props.name);
  return (
    <div className="home-page">
      <div className="black">
        <div className="container">
          <p className="para">Better digital experience with Presento</p>
          <p className="para-2">
            We are team of talented designers making websites with Bootstrap
          </p>
          <div className = 'btn-align'>
          <button type="button" className="btn-1">
            {props.name}
          </button>
          </div>
        </div>
      </div>
    </div>

  );
};
export default Home;
