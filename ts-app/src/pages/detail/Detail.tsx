import React from "react";
import NavBar from "../../components/navBar/NavBar";
import Form from "../../components/form/Form";
import PersonDetail from "../../components/personDetail/PersonDetail";
import "./Detail.css";
import { observer } from "mobx-react-lite";

const Detail = observer(() => {
  return (
    <>
      <div className="nav-bar-container">
        <NavBar active={3} />
      </div>
      <div className="person-detail-container">
        <PersonDetail />
      </div>
    </>
  );
});

export default Detail;
