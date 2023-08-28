import React, { useEffect, useState } from "react";
import Level1 from "./Levels/Level1";
import Level3 from "./Levels/Level3";
import Level2 from "./Levels/Level2";
import Level4 from "./Levels/Level4";
import Level5 from "./Levels/Level5";
import Level6 from "./Levels/Level6";
import Level7 from "./Levels/Level7";
import Level8 from "./Levels/Level8";
import Level9 from "./Levels/Level9";
import Level10 from "./Levels/Level10";
import Winner from "./Levels/Winner";
import Loser from "./Levels/Loser";

const Levels = () => {
  const [Level, setLevel] = useState(5);
  const [score, setScore] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [mistake, setMistake] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds + 1);
      convertToMin();
    }, 1000);
    return () => clearInterval(interval);
  }, [seconds]);
  const convertToMin = () => {
    if (seconds == 59) {
      setMinutes(minutes + 1);
      setSeconds(0);
    }
  };

  if (Level == 1)
    return (
      <Level1
        setLevel={setLevel}
        score={score}
        setScore={setScore}
        timer={seconds}
        min={minutes}
        mistake={mistake}
        setMistake={setMistake}
      />
    );
  if (Level == 2)
    return (
      <Level2
        setLevel={setLevel}
        score={score}
        setScore={setScore}
        timer={seconds}
        min={minutes}
        mistake={mistake}
        setMistake={setMistake}
      />
    );
  if (Level == 3)
    return (
      <Level3
        setLevel={setLevel}
        score={score}
        setScore={setScore}
        timer={seconds}
        min={minutes}
        mistake={mistake}
        setMistake={setMistake}
      />
    );
  if (Level == 4)
    return (
      <Level4
        setLevel={setLevel}
        score={score}
        setScore={setScore}
        timer={seconds}
        min={minutes}
        mistake={mistake}
        setMistake={setMistake}
      />
    );
  if (Level == 5)
    return (
      <Level5
        setLevel={setLevel}
        score={score}
        setScore={setScore}
        timer={seconds}
        min={minutes}
        mistake={mistake}
        setMistake={setMistake}
      />
    );
  if (Level == 6)
    return (
      <Level6
        setLevel={setLevel}
        score={score}
        setScore={setScore}
        timer={seconds}
        min={minutes}
        mistake={mistake}
        setMistake={setMistake}
      />
    );
  if (Level == 7)
    return (
      <Level7
        setLevel={setLevel}
        score={score}
        setScore={setScore}
        timer={seconds}
        min={minutes}
        mistake={mistake}
        setMistake={setMistake}
      />
    );
  if (Level == 8)
    return (
      <Level8
        setLevel={setLevel}
        score={score}
        setScore={setScore}
        timer={seconds}
        min={minutes}
      />
    );
  if (Level == 9)
    return (
      <Level9
        setLevel={setLevel}
        score={score}
        setScore={setScore}
        timer={seconds}
        min={minutes}
      />
    );
  if (Level == 10)
    return (
      <Level10
        setLevel={setLevel}
        score={score}
        setScore={setScore}
        timer={seconds}
        min={minutes}
      />
    );
  if (Level == 11)
    return (
      <Winner
        setLevel={setLevel}
        score={score}
        setScore={setScore}
        setSeconds={setSeconds}
        setMinutes={setMinutes}
        timer={seconds}
        min={minutes}
        mistake={mistake}
        setMistake={setMistake}
      />
    );
  if (Level == 12)
    return (
      <Loser
        setLevel={setLevel}
        score={score}
        setScore={setScore}
        setSeconds={setSeconds}
        setMinutes={setMinutes}
        timer={seconds}
        min={minutes}
        mistake={mistake}
        setMistake={setMistake}
      />
    );
};

export default Levels;
