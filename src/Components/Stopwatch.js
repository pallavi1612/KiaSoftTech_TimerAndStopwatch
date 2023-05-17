import React, { useEffect, useRef } from "react";
import { useState } from "react";

export default function Timer() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  const timer = useRef();

  useEffect(() => {
    if (running) {
      timer.current = setInterval(() => {
        setTime((pre) => pre + 1);
      }, 1000);
    }

    return () => clearInterval(timer.current);
  }, [running]);

  const handleEvent = () => {
    setTime(0);
  };

  return (
    <div className="stopwatch">
      <div class="d-grid gap-2 col-6 mx-auto my-5">
        <button class="btn btn-primary bg-dark" type="button">
          Stopwatch
        </button>
      </div>
      <div className="box">
        <p className="timer">{format(time)}</p>
        <div className="actions">
          <button
            onClick={() => {
              if (running) clearInterval(timer.current);
              setRunning(!running);
            }}
          >
            Start
          </button>
          <button onClick={handleEvent}>Restart</button>
          <button
            onClick={() => {
              if (running) clearInterval(timer.current);
              setRunning(!running);
            }}
          >
            {!running ? "Resume" : "Stop"}
          </button>
        </div>
      </div>
    </div>
  );
}

const format = (time) => {
  let hours = Math.floor((time / 60 / 60) % 24);
  let minutes = Math.floor((time / 60) % 60);
  let seconds = Math.floor(time % 60);

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  return hours + ":" + minutes + ":" + seconds;
};
