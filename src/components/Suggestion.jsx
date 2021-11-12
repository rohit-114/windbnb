import React from "react";
import "./Suggestion.css";

function Suggestion(props) {
  return (
    <div className="list-container">
      <span className="material-icons room-icon">room</span>
      <li onClick={props.sendText}>{props.text}</li>
    </div>
  );
}

export default Suggestion;
