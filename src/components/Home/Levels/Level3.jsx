import React, { useState, useEffect } from "react";
import q from "../../../assets/men/q.jpg";
import m1 from "../../../assets/men/1.jpeg";
import m2 from "../../../assets/men/2.jpg";
import m3 from "../../../assets/men/3.jpeg";
import m4 from "../../../assets/men/4.jpeg";
import m5 from "../../../assets/men/5.jpg";
import m6 from "../../../assets/men/6.jpg";
import m7 from "../../../assets/men/7.jpeg";
import m8 from "../../../assets/men/8.jpeg";

import "../game.css";
import Pic from "../Pic";

const Level3 = ({ setLevel, score, setScore }) => {
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
      setScore(score + 15);
      setHideImg1(flipped[flipped.length - 1]);
      setHideImg2(flipped[flipped.length - 2]);
    }
    // console.log(hideImg);
  }, [flipped, clicked]);
  useEffect(() => {
    if (score >= 190) setLevel(4);
    else setLevel(3);
  }, [score]);
  return (
    <>
      <h1>
        Level <span style={{ color: "red" }}>3</span>
      </h1>
      <div className="d-flex align-items-center flex-column">
        <h1>
          Score <span style={{ color: "red" }}>{score}</span>
        </h1>
        <div className="d-flex game-area">
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
            src={showAll ? m3 : clicked == "m3" ? m3 : q}
            imgClick={() => flipImg("m3")}
            imgStyle={{
              visibility:
                hideImg1 === "m3" || hideImg2 === "m3" ? "hidden" : "s",
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
            src={showAll ? m5 : clicked == "m5" ? m5 : q}
            imgClick={() => flipImg("m5")}
            imgStyle={{
              visibility:
                hideImg1 === "m5" || hideImg2 === "m5" ? "hidden" : "s",
            }}
          />
          <Pic
            src={showAll ? m4 : clicked == "m4" ? m4 : q}
            imgClick={() => flipImg("m4")}
            imgStyle={{
              visibility:
                hideImg1 === "m4" || hideImg2 === "m4" ? "hidden" : "s",
            }}
          />
          <Pic
            src={showAll ? m3 : clicked == "m30" ? m3 : q}
            imgClick={() => flipImg("m30")}
            imgStyle={{
              visibility:
                hideImg1 === "m30" || hideImg2 === "m30" ? "hidden" : "s",
            }}
          />
          <Pic
            src={showAll ? m5 : clicked == "m50" ? m5 : q}
            imgClick={() => flipImg("m50")}
            imgStyle={{
              visibility:
                hideImg1 === "m50" || hideImg2 === "m50" ? "hidden" : "s",
            }}
          />
          <Pic
            src={showAll ? m6 : clicked == "m6" ? m6 : q}
            imgClick={() => flipImg("m6")}
            imgStyle={{
              visibility:
                hideImg1 === "m6" || hideImg2 === "m6" ? "hidden" : "s",
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
          <Pic
            src={showAll ? m4 : clicked == "m40" ? m4 : q}
            imgClick={() => flipImg("m40")}
            imgStyle={{
              visibility:
                hideImg1 === "m40" || hideImg2 === "m40" ? "hidden" : "s",
            }}
          />
          <Pic
            src={showAll ? m7 : clicked == "m7" ? m7 : q}
            imgClick={() => flipImg("m7")}
            imgStyle={{
              visibility:
                hideImg1 === "m7" || hideImg2 === "m7" ? "hidden" : "s",
            }}
          />
          <Pic
            src={showAll ? m8 : clicked == "m8" ? m8 : q}
            imgClick={() => flipImg("m8")}
            imgStyle={{
              visibility:
                hideImg1 === "m8" || hideImg2 === "m8" ? "hidden" : "s",
            }}
          />
          <Pic
            src={showAll ? m6 : clicked == "m60" ? m6 : q}
            imgClick={() => flipImg("m60")}
            imgStyle={{
              visibility:
                hideImg1 === "m60" || hideImg2 === "m60" ? "hidden" : "s",
            }}
          />
          <Pic
            src={showAll ? m7 : clicked == "m70" ? m7 : q}
            imgClick={() => flipImg("m70")}
            imgStyle={{
              visibility:
                hideImg1 === "m70" || hideImg2 === "m70" ? "hidden" : "s",
            }}
          />
          <Pic
            src={showAll ? m8 : clicked == "m80" ? m8 : q}
            imgClick={() => flipImg("m80")}
            imgStyle={{
              visibility:
                hideImg1 === "m80" || hideImg2 === "m80" ? "hidden" : "s",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Level3;
