import React from "react";
import "./style.css";
import Button from "../button/button";

function ModalWindow({children, visible, setVisible}) {

  const rootclasses = ["modal"];
  if (visible) {
    rootclasses.push("active")
  }

  return (
    <div
      className={rootclasses.join(" ")}
      onClick={() => setVisible(false)}
    >
      <div
        className="modal__content"
        onClick={(e) => e.stopPropagation()}
      >
        <Button
          type="button"
          onClick={() => setVisible(false)}
        >
          Close
        </Button>
        {children}
      </div>
    </div>
  )
}

export default ModalWindow;
