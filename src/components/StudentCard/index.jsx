import "./style.css";
import { useState, useEffect } from "react";

const StudentCard = ({ student, style, index }) => {
  const [passClass, setPassClass] = useState("portraitContainer");
  const [showWinnerText, setshowWinnerText] = useState(false);

  useEffect(() => {
    index === 1 && setPassClass("portraitContainer winner");
    index === 1 && setshowWinnerText(true);
  }, [index]);

  const house = "House: " + student.house;
  const ancestry = "Ancestry: " + student.ancestry;

  return (
    <div className="studentCard">
      {showWinnerText && <div className="winnerText">Winner</div>}
      <div className={passClass} style={style}>
        <div className="frame"></div>
        <img src={student.image} alt="Student img" />
      </div>

      <div className="details" style={style}>
        <div className="name">
          {student.name.split("").map(function (char, index) {
            const style = { "animation-delay": 0.5 + index / 10 + "s" };
            return (
              <span key={index} style={style}>
                {char}
              </span>
            );
          })}
        </div>

        <div className="house">
          {house.split("").map(function (char, index) {
            const style = { "animation-delay": 0.5 + index / 10 + "s" };
            return (
              <span key={index} style={style}>
                {char}
              </span>
            );
          })}
        </div>
        <div className="ancestry">
          {ancestry.split("").map(function (char, index) {
            const style = { "animation-delay": 0.5 + index / 10 + "s" };
            return (
              <span key={index} style={style}>
                {char}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default StudentCard;
