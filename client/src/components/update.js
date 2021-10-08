import React, {useState} from 'react';
import {Button, FormControl, InputGroup} from "react-bootstrap";
import {update} from "../api/api";

const Update = () => {
    const [id, setId] = useState()
    const [FirstName, SetFirstName] = useState()
    const [LastName, SetLastName] = useState()
    const [Email, SetEmail] = useState()

    return (
        <div className="Form">
            <strong style={{color: "#e54305"}}>Update fields: </strong>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"></InputGroup.Text>
                <FormControl
                    placeholder="Enter user id for update fields"
                    aria-label="Enter user id for update fields"
                    aria-describedby="basic-addon1"
                    onChange={e => setId(e.target.value)}
                />
            </InputGroup>
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
            <br/>
            <Button variant="success" onClick={() => update(id, FirstName, LastName,Email)}>Send</Button>
            <br/>
            <span>____________________________________________________________________________</span>
        </div>
    );
};

export default Update;