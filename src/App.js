import "./App.css";
import Break from "./components/Break";
import Session from "./components/Session";
import React, { useState } from "react";

function App() {
  const [SessionLength, setSessionLength] = useState(60 * 25);
  const [breakLength, setBreakLength] = useState(300);
  return (
    <div className="App">
      <Break breakLength={breakLength} setBreakLength={setBreakLength} />
      <Session
        setSessionLength={setSessionLength}
        SessionLength={SessionLength}
      />
    </div>
  );
}

export default App;
