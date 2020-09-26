import React from "react";

const Dashboard = () => {
  return <h1>Hello {localStorage.getItem("firstName")}</h1>;
};

export default Dashboard;
