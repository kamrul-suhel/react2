import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
    state = {
        persons: [
            {name: "ian", age: 35},
            {name: "mike", age: 36},
            {name: "Hemm", age: 28},
            {name: "Kamrul", age: 33},
        ],

        showPerson: false
    }

    changedHendler = (event) => {
        this.setState({
            persons: [
                {name: event.target.value, age: 35},
                {name: "mike", age: 36},
                {name: "Hemm", age: 28},
                {name: "Kamrul", age: 32},
            ]
        })
    }

    removePerson(personIndex){
        const persons = this.state.persons;
        persons.splice(personIndex, 1);
        this.setState({persons : persons});
    }

    togglePerson = () => {
        const doesShow = this.state.showPerson;
        this.setState({
            showPerson: !doesShow
        })
    }


    render() {
        const style = {
            backgroundColor: '#cdcdcd',
            cursor: 'pointer',
            border: '1ps solid #ddd',
            padding: '5px'
        }

        let person = null;

        if (this.state.showPerson) {
            person = (
                <div>
                    {
                        this.state.persons.map((person, index) => {
                            return (
                                <Person
                                name={person.name}
                                key={index}
                                age={person.age}
                                click={this.removePerson.bind(this, index)}
                                changed={this.changedHendler.bind(this)}/>
                            )
                        })
                    }
                </div>
            )
        }

        return (
            <div className="App">
                <h2>Reach Course: </h2>
                <button
                    style={style}
                    onClick={this.togglePerson}
                >Switch person
                </button>

                {person}
            </div>
        );
    }
}

export default App;
