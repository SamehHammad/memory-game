import React, { useState, useEffect } from "react";
import q from "../../../assets/mobs/q.jpg";
import m1 from "../../../assets/mobs/1.jpg";
import m2 from "../../../assets/mobs/2.jpg";
import "../game.css";
import Pic from "../Pic";

const Level1 = ({ setLevel, score, setScore, timer,min }) => {
  const [clicked, setClicked] = useState();
  const [flipped, setFlipped] = useState([]);
  const [hideImg1, setHideImg1] = useState("");
  const [hideImg2, setHideImg2] = useState("");
  const [showAll, setShowAll] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowAll(false);
    }, 2000);
  }, []);

  const flipImg = (m) => {
    setClicked(m);
    flipped.push(m);
  };
  useEffect(() => {
    if (
      flipped[flipped.length - 1] === flipped[flipped.length - 2] + "0" ||
      flipped[flipped.length - 1] + "0" === flipped[flipped.length - 2]
    ) {
      setScore(score + 5);
      setHideImg1(flipped[flipped.length - 1]);
      setHideImg2(flipped[flipped.length - 2]);
    }

    // console.log(hideImg);
  }, [flipped, clicked]);
  useEffect(() => {
    if (score >= 10) setLevel(2);
    else setLevel(1);
  }, [score]);
  return (
    <>
      <div className="d-flex justify-content-between m-5">
        <h1 className="level">
          Level <span style={{ color: "red" }}>1</span>
        </h1>{" "}
        <h1 className="score">
          Score : <span style={{ color: "red" }}>{score}</span>
        </h1>
        <h1 className="timer">
          <span style={{ color: "red" }}>{min}</span> : 
          <span style={{ color: "red" }}> {timer}</span>
        </h1>
      </div>
      <div className="d-flex align-items-center flex-column ">
        <div
          className="d-flex game-area"
          style={{ width: "150px", padding: "15px" }}
        >
          <Pic
            src={showAll ? m1 : clicked == "m1" ? m1 : q}
            imgClick={() => flipImg("m1")}
            imgStyle={{
              visibility:
                hideImg1 === "m1" || hideImg2 === "m1" ? "hidden" : "s",
            }}
          />
          <Pic
            src={showAll ? m2 : clicked == "m2" ? m2 : q}
            imgClick={() => flipImg("m2")}
            imgStyle={{
              visibility:
                hideImg1 === "m2" || hideImg2 === "m2" ? "hidden" : "s",
            }}
          />

          <Pic
            src={showAll ? m1 : clicked == "m10" ? m1 : q}
            imgClick={() => flipImg("m10")}
            imgStyle={{
              visibility:
                hideImg1 === "m10" || hideImg2 === "m10" ? "hidden" : "s",
            }}
          />

          <Pic
            src={showAll ? m2 : clicked == "m20" ? m2 : q}
            imgClick={() => flipImg("m20")}
            imgStyle={{
              visibility:
                hideImg1 === "m20" || hideImg2 === "m20" ? "hidden" : "s",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Level1;
