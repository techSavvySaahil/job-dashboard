import React from "react";
import { ProfileFormInputs } from "../../helpers/constants";
import FormInputBox from "../FormInput";
import "./index.css";
import User from "../../images/user.png";

const Form = () => {
  return (
    <div className="form">
      <h2>Personal Information</h2>
      <div className="form-wrapper">
        <div className="form-input-wrapper">
          {ProfileFormInputs.map((item) => {
            const { title, type, verify, longText } = item;
            return (
              <FormInputBox
                title={title}
                type={type}
                verify={verify}
                long={longText}
                onChange={() => {}}
              />
            );
          })}
        </div>
        <div className="user-picture">
          <img src={User} alt="user" />
        </div>
      </div>
      <p>
        Use this email to log in to your <a>resumedone.io</a> account and
        receive notifications.
      </p>
      <button className="form-btn">Save</button>
    </div>
  );
};

export default Form;
