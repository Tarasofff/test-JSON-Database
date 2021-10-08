import React, {useState} from 'react';
import {Button, FormControl, InputGroup} from "react-bootstrap";
import {upload} from "../api/api";

const Upload = () => {
    const [selectedFile, setSelectedFile] = useState();
    const [id, setId] = useState();

     const formData = new FormData();
     formData.append('image', selectedFile)
    return (
        <div className="Form">
            <strong style={{color: "#e80505"}}>Upload avatar by id: </strong>
            <input type="file" onChange={e => setSelectedFile(e.target.files[0])}/>
            <br/>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"></InputGroup.Text>
                <FormControl
                    placeholder="id"
                    aria-label="id"
                    aria-describedby="basic-addon1"
                    name="image"
                    onChange={e => setId(e.target.value)}
                />
            </InputGroup>
            <br/>
            <Button variant="success" onClick={() => upload(id, formData)}>Send</Button>
            <br/>
            <span>____________________________________________________________________________</span>
            <br/>
        </div>
    );
};

export default Upload;