import React, { useEffect, useState } from "react";
import {
  loginAPI,
  registerUser,
} from "../../../services/authentication.service";
import {
  setUserData,
  removeUserData,
  setUserToken,
} from "../../../features/user";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

import {
  Form,
  Row,
  Container,
  Col,
  InputGroup,
  FormControl,
  Button,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import { Navigate } from "react-router";

const CreateNewPwd = (props) => {
  const [registrationdata, setRegistrationData] = useState({ role: "PATIENT" });
  const [cookies, setCookie, removeCookie] = useCookies([
    "JWTToken",
    "emailId",
  ]);
  const userInfo = useSelector((state) => state.user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // registrationdata.roles = [registrationdata.role];
    // registerUser(registrationdata).then(
    //   (response) => {
    //     console.log(response);
    //     if (response.status == 200) {
    //       alert(
    //         "Successfully registered!!! please view your email to confirm your account."
    //       );
    //       Navigate("/login");
    //     }
    //   },
    //   (error) => {
    //     alert("Error occurred!!! Please try again.");
    //     console.log(error);
    //   }
    // );
  };

  const handleChange = (e) => {
    const newdata = { ...registrationdata };
    newdata[e.target.id] = e.target.value;
    setRegistrationData(newdata);
  };

  return (
    <Container className="login">
      <Row className="justify-content-md-center login-header">
        <h2>Create New Password</h2>
      </Row>
      <Form onSubmit={handleSubmit}>
        <Row className="justify-content-md-center mb-3">
          <Col md="6">
            <InputGroup>
              <InputGroup.Text id="basic-addon1">Password</InputGroup.Text>
              <FormControl
                placeholder="Password"
                aria-label="Password"
                id="password"
                required
                value={registrationdata.password}
                onChange={handleChange}
                type="password"
              />
            </InputGroup>
          </Col>
        </Row>
        <Row className="justify-content-md-center mb-3">
          <Col md="6">
            <InputGroup>
              <InputGroup.Text id="basic-addon1">
                Re-Enter Password
              </InputGroup.Text>
              <FormControl
                placeholder="Password"
                aria-label="Password"
                id="password"
                required
                value={registrationdata.password}
                onChange={handleChange}
                type="password"
              />
            </InputGroup>
          </Col>
        </Row>

        <Row className="justify-content-md-center mb-3">
          <Col md="6">
            <Form.Group className="mb-3">
              <Button variant="primary" type="submit" className="submit-button">
                Submit
              </Button>
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};
export default CreateNewPwd;