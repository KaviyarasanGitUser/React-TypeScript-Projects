import React from "react";
import NavBar from "../../components/navBar/NavBar";
import Form from "../../components/form/Form";
import { observer } from "mobx-react-lite";

const Register = observer(() => {
  return (
    <>
      <div className="nav-bar-container">
        <NavBar active={3} />
      </div>
      <Form />
    </>
  );
})

export default Register;
