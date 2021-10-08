import React, {useEffect, useState} from 'react';
import {Button, FormControl, InputGroup} from "react-bootstrap";
import {userAvatar} from "../api/api";

const Avatar = () => {
    const [id, setId] = useState();

      return (
        <div className="Form">
            <strong style={{color: "#06f5c0"}}>Get user avatar by id: </strong>
            <br/>
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
            <Button variant="success" onClick={() => userAvatar(id)}>Send</Button>
            <br/>
            <span>____________________________________________________________________________</span>
            <br/>
        </div>
    );
};

export default Avatar;