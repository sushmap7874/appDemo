import React from 'react';
import './UserOutput.css'


const UserOutput = (props) =>
{
    return <div className="UserOutput">
        <p>Assignment 1 of ReactJS Tutorial!</p>
        <p>Username is : {props.userName}</p>
    </div>
}

export default UserOutput;