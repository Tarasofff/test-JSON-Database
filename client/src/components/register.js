import React, {useState, useEffect} from 'react';
import '../style/main.scss';
import {Button, InputGroup, FormControl, Table} from "react-bootstrap";
import {createUser} from "../api/api";

const Register = () => {
    const [FirstName, SetFirstName] = useState()
    const [LastName, SetLastName] = useState()
    const [Email, SetEmail] = useState()
    const [Username, setUsername] = useState()
    const [Password, setPassword] = useState()

    return (
        <div className="Form">
            <strong style={{color: "#f0f"}}>Registration: </strong>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"></InputGroup.Text>
                <FormControl
                    placeholder="FirstName"
                    aria-label="FirstName"
                    aria-describedby="basic-addon1"
                    onChange={e => SetFirstName(e.target.value)}
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"></InputGroup.Text>
                <FormControl
                    placeholder="SecondName"
                    aria-label="SecondName"
                    aria-describedby="basic-addon1"
                    onChange={e => SetLastName(e.target.value)}
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"></InputGroup.Text>
                <FormControl
                    placeholder="Email"
                    aria-label="Email"
                    aria-describedby="basic-addon1"
                    onChange={e => SetEmail(e.target.value)}
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"></InputGroup.Text>
                <FormControl
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    onChange={e => setUsername(e.target.value)}
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"></InputGroup.Text>
                <FormControl
                    placeholder="Password"
                    aria-label="Password"
                    aria-describedby="basic-addon1"
                    onChange={e => setPassword(e.target.value)}
                />
            </InputGroup>
            <br/>
            <Button variant="success" onClick={() => createUser(FirstName, LastName,Email, Username, Password)}>Send</Button>
            <br/>
            <span>____________________________________________________________________________</span>
        </div>
    );
};

export default Register;