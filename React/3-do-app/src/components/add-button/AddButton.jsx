import s from "./style.module.css";
import { useState } from "react";

export default function AddButton({ returnNewItem }) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [due, setDue] = useState("");
  const getBGColor = () => {
    return title === "" || due === "" ? "#6D2E46" : "#D5B9B2";
  };
  const handleClick = () => {
    if (title === "" || due === "") {
      setOpen(!open);
    } else {
      const newItem = {
        title: title,
        due: due,
      };
      setTitle("");
      setDue("");
      setOpen(false);
      returnNewItem(newItem);
    }
  };

  return (
    <div className={s.addButton}>
      <div onClick={handleClick} style={{ background: getBGColor() }}>
        Add +
      </div>
      {open && (
        <div>
          <input
            value={title}
            placeholder="title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            value={due}
            placeholder="due"
            onChange={(e) => setDue(e.target.value)}
          />
        </div>
      )}
    </div>
  );
}
