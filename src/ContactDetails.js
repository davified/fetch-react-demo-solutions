import React from "react";

const ContactDetails = props => {
  return (
    <div>
      <h2>
        {props.profile.name.first} {props.profile.name.last}
      </h2>
      <p>{props.profile.location.street}</p>
      <p>{props.profile.email}</p>
      <p>{props.profile.cell}</p>
    </div>
  );
};

export default ContactDetails;
