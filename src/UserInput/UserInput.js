import React from 'react';


const UserInput = (props) =>
{
    const inputStyle = {
        border: "2px solid green"
    }
    return <input type='text'
                  onChange = {props.changed}
                  value = {props.currentValue}
                  style = {inputStyle}/>
};



export default UserInput;