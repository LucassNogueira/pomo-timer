import React from "react";
import moment from "moment";
import {
  BreakSessionContainer,
  BreakSessionLabel,
  BreakSessionTime,
  ButtonContainer,
  Buttons,
} from "./ui/BreakSessionUi";

const Break = ({ breakLength, setBreakLength }) => {
  const decrementBreakLengthByOneMinute = () => {
    const newBreakLength = breakLength - 60;
    if (newBreakLength <= 60 * 60) {
      setBreakLength(newBreakLength);
    }
  };

  const incrementBreakLengthByOneMinute = () => {
    setBreakLength(breakLength + 60);
  };
  const breakLengthInMinutes = moment.duration(breakLength, "s").asMinutes();
  return (
    <BreakSessionContainer>
      <BreakSessionLabel id="break-label">Break</BreakSessionLabel>
      <BreakSessionTime id="break-length">
        {breakLengthInMinutes}
      </BreakSessionTime>
      <ButtonContainer>
        <Buttons id="break-decrement" onClick={decrementBreakLengthByOneMinute}>
          -
        </Buttons>{" "}
        <Buttons id="break-increment" onClick={incrementBreakLengthByOneMinute}>
          +
        </Buttons>
      </ButtonContainer>
    </BreakSessionContainer>
  );
};

export default Break;
