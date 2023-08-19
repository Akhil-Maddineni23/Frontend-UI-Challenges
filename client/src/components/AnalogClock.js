import "../styles/analogclock.css";
import React, { useEffect , useState } from "react";

export const AnalogClock = () => {

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const hourDeg = (hours % 12) * 30 + minutes * 0.5;
  const minuteDeg = minutes * 6 + seconds * 0.1;
  const secondDeg = seconds * 6;

  const hourStyle = {
    transform: `rotate(${hourDeg}deg)`,
  };

  const minuteStyle = {
    transform: `rotate(${minuteDeg}deg)`,
  };

  const secondStyle = {
    transform: `rotate(${secondDeg}deg)`,
  };

  return (
    <div className="analog-clock">
      <div className="clock">
        <div className="hand hour" style={hourStyle}></div>
        <div className="hand minute" style={minuteStyle} ></div>
        <div className="hand second" style={secondStyle}></div>
        <div className="number number1">1</div>
        <div className="number number2">2</div>
        <div className="number number3">3</div>
        <div className="number number4">4</div>
        <div className="number number5">5</div>
        <div className="number number6">6</div>
        <div className="number number7">7</div>
        <div className="number number8">8</div>
        <div className="number number9">9</div>
        <div className="number number10">10</div>
        <div className="number number11">11</div>
        <div className="number number12">12</div>
      </div>
    </div>
  );
};
