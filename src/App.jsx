import Students from "./components/Students";
import Start from "./components/Start";
import "./App.css";

import { useState } from "react";

function App() {
  const [ShowWinner, setShowWinner] = useState(false);
  return (
    <div className="App">
      {ShowWinner ? (
        <Students setShowWinner={setShowWinner} />
      ) : (
        <Start setShowWinner={setShowWinner} />
      )}
    </div>
  );
}

export default App;
