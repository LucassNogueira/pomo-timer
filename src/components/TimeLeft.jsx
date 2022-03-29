import React, { useEffect } from "react";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";

momentDurationFormatSetup(moment);
function TimeLeft({
  SessionLength,
  breakLength,
  setTimeLeft,
  timeLeft,
  intervalId,
  setIntervalId,
  currentSessionType,
  setCurrentSessionType,
  audioElement,
  handleResetButtonClick,
}) {
  useEffect(() => {
    setTimeLeft(SessionLength);
  }, [SessionLength]);

  const formattedTimeLeft = moment
    .duration(timeLeft, "s")
    .format("mm:ss", { trim: false });
  const isStarted = intervalId !== null;

  const handleStartStopClick = () => {
    if (isStarted) {
      clearInterval(intervalId);
      setIntervalId(null);
    } else {
      const newIntervalId = setInterval(() => {
        setTimeLeft((prevTimeLeft) => {
          const newTimeLeft = prevTimeLeft - 1;
          if (newTimeLeft >= 0) {
            return newTimeLeft;
          }
          audioElement.current.play();
          if (currentSessionType === "Session") {
            setCurrentSessionType("Break");
            return breakLength;
          } else if (currentSessionType === "Break") {
            setCurrentSessionType("Session");
            return SessionLength;
          }
        });
      }, 1000);
      setIntervalId(newIntervalId);
    }
  };

  return (
    <div className="flex flex-col justify-around h-[300px] relative items-center col-span-1 w-1/6 text-center bg-white rounded-lg shadow divide-gray-200">
      <p className="text-5xl text-blue-500" id="timer-label">
        {currentSessionType}
      </p>
      <p className="text-4xl font-bold text-black " id="time-left">
        {formattedTimeLeft}
      </p>
      <button
        className="font-semibold bg-[#cbdbfa] rounded-md w-5/12 px-5"
        id="start_stop"
        onClick={handleStartStopClick}
      >
        {isStarted ? "Stop" : "Start"}
      </button>
      <button
        className="font-semibold bg-[#cbdbfa] rounded-md w-5/12 px-5"
        id="reset"
        onClick={handleResetButtonClick}
      >
        Reset
      </button>
    </div>
  );
}

export default TimeLeft;
