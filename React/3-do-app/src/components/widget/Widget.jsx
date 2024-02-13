import s from "./style.module.css";
import { useState } from "react";

export default function Widget(props) {
  const [completed, setCompleted] = useState(false);
  const getBGColor = () => {
    return completed ? "#6D2E46" : "#D5B9B2";
  };
  const handleClick = () => {
    setCompleted(!completed);
  };
  return (
    <div
      className={s.widget}
      style={{ background: getBGColor() }}
      onClick={handleClick}
    >
      <div>To Do: {props.title}</div>
      <div>Due: {props.due}</div>
    </div>
  );
}
