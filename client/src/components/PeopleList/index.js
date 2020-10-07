import React from "react";
import "./style.css";

const PeopleList = (props) => {
  return (
    <div
      className="peopleList white"
      onClick={(e) => {
        console.log(document.getElementsByClassName("chatCont"));
        document.getElementsByClassName("chatCont")[0].className +=
          " chatActive";
      }}
    ></div>
  );
};

export default PeopleList;
