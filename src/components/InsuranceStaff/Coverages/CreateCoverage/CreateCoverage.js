import './CreateCoverage.css'
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
import React, { useEffect, useState } from "react";
import { createCoverage } from '../../../../services/InsuranceStaff.services';

function CreateCoverage(props) {

    const [coverageData, setCoverageData] = useState({});

    const [cookies, setCookie, removeCookie] = useCookies([
        "JWTToken",
        "emailId",
    ]);
    const userInfo = useSelector((state) => state.user);
    const [submit, setSubmit] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmit(!submit);
        const newData = {...coverageData}
        Object.keys(coverageData).forEach(key => {
            newData[key] = newData[key].trim();
        })
        setSubmit(true);
        createCoverage(newData).then(response => {
            alert("Successfully created a coverage!");
            props.onSubmitted(true);
            setSubmit(false);
        }, (error) => {
            alert("Error in creating record!")
            setSubmit(false);
        });
    };


    const handleChange = (e) => {
        const newdata = { ...coverageData };
        newdata[e.target.id] = e.target.value;
        setCoverageData(newdata);
    };

    return (
        <div className='create-coverage-parent'>
            <Row className="justify-content-md-center header">
                <h3>Create Coverage</h3>
                <p style={{color: 'blue'}}>Coverage name should be unique!</p>
            </Row>
            <Form onSubmit={handleSubmit}>
                <Row className="justify-content-md-center mb-3">
                        <InputGroup>
                            <InputGroup.Text id="basic-addon1">Coverage Name: </InputGroup.Text>
                            <FormControl
                                placeholder="Coverage Name"
                                aria-label="Coverage Name"
                                id="coverageName"
                                autoComplete="off"
                                value={coverageData.coverageName}
                                onChange={handleChange}
                                minLength="3"
                                required
                                type="text"
                            />
                        </InputGroup>
                </Row>
                <Row className="justify-content-md-center mb-3">
                        <InputGroup>
                            <InputGroup.Text id="basic-addon1">Description</InputGroup.Text>
                            <FormControl
                                placeholder="Coverage Description"
                                aria-label="Coverage Description"
                                id="description"
                                autoComplete="off"
                                minLength="3"
                                value={coverageData.description}
                                onChange={handleChange}
                                as="textarea"
                                type="text"
                            />
                        </InputGroup>
                </Row>
                <Row className="justify-content-md-center mb-3">
                        <Form.Group className="mb-3">
                            <Button variant="primary" disabled={submit} type="submit" className="submit-button">
                                Submit
                            </Button>
                        </Form.Group>
                </Row>
            </Form>
            
        </div>
    )
}

export default CreateCoverage;