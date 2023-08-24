import React from "react";
import "./winner.css"
const Winner = ({ score }) => {
  return (
    <div className="winner-congratulations">
    <h1 className="cong">Congratulations!</h1>
    <p>You are the winner!</p>
          <p>Your Score! <span>{score }</span></p>
  </div>
  );
};

export default Winner;
