import { useState } from "react";
import data from "./data";

export default function Birth() {
  const [open, setOpen] = useState(data);
  const [show, setShow] = useState(false);

  return (
    <div className="birth">
      <h3>{open.length} peoole have Birthday Today</h3>
      {open.map((item) => {
        return (
          <div key={item.id} {...item}>
            <div>
              <h3>{item.name}</h3>
              <p>{item.age}</p>
            </div>
            <div></div>
          </div>
        );
      })}
      <div>
        <button onClick={() => setOpen([])}>Set</button>
        <button onClick={() => setOpen(data)}>show</button>
      </div>
    </div>
  );
}
