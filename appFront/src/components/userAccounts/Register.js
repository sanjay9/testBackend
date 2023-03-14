import React from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import logo from "../media/bookepedia.gif";

function Register(props) {
  const [userRec, setUserRec] = React.useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });

  const onchange = (e) => {
    setUserRec({ ...userRec, [e.target.name]: e.target.value });
  };

  const SubmitRec = async (e) => {
    e.preventDefault();
console.log(userRec);
    await axios
      .post("https://verdant-churros-4a91af.netlify.app/register", userRec)
      .then((res) => {
        console.log("success");
        //navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <img alt="logo" src={logo} className="mx-auto d-block" />
      <Form onSubmit={SubmitRec}
        style={{ maxWidth: "450px", padding: "30px" }}
        className="mx-auto d-block border border-2"
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>First Name</Form.Label>
          <Form.Control onChange={onchange} value={userRec.fname}
          name="fname" type="text" placeholder="Enter First Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Last Name</Form.Label>
          <Form.Control onChange={onchange} value={userRec.lname}
          name="lname" type="text" placeholder="Enter Last Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onChange={onchange} value={userRec.email}
          name="email" type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onChange={onchange} value={userRec.password}
          name="password" type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Re-type Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </>
  );
}

export default Register;
