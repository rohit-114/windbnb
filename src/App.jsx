import React, { useState } from "react";
import Header from "./components/Header";
import Searchbar from "./components/Searchbar";
import Modal from "./components/Modal";
import "./App.css";
import Cardlist from "./components/Cardlist";

function App() {
  const [modalState, setModalState] = useState(false);
  const [location, setLocation] = useState("Helsinki, Finland");
  const [searchState, setSearchState] = useState(false);

  function buttonClickHandler() {
    setSearchState(true);
    setModalState(false);
  }

  function handleClick(text) {
    setLocation(text);
  }

  function modalHandler() {
    setModalState(true);
    setSearchState(false);
  }

  return (
    <div className="app">
      {modalState && (
        <Modal
          modal={modalState}
          onClick={setModalState}
          handleClick={handleClick}
          location={location}
          buttonClick={buttonClickHandler}
        />
      )}
      <div className="content">
        <div className="header-container">
          <Header />
          <div onClick={modalHandler}>
            <Searchbar location={location} />
          </div>
        </div>
        <div className="stays-text">
          <h1>Stays in Finland</h1>
          <p>12+ stays</p>
        </div>
        <Cardlist searchState={searchState} location={location} />
      </div>
    </div>
  );
}

export default App;
