import React, { Component } from "react";
import ProfileCard from "./ProfileCard";
class ProfilesPage extends Component {
  constructor() {
    super();
    this.state = {
      profiles: []
    };
  }

  componentDidMount() {
    fetch("https://randomuser.me/api?results=1000")
      .then(data => {
        return data.json();
      })
      .then(data => data.results)
      .then(data => this.setState({ profiles: data }));
  }

  render() {
    return this.state.profiles.map((profile, i) => {
      return (
        <div key={i}>
          <ProfileCard key={i} profile={profile} />
        </div>
      );
    });
  }
}

export default ProfilesPage;
