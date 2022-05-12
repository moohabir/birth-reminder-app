import { useState } from "react";
import data from "./data";

export default function Birth() {
  const [open, setOpen] = useState(data);
  //const [show, setShow] = useState(false);

  return (
    <div className="items">
      <h3>{open.length} peoole have Birthday Today</h3>
      {open.map((item) => {
        return (
          <div key={item.id} {...item}>
            <div className="item-list">
              <img src={item.image} alt="" className="image" />
              <h3>{item.name}</h3>
              <span className="span">{item.age} years</span>
            </div>
            <div></div>
          </div>
        );
      })}
      <div>
        <button className="btn" onClick={() => setOpen([])}>
          Set
        </button>
        <button className="btn" onClick={() => setOpen(data)}>
          show
        </button>
      </div>
    </div>
  );
}
