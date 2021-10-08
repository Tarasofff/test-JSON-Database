import React, {useState} from 'react';
import {Button, FormControl, InputGroup} from "react-bootstrap";
import {deleteById} from "../api/api";

const Delete = () => {
    const [id,setId] = useState()
    return (
        <div className="Form">
            <strong >Delete user by id: </strong>
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
            <Button variant="success" onClick={() => deleteById(id)}>Send</Button>
            <br/>
            <span>____________________________________________________________________________</span>
            <br/>
        </div>
    );
};

export default Delete;