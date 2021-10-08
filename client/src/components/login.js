import React, {useState} from 'react';
import {Button, InputGroup, FormControl, Table} from "react-bootstrap";
import {login} from "../api/api";

const Login = () => {
    const [username,setUsername] = useState()
    const [password,setPassword] = useState()

    return (
        <div className="Form">
            <br/>
            <strong style={{color: "#041ce5"}}>Login: </strong>
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
            <Button variant="success" onClick={() => login(username, password)}>Send</Button>
            <br/>
            <span>____________________________________________________________________________</span>
            <br/>
        </div>
    );
};

export default Login;