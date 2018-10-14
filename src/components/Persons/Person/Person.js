import React, { Component } from 'react'
import './Person.css'

class Person extends  Component {
    render() {
        return (
            <div className="Person">
                <h1 onClick={this.props.click}>Hi I am {this.props.name}. I am {this.props.age} years old</h1>
                <p>{this.props.children}</p>
                <input type="text"
                       onChange={this.props.changed}
                       value={this.props.name}/>
            </div>
        )
    }
}

export default Person;
