import React, {useState} from 'react';
import {Button, InputGroup, FormControl, Table} from "react-bootstrap";
import {getUserData} from "../api/api";

const Userdata = () => {
    const [id, setId] = useState()
    return (
        <div className="Form">
            <strong style={{color: "#80ff00"}}>Get user data by id: </strong>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"></InputGroup.Text>
                <FormControl
                    placeholder="id"
                    aria-label="id"
                    aria-describedby="basic-addon1"
                    onChange={e => setId(e.target.value)}
                />
            </InputGroup>
            <br/>
            <Button variant="success" onClick={() => getUserData(id)}>Send</Button>
            <br/>
            <span>____________________________________________________________________________</span>
            <br/>
        </div>
    );
};

export default Userdata;