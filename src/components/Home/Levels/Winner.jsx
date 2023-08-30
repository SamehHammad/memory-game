import React, { useState } from "react";
import "./winner.css";
import { Button } from "react-bootstrap";
const Winner = ({
  score,
  timer,
  min,
  setLevel,
  setScore,
  setSeconds,
  setMinutes,
  mistake,
  setMistake,
}) => {
  const [timeEnd, setTimeEnd] = useState(timer);
  const [minEnd, setminEnd] = useState(min);
  return (
    <div className="winner-congratulations">
      <h1 className="cong">Congratulations!</h1>
      <p>You win!</p>
      <p>
        Your Score! <span style={{ color: "green" }}>{score}</span> Coins
      </p>
      <p>
        Mistakes! <span style={{ color: "green" }}> {mistake}</span> $
      </p>
      <p>
        Time!
         <span style={{ color: "green" }}>{minEnd < 10 ? " 0" + minEnd : minEnd}</span> :
        <span style={{ color: "green" }}>
          {" "}
          {timeEnd < 10 ? " 0" + timeEnd : timeEnd}
        </span>
      </p>

      <Button
        
        variant="info"
        style={{ width: "45%", height: "30px", paddingTop: 0 }}
        className="d-block m-auto"
        onClick={() => {
          setLevel(1);
          setScore(0);
          setSeconds(0);
          setMinutes(0);
          setMistake(0);
        }}
      >
        New Game
      </Button>
    </div>
  );
};

export default Winner;
