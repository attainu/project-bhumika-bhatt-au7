import React, { Component } from "react";

import { DashboardPage } from "../../components";
import { Navbar } from "../../containers";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Navbar /> <DashboardPage />
      </div>
    );
  }
}

export default Dashboard;
