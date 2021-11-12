import React from "react";
import Card from "./Card";
import Stays from "../stays.json";
import "./Cardlist.css";

function Cardlist(props) {
  const location = props.location.split(",")[0];

  return (
    <div className="cardlist">
      {Stays.filter((stay) =>
        props.searchState ? stay.city === location : stay.country === "Finland"
      ).map((stay, index) => {
        return (
          <Card
            key={index}
            source={stay.photo}
            type={stay.type}
            rating={stay.rating}
            title={stay.title}
            superhost={stay.superHost}
          />
        );
      })}
    </div>
  );
}

export default Cardlist;
