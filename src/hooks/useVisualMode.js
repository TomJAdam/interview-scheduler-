import { useState } from "react";

//used to transition between modes
export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  //? is this necessary
  const [history, setHistory] = useState([initial]);

  const transition = (nextMode, replace = false) => {
    setMode(nextMode);
    replace
      ? history.splice(history.length - 1, 1, nextMode)
      : history.push(nextMode);
  };

  const back = () => {
    if (history.length > 1) {
      history.pop();
    }
    setMode(history[history.length - 1]);
  };

  return { mode, transition, back };
}
