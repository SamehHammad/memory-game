import React, { useState, useEffect } from "react";
import q from "../../../assets/dogs/q.jpg";
import m1 from "../../../assets/dogs/1.jpeg";
import m2 from "../../../assets/dogs/2.jpeg";
import m3 from "../../../assets/dogs/3.jpeg";
import m4 from "../../../assets/dogs/4.jpeg";
import m5 from "../../../assets/dogs/5.jpg";
import m6 from "../../../assets/dogs/6.jpg";
import m7 from "../../../assets/dogs/7.jpeg";
import m8 from "../../../assets/dogs/8.jpg";
import m9 from "../../../assets/dogs/9.jpeg";
import m10 from "../../../assets/dogs/10.jpg";
import m11 from "../../../assets/dogs/11.jpg";
import m12 from "../../../assets/dogs/12.jpg";

import "../game.css";
import Pic from "../Pic";
import { ClipLoader } from "react-spinners";

const Level5 = ({
  setLevel,
  score,
  setScore,
  timer,
  min,
  mistake,
  setMistake,
}) => {
  const [clicked, setClicked] = useState();
  const [flipped, setFlipped] = useState([]);
  const [hideImg1, setHideImg1] = useState("");
  const [hideImg2, setHideImg2] = useState("");
  const [showAll, setShowAll] = useState(true);
  const [time, setTime] = useState(5);
  let [loadingInProgress, setLoading] = useState(true);
  useEffect(() => {
    var timer;
    timer = setInterval(() => {
      setTime(time - 1);
      if (time === 0) {
        setTime(0);
      }
    }, 900);
    return () => clearInterval(timer);
  });
  useEffect(() => {
    setTimeout(() => {
      setShowAll(false);
      setLoading(false);
    }, 5000);
  }, []);
  const flipImg = (m) => {
    setClicked(m);
    flipped.push(m);
  };
  useEffect(() => {
    const img1 = flipped[flipped.length - 1];
    const img2 = flipped[flipped.length - 2];
    if (img1 && img2) {
      if (img1 === img2 + "0" || img1 + "0" === img2) {
        setScore(score + 50);
        setHideImg1(img1);
        setHideImg2(img2);
        setFlipped([]);
      } else {
        setMistake(mistake + 1);
        if (mistake == 15) {
          setLevel(12);
        }
      }
    }
    const interval = setTimeout(() => {
      setClicked();
      setFlipped([]);
    }, 3000);
    return () => clearTimeout(interval);
  }, [flipped, clicked]);
  useEffect(() => {
    if (score >= 990) setLevel(6);
    else setLevel(5);
  }, [score]);
  return (
    <>
      <div className="health ">
        <div
          className="user-health"
          style={{ width: mistake * 6.6666666 + "%" }}
        ></div>
      </div>
      <div className="d-flex justify-content-between m-5">
        <h1 className="level">
          Level <span style={{ color: "red" }}>5</span>
        </h1>{" "}
        <h1 className="score">
          Score <span style={{ color: "red" }}>{score}</span>
        </h1>
        <h1 className="timer">
          <span style={{ color: "red" }}>{min < 10 ? "0" + min : min}</span> :
          <span style={{ color: "red" }}>
            {" "}
            {timer < 10 ? "0" + timer : timer}
          </span>
        </h1>
      </div>
      <div className="d-flex align-items-center flex-column ">
        <div
          className="d-flex game-area"
          style={{ width: "320px", marginTop: 0 }}
        >
          <Pic
            src={showAll ? m12 : clicked == "m120" ? m12 : q}
            imgClick={loadingInProgress?()=>{}:() => flipImg("m120")}
            imgStyle={{
              visibility:
                hideImg1 === "m120" || hideImg2 === "m120" ? "hidden" : "s",
            }}
          />
          <Pic
            src={showAll ? m1 : clicked == "m1" ? m1 : q}
            imgClick={loadingInProgress?()=>{}:() => flipImg("m1")}
            imgStyle={{
              visibility:
                hideImg1 === "m1" || hideImg2 === "m1" ? "hidden" : "s",
            }}
          />
          <Pic
            src={showAll ? m2 : clicked == "m2" ? m2 : q}
            imgClick={loadingInProgress?()=>{}:() => flipImg("m2")}
            imgStyle={{
              visibility:
                hideImg1 === "m2" || hideImg2 === "m2" ? "hidden" : "s",
            }}
          />
          <Pic
            src={showAll ? m3 : clicked == "m3" ? m3 : q}
            imgClick={loadingInProgress?()=>{}:() => flipImg("m3")}
            imgStyle={{
              visibility:
                hideImg1 === "m3" || hideImg2 === "m3" ? "hidden" : "s",
            }}
          />
          <Pic
            src={showAll ? m1 : showAll ? m1 : clicked == "m10" ? m1 : q}
            imgClick={loadingInProgress?()=>{}:() => flipImg("m10")}
            imgStyle={{
              visibility:
                hideImg1 === "m10" || hideImg2 === "m10" ? "hidden" : "s",
            }}
          />
          <Pic
            src={showAll ? m4 : clicked == "m4" ? m4 : q}
            imgClick={loadingInProgress?()=>{}:() => flipImg("m4")}
            imgStyle={{
              visibility:
                hideImg1 === "m4" || hideImg2 === "m4" ? "hidden" : "s",
            }}
          />
          <Pic
            src={showAll ? m9 : clicked == "m9" ? m9 : q}
            imgClick={loadingInProgress?()=>{}:() => flipImg("m9")}
            imgStyle={{
              visibility:
                hideImg1 === "m9" || hideImg2 === "m9" ? "hidden" : "s",
            }}
          />
          <Pic
            src={showAll ? m10 : clicked == "m1000" ? m10 : q}
            imgClick={loadingInProgress?()=>{}:() => flipImg("m1000")}
            imgStyle={{
              visibility:
                hideImg1 === "m1000" || hideImg2 === "m1000" ? "hidden" : "s",
            }}
          />
          <Pic
            src={showAll ? m3 : clicked == "m30" ? m3 : q}
            imgClick={loadingInProgress?()=>{}:() => flipImg("m30")}
            imgStyle={{
              visibility:
                hideImg1 === "m30" || hideImg2 === "m30" ? "hidden" : "s",
            }}
          />
          <Pic
            src={showAll ? m5 : clicked == "m5" ? m5 : q}
            imgClick={loadingInProgress?()=>{}:() => flipImg("m5")}
            imgStyle={{
              visibility:
                hideImg1 === "m5" || hideImg2 === "m5" ? "hidden" : "s",
            }}
          />
          <Pic
            src={showAll ? m10 : clicked == "m100" ? m10 : q}
            imgClick={loadingInProgress?()=>{}:() => flipImg("m100")}
            imgStyle={{
              visibility:
                hideImg1 === "m100" || hideImg2 === "m100" ? "hidden" : "s",
            }}
          />
          <Pic
            src={showAll ? m5 : clicked == "m50" ? m5 : q}
            imgClick={loadingInProgress?()=>{}:() => flipImg("m50")}
            imgStyle={{
              visibility:
                hideImg1 === "m50" || hideImg2 === "m50" ? "hidden" : "s",
            }}
          />
          <Pic
            src={showAll ? m11 : clicked == "m11" ? m11 : q}
            imgClick={loadingInProgress?()=>{}:() => flipImg("m11")}
            imgStyle={{
              visibility:
                hideImg1 === "m11" || hideImg2 === "m11" ? "hidden" : "s",
            }}
          />
          <Pic
            src={showAll ? m9 : clicked == "m90" ? m9 : q}
            imgClick={loadingInProgress?()=>{}:() => flipImg("m90")}
            imgStyle={{
              visibility:
                hideImg1 === "m90" || hideImg2 === "m90" ? "hidden" : "s",
            }}
          />
          <Pic
            src={showAll ? m6 : clicked == "m6" ? m6 : q}
            imgClick={loadingInProgress?()=>{}:() => flipImg("m6")}
            imgStyle={{
              visibility:
                hideImg1 === "m6" || hideImg2 === "m6" ? "hidden" : "s",
            }}
          />
          <Pic
            src={showAll ? m7 : clicked == "m7" ? m7 : q}
            imgClick={loadingInProgress?()=>{}:() => flipImg("m7")}
            imgStyle={{
              visibility:
                hideImg1 === "m7" || hideImg2 === "m7" ? "hidden" : "s",
            }}
          />
          <Pic
            src={showAll ? m6 : clicked == "m60" ? m6 : q}
            imgClick={loadingInProgress?()=>{}:() => flipImg("m60")}
            imgStyle={{
              visibility:
                hideImg1 === "m60" || hideImg2 === "m60" ? "hidden" : "s",
            }}
          />

          <Pic
            src={showAll ? m4 : clicked == "m40" ? m4 : q}
            imgClick={loadingInProgress?()=>{}:() => flipImg("m40")}
            imgStyle={{
              visibility:
                hideImg1 === "m40" || hideImg2 === "m40" ? "hidden" : "s",
            }}
          />
          <Pic
            src={showAll ? m8 : clicked == "m8" ? m8 : q}
            imgClick={loadingInProgress?()=>{}:() => flipImg("m8")}
            imgStyle={{
              visibility:
                hideImg1 === "m8" || hideImg2 === "m8" ? "hidden" : "s",
            }}
          />
          <Pic
            src={showAll ? m12 : clicked == "m12" ? m12 : q}
            imgClick={loadingInProgress?()=>{}:() => flipImg("m12")}
            imgStyle={{
              visibility:
                hideImg1 === "m12" || hideImg2 === "m12" ? "hidden" : "s",
            }}
          />
          <Pic
            src={showAll ? m2 : clicked == "m20" ? m2 : q}
            imgClick={loadingInProgress?()=>{}:() => flipImg("m20")}
            imgStyle={{
              visibility:
                hideImg1 === "m20" || hideImg2 === "m20" ? "hidden" : "s",
            }}
          />
          <Pic
            src={showAll ? m11 : clicked == "m110" ? m11 : q}
            imgClick={loadingInProgress?()=>{}:() => flipImg("m110")}
            imgStyle={{
              visibility:
                hideImg1 === "m110" || hideImg2 === "m110" ? "hidden" : "s",
            }}
          />
          <Pic
            src={showAll ? m7 : clicked == "m70" ? m7 : q}
            imgClick={loadingInProgress?()=>{}:() => flipImg("m70")}
            imgStyle={{
              visibility:
                hideImg1 === "m70" || hideImg2 === "m70" ? "hidden" : "s",
            }}
          />
          <Pic
            src={showAll ? m8 : clicked == "m80" ? m8 : q}
            imgClick={loadingInProgress?()=>{}:() => flipImg("m80")}
            imgStyle={{
              visibility:
                hideImg1 === "m80" || hideImg2 === "m80" ? "hidden" : "s",
            }}
          />
        </div>
        {loadingInProgress ? (
          <div className="s-timer">
            <h1>{time}</h1>

            <ClipLoader
              className="spinner"
              color={"#fff"}
              loading={loadingInProgress}
              size={80}
            />
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Level5;
