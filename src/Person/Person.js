import React, { Component } from 'react'

const person = (props) => {
    return (
        <div>
            <h1>Hi I am {props.name}. I am {props.age} years old</h1>
            <p>{props.children}</p>
        </div>
    )
}

export default person;
