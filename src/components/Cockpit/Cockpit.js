import React from 'react';

const Cockpit = (props) => {
    const style = {
        backgroundColor: '#cdcdcd',
        cursor: 'pointer',
        color: '#fff',
        fontSize: '1rem',
        border: '1ps solid #ddd',
        padding: '10px',
        outline:'none'
    }

    if(props.showPerson) {
        style.backgroundColor = 'red';
    }

    return (
        <div>
            <h2>React Course: </h2>
            <button
                style={style}
                onClick={props.togglePerson}
            >Switch person
            </button>
        </div>
    )
}

export default Cockpit;
