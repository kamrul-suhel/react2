import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
    state = {
        person : [
            {name: "ian", age: 35},
            {name: "mike", age: 36},
            {name: "Hemm", age: 28},
            {name: "Kamrul", age: 33},
        ]
    }

    changeName = (params) => {
        this.setState({
            person : [
                {name: params, age: 35},
                {name: "mike", age: 36},
                {name: "Hemm", age: 28},
                {name: "Kamrul", age: 32},
            ]
        })
    }

    changedHendler = (event) => {
        this.setState({
            person : [
                {name: event.target.value, age: 35},
                {name: "mike", age: 36},
                {name: "Hemm", age: 28},
                {name: "Kamrul", age: 32},
            ]
        })
    }



    render() {
        const style = {
            backgroundColor: '#cdcdcd',
            cursor: 'pointer',
            border: '1ps solid #ddd',
            padding: '5px'
        }
        return (
            <div className="App">
                <h2>Reach Course: </h2>
                <button
                    style={style}
                    onClick={() => this.changeName('some params')}
                >Switch person</button>

                <Person
                    name={this.state.person[0].name}
                    age={this.state.person[0].age}
                >He is a fullstack developer</Person>

                <Person
                    name={this.state.person[1].name}
                    age={this.state.person[1].age}
                >He is a fullstack developer</Person>

                <Person
                    name={this.state.person[2].name}
                    age={this.state.person[2].age}
                    changed={this.changedHendler}
                    click={this.changeName.bind(this, 'max')}
                >He is a fullstack developer</Person>

                <Person
                    name={this.state.person[3].name}
                    age={this.state.person[3].age}
                >He is a fullstack developer</Person>

            </div>
        );
    }
}

export default App;
