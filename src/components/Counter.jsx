import React from "react";
import "./Counter.css";

function Counter(props) {
  function clickHandler(event) {
    if (event.target.name === "subtract") {
      props.setGuests((previousGuests) => {
        return previousGuests === 0 ? 0 : previousGuests - 1;
      });
    } else {
      props.setGuests((previousGuests) => {
        return previousGuests + 1;
      });
    }
  }

  return (
    <React.Fragment>
      <h5>{props.title}</h5>
      <p className="age">{props.subtitle}</p>
      <div className="button-container">
        <button name="subtract" onClick={clickHandler}>
          -
        </button>
        <p>{props.guests}</p>
        <button name="add" onClick={clickHandler}>
          +
        </button>
      </div>
    </React.Fragment>
  );
}

export default Counter;
