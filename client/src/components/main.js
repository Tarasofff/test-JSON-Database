import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';
import Register from "./register";
import Login from "./login";
import Userdata from "./userdata";
import Delete from "./delete";
import Upload from "./upload";
import Avatar from "./avatar";
import Update from "./update";

const Main = () => {
    return (
        <div className="MainStyle">
         <h1>Welcome!</h1>
            <Register/>
            <Login/>
            <Update/>
            <Userdata/>
            <Delete/>
            <Upload/>
            <Avatar/>
        </div>
    );
};

export default Main;