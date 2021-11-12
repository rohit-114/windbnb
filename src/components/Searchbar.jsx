import React, { useState } from "react";
import "./Searchbar.css";
import Counter from "./Counter";
import Suggestion from "./Suggestion";

function Searchbar(props) {
  const [suggestions, setSuggestions] = useState(false);
  const [guestState, setGuestState] = useState(false);
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);

  function locationClickHandler() {
    setSuggestions(true);
    setGuestState(false);
  }

  function guestClickHandler() {
    setGuestState(true);
    setSuggestions(false);
  }

  function sendText(event) {
    props.handleClick(event.target.textContent);
  }

  return (
    <React.Fragment>
      <div
        style={{ width: props.modal && props.width }}
        className="searchbar-container"
      >
        <div
          className={`searchtext-container ${
            suggestions && props.modal ? "modal-border" : ""
          }`}
          style={{
            justifyContent: !props.modal ? "center" : null,
          }}
          onClick={locationClickHandler}
        >
          <div
            className="search-text"
            style={{ alignItems: !props.modal ? "center" : null }}
          >
            {props.modal && <label htmlFor="location">Location</label>}
            <p>{props.location}</p>
          </div>
          <div
            className="search-overlay"
            style={{ display: suggestions && props.modal && "block" }}
          >
            <ul>
              <Suggestion text="Helsinki, Finland" sendText={sendText} />
              <Suggestion text="Turku, Finland" sendText={sendText} />
              <Suggestion text="Vaasa, Finland" sendText={sendText} />
              <Suggestion text="Oulu, Finland" sendText={sendText} />
            </ul>
          </div>
        </div>

        <div
          className={`searchtext-container ${
            guestState && props.modal ? "modal-border" : ""
          }`}
          style={{
            justifyContent: !props.modal ? "center" : null,
          }}
          onClick={guestClickHandler}
        >
          <div className="search-text">
            {props.modal && (
              <React.Fragment>
                <label htmlFor="guests">Guests</label>
                <p>{adults + children} guests</p>
              </React.Fragment>
            )}
          </div>
          <div
            className="search-overlay"
            style={{ display: guestState && props.modal && "block" }}
          >
            <Counter
              title="Adults"
              subtitle="Ages 13 or above"
              guests={adults}
              setGuests={setAdults}
            />

            <Counter
              title="Children"
              subtitle="Ages 2-12"
              guests={children}
              setGuests={setChildren}
            />
          </div>
        </div>

        <button
          onClick={props.modal ? () => props.buttonClick() : null}
          type="submit"
          className={props.modal ? "modal-button" : "search-button"}
        >
          <span className="material-icons">search</span>
          {props.modal && "Search"}
        </button>
      </div>
    </React.Fragment>
  );
}

export default Searchbar;
