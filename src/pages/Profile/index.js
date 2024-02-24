import React from "react";
import Banner from "../../components/Banner";
import "./index.css";
import { AccountBannerData } from "../../helpers/constants";
import Form from "../../components/Form";

const Profile = () => {
  const { title, image, summary } = AccountBannerData;
  return (
    <div className="wrapper">
      <Banner title={title} image={image} summary={summary} />
      <Form />
      <div className="profile-consent">
        <input
          type="checkbox"
          id="consent"
          name="profile consent"
          value="true"
        />
        <label for="profile consent">
          Show my profile to serious employers on <a href="">hirethesbest.io</a>{" "}
          for free
        </label>
      </div>
      <div className="profile-delete-wrapper">
        <h5>Delete account</h5>
        <p>
          If you delete your account you&apos;ll be permanently removing it from
          our systems - you can&apos;t undo it.
        </p>
        <button>Yes, Delete my account</button>
      </div>
      <p>
        <a href="">Get in touch with our support team</a> if you have any
        question or want to leave some feedback.
        <br />
        We&apos;ll be happy to hear from you.
      </p>
    </div>
  );
};

export default Profile;
