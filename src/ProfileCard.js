import React from "react";
import ContactDetails from "./ContactDetails";
import ProfileIcon from "./ProfileIcon";
import "./ProfileCard.css";

const ProfileCard = props => {
  return (
    <div className="profile-card">
      <div id="left">
        <ProfileIcon imageUrl={props.profile.picture.medium} />
      </div>
      <div id="right">
        <ContactDetails profile={props.profile} />
      </div>
    </div>
  );
};

export default ProfileCard;
