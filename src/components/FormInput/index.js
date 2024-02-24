import React from "react";
import GreenTick from "../../images/green-tick.png";
import "./index.css";

const FormInputBox = ({ title, type, verify, long, onChange }) => {
  const className = long ? "full" : "half";
  return (
    <div className={`input-box ${className}`}>
      <label>{title}</label>
      <input type={type} onChange={onChange} />
      {verify && <img src={GreenTick} alt="" />}
    </div>
  );
};

export default FormInputBox;
