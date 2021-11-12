import Fire from "../../components/GlobetFire";
import LetterEffect from "../../components/LetterEffect";
import "./style.css";
import { ReactComponent as Globet } from "../../assets/img/globet.svg";

const Start = ({ setShowWinner }) => {
  const title = "Start the Goblet of Fire to begin the Triwizard Tournament!";

  return (
    <div className="containerGlobet">
      <div className="title">
        <h1>
          <LetterEffect string={title} />
        </h1>
      </div>
      <div className="globet" onClick={() => setShowWinner(true)}>
        <Fire />
        <Globet className="globet" src={Globet} alt="Globet" />
      </div>
    </div>
  );
};
export default Start;
