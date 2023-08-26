import React, { useState } from "react";
import "./winner.css";
import { Button } from "react-bootstrap";
const Winner = ({ score, timer, min, setLevel, setScore,setSeconds,setMinutes }) => {
  const [timeEnd, setTimeEnd] = useState(timer);
  const [minEnd, setminEnd] = useState(min);
  return (
    <div className="winner-congratulations">
      <h1 className="cong">Congratulations!</h1>
      <p>You win!</p>
      <p>
        Your Score! <span>{score}</span>$
      </p>
      <p>
        Time!
        <span style={{ color: "red" }}> {minEnd}</span> :
        <span style={{ color: "red" }}> {timeEnd}</span>
      </p>
      <Button
        variant="info"
        style={{ width: "65%" }}
        className="d-block m-auto"
        onClick={() => {
          setLevel(1);
          setScore(0);
          setSeconds(0)
          setMinutes(0)
        }}
      >
        New Game
      </Button>
    </div>
  );
};

export default Winner;
