import React, { Component } from 'react';

class Cockpit extends Component {
    render(){
        const style = {
            backgroundColor: '#cdcdcd',
            cursor: 'pointer',
            color: '#fff',
            fontSize: '1rem',
            border: '1ps solid #ddd',
            padding: '10px',
            outline:'none'
        }

        if(this.props.showPerson) {
            style.backgroundColor = 'red';
        }

        return (
            <div>
                <h2>React Course: </h2>
                <button
                    style={style}
                    onClick={this.props.togglePerson}
                >Switch person
                </button>
            </div>
        )
    }
}

export default Cockpit;
