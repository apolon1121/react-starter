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

  switchNameHandler = (newName) => {
   // console.log('it was clicked');
   this.setState({persons:[
    {name: newName, age: 128},
    {name: 'Nika', age: 127}
   ]});
  }

  nameChangeHanlder = (event) => {
    this.setState({persons:[
      {name: event.target.value, age: 128},
      {name: 'Nika', age: 127}
     ]});
  }

  render() {

    const style = {
      backgroundColor: 'red',
      color: 'white',
      border: '1 solid blue'
    }

    return (
      <div className="App">
        <h1>Hi, I`m a React App</h1>
        <p>This is really working!</p>
        <button style={style} onClick={this.switchNameHandler.bind(this, 'Zoro')}>Swicth Name</button>
        <Person changed={this.nameChangeHanlder} click={this.switchNameHandler} name={this.state.persons[0].name} age={this.state.persons[0].age}  />
        <Person name={this.state.persons[1].name}  age={this.state.persons[1].age} >My Hobbies</Person>
      </div>
    );
  }
}

export default App;
