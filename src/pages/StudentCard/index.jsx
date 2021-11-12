import "./style.css";
import { useState, useEffect } from "react";
import LetterEffect from "../../components/LetterEffect";

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
          <LetterEffect string={student.name} />
        </div>
        <div className="house">
          <LetterEffect string={house} />
        </div>
        <div className="ancestry">
          <LetterEffect string={ancestry} />
        </div>
      </div>
    </div>
  );
};
export default StudentCard;
