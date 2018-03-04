import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Apolon', age: 28},
      {name: 'Nika', age: 27}
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>Hi, I`m a React App</h1>
        <p>This is really working!</p>
        <button>Swicth Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}  />
        <Person name={this.state.persons[1].name}  age={this.state.persons[1].age} >My Hobbies</Person>
      </div>
    );
  }
}

export default App;
