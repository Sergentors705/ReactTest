import React from "react";
import "./style.css";

function ModalWindow({children, visible, setVisible}) {

  const rootclasses = ["modal"];
  if (visible) {
    rootclasses.push("active")
  }

  return (
    <div className={rootclasses.join(" ")}>
      <div className="modal__content">
        {children}
      </div>
    </div>
  )
}

export default ModalWindow;
