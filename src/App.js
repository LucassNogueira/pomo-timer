import "./index.css";
import Break from "./components/Break";
import Session from "./components/Session";
import React, { useState, useRef } from "react";
import TimeLeft from "./components/TimeLeft";

function App() {
  const audioElement = useRef(null);
  const [SessionLength, setSessionLength] = useState(60 * 25);
  const [breakLength, setBreakLength] = useState(300);
  const [intervalId, setIntervalId] = useState(null);
  const [timeLeft, setTimeLeft] = useState(SessionLength);
  const [currentSessionType, setCurrentSessionType] = useState("Session");
  const handleResetButtonClick = () => {
    audioElement.current.load();
    clearInterval(intervalId);
    setIntervalId(null);
    setCurrentSessionType("Session");
    setSessionLength(60 * 25);
    setBreakLength(60 * 5);
    setTimeLeft(60 * 25);
  };
  return (
    <div className="flex flex-col h-screen items-center justify-center bg-[wheat]">
      <div className="flex w-full justify-around">
        <Break breakLength={breakLength} setBreakLength={setBreakLength} />
        <TimeLeft
          handleResetButtonClick={handleResetButtonClick}
          audioElement={audioElement}
          setTimeLeft={setTimeLeft}
          setIntervalId={setIntervalId}
          intervalId={intervalId}
          setCurrentSessionType={setCurrentSessionType}
          currentSessionType={currentSessionType}
          timeLeft={timeLeft}
          SessionLength={SessionLength}
          breakLength={breakLength}
        />
        <Session
          setSessionLength={setSessionLength}
          SessionLength={SessionLength}
        />
      </div>

      <audio id="beep" ref={audioElement}>
        <source
          src="https://onlineclock.net/audio/options/default.mp3"
          type="audio/mpeg"
        />
      </audio>
    </div>
  );
}

export default App;
