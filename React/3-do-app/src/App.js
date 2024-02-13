import { useState } from "react";
import Widget from "./components/widget/Widget";
import AddButton from "./components/add-button/AddButton";
import s from "./style.module.css";

function App() {
  const [list, SetList] = useState([]);
  const addToList = (newItem) => {
    SetList((list) => [newItem, ...list]);
  };

  return (
    <div className={s.main}>
      <div className={s.content}>
        <AddButton returnNewItem={addToList} />
        <div>
          {list.map((widget) => {
            return <Widget title={widget.title} due={widget.due} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;

// ;
