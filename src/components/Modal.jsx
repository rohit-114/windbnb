import React from "react";
import Searchbar from "./Searchbar";
import "./Modal.css";

function Modal(props) {
  return (
    <React.Fragment>
      <div
        className="backdrop"
        onClick={() => {
          props.onClick(false);
        }}
      />
      <div className="modal">
        <button
          className="close"
          onClick={() => {
            props.onClick(false);
          }}
        >
          X
        </button>
        <Searchbar
          location={props.location}
          handleClick={props.handleClick}
          modal={props.modal}
          width={"75%"}
          buttonClick={props.buttonClick}
        />
      </div>
    </React.Fragment>
  );
}

export default Modal;
