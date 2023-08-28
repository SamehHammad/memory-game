import React, { useState } from "react";
import "./winner.css";
import { Button } from "react-bootstrap";
const Loser = ({
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
      <h1 className="cong">Good Luck !</h1>
      <p>You lost!</p>
      <p>
        Your Score! <span> {score}</span> $
      </p>
      <p>
        Mistakes! <span> {mistake-1}</span> 
      </p>
      <p>
        Time!
        <span style={{ color: "red" }}>
          {minEnd < 10 ? " 0" + minEnd : minEnd}
        </span>{" "}
        :
        <span style={{ color: "red" }}>
          {" "}
          {timeEnd < 10 ? " 0" + timeEnd : timeEnd}
        </span>
      </p>

      <Button
        variant="info"
        style={{ width: "65%" }}
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

export default Loser;
