import React, {Component} from 'react';
import './App.css';
import Persons from "../components/Persons/Persons";
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
    state = {
        persons: [
            {id: 'lakjow',name: "Kamrul", age: 33},
            {id: 'asd', name: "ian", age: 35},
            {id: 'akjd',name: "mike", age: 36},
            {id: 'aasd',name: "Hemm", age: 28}
        ],

        showPerson: false
    }

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
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
            persons: persons
        })
    }

    removePerson = (personIndex) => {
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


        let person = null;

        if (this.state.showPerson) {
            person = (
                <div>
                    <Persons
                        persons={this.state.persons}
                        clicked={this.removePerson}
                        changed={this.nameChangedHandler}/>
                </div>
            )


        }

        return (
            <div className="App">
               <Cockpit
                togglePerson={this.togglePerson}
                showPerson={this.state.showPerson}/>

                {person}
            </div>
        );
    }
}

export default App;
