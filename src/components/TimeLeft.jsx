import React, { useState, useEffect } from "react";
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
      }, 100);
      setIntervalId(newIntervalId);
    }
  };

  return (
    <div className="flex flex-col justify-evenly items-center w-64 h-64 bg-red-600 rounded-full">
      <p className="text-3xl" id="timer-label">
        {currentSessionType}
      </p>
      <p className="text-4xl" id="time-left">
        {formattedTimeLeft}
      </p>
      <button
        className="font-semibold bg-white rounded-md px-5"
        id="start_stop"
        onClick={handleStartStopClick}
      >
        {isStarted ? "Stop" : "Start"}
      </button>
      <button
        className="font-semibold bg-white rounded-md px-4"
        id="reset"
        onClick={handleResetButtonClick}
      >
        Reset
      </button>
    </div>
  );
}

export default TimeLeft;
