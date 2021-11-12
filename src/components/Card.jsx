import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="card">
      <div className="image-container">
        <img className="image" src={props.source} alt="" />
      </div>

      <div className="container">
        {props.superhost && <p className="super-host">Super Host</p>}
        <div
          className="p-container"
          style={{ width: !props.superhost && "100%" }}
        >
          <p>{props.type}</p>
          <div className="rating">
            <span className="material-icons-round star-icon">star</span>
            <p>{props.rating}</p>
          </div>
        </div>
      </div>

      <h4>{props.title}</h4>
    </div>
  );
}

export default Card;
