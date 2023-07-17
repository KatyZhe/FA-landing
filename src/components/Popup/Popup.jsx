import React from "react";
import "./Popup.scss";

const Popup = ({ openPopup, hendleClosePopup, children }) => {
  return (
    <div
      className={`popup ${openPopup ? "popup_opened" : ""}`}
      // onClick={(e) => closePopup(e, hendleClosePopup)}
    >
      {children}
    </div>
  );
};

export default Popup;
