import Students from "./pages/Students";
import Start from "./pages/Start";
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
