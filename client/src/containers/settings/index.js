import React, { Component } from "react";

import { SettingsPage } from "../../components";

class Settings extends Component {
  state = {
    user: {
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      userName: "",
      country: "",
    },
  };

  render() {
    const user = JSON.parse(localStorage.getItem("User"));
    return <SettingsPage firstName={user.firstName} lastName={user.lastName} />;
  }
}

export default Settings;
