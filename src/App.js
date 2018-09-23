import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
    state = {
        persons: [
            {id: 'asd', name: "ian", age: 35},
            {id: 'akjd',name: "mike", age: 36},
            {id: 'aasd',name: "Hemm", age: 28},
            {id: 'lakjow',name: "Kamrul", age: 33},
        ],

        showPerson: false
    }

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.index === id;
        })
        // ES6 sprade operator
        const person = {
            ...this.state.persons[personIndex]
        };
        // or es5 operator
        // const person = Object.assign({}, this.state.persons[personIndex]);

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({
            person: persons
        })
    }

    removePerson(personIndex){
        // const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
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
                                key={person.id}
                                age={person.age}
                                click={this.removePerson.bind(this, index)}
                                changed={(event) => this.nameChangedHandler(event, person.id)}/>
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
