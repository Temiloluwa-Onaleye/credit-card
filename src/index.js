import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function CreditCard({ cardInfo }) {
  cardInfo = {
    name: "TEMILOLUWA J. ONALEYE",
    number: 1234567887654321,
    bank: "Big Bank, Inc.",
    expiry: "08 / 19",
  };
  return (
    <div className="creditCard">
      <div className="creditCard__header">
        <header>
          <h1>{cardInfo.bank}</h1>
        </header>
      </div>
      <div className="creditCard__number">
        <span>1234</span>
        <span>5678</span>
        <span>8765</span>
        <span>4321</span>
        <br />
        <small className="creditCard__numberSmall">1234</small>
        <p>
          <small>VALID</small>
          <br />
          <small>THRU</small>
          {cardInfo.expiry}
        </p>
      </div>
      <div className="creditCard__name">{cardInfo.name}</div>
    </div>
  );
}

ReactDOM.render(<CreditCard cardInfo />, document.querySelector("#root"));
