import React from "react";
import moment from "moment";
import {
  BreakSessionContainer,
  BreakSessionLabel,
  BreakSessionTime,
  ButtonContainer,
  Buttons,
} from "./ui/BreakSessionUi";

const Session = ({ SessionLength, setSessionLength }) => {
  const decrementSessionLengthByOneMinute = () => {
    const newSessionLength = SessionLength - 60;
    if (newSessionLength > 0) {
      setSessionLength(newSessionLength);
    }
  };

  const incrementSessionLengthByOneMinute = () => {
    const newSessionLength = SessionLength + 60;
    if (newSessionLength <= 60 * 60) {
      setSessionLength(SessionLength + 60);
    }
  };
  const SessionLengthInMinutes = moment
    .duration(SessionLength, "s")
    .asMinutes();
  return (
    <BreakSessionContainer>
      <BreakSessionLabel id="session-label">Session</BreakSessionLabel>
      <BreakSessionTime id="session-length">
        {SessionLengthInMinutes}
      </BreakSessionTime>
      <ButtonContainer>
        <Buttons
          id="session-decrement"
          onClick={decrementSessionLengthByOneMinute}
        >
          -
        </Buttons>{" "}
        <Buttons
          id="session-increment"
          onClick={incrementSessionLengthByOneMinute}
        >
          +
        </Buttons>
      </ButtonContainer>
    </BreakSessionContainer>
  );
};

export default Session;
