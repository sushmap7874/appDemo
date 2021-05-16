import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";

// import UserInput from './UserInput/UserInput';
// import UserOutput from './UserOutput/UserOutput';

class App extends Component {

  state = {

    person : [
      {name: "sneha", age:"21" },
      {name:"divya", age:"22" },
      {name:"saloni", age:"20" },
      {name:"roops", age:"21" }
    ], username:"Sahil", showPersons:false

  }

  switchNameHandler = () =>
  {
    // console.log("Button Clicked");
    this.setState({
      person : [
        {name: "samir", age:"29" },
        {name:"deepak", age:"28" },
        {name:"sakshi", age:"25" },
        {name:"rahul", age:"27" }
      ]
    })

  }

  nameChangeHandler = (event) =>
  {
    // console.log("Button Clicked");
    this.setState({
      person : [
        {name: "samir", age:"29" },
        {name:event.target.value, age:"28" },
        {name:"sakshi", age:"25" },
        {name:"rahul", age:"27" }
      ]
    })
  }

  changeToggle = () =>
  {
    this.setState({showPersons:!this.state.showPersons})
  }

  userNameHandler = (event) =>
  {
    this.setState({username:event.target.value})
  }

  render() {

    const btn = {
      backgroundColor : 'grey',
      font : 'inherit',
      border : '1px solid blue',
      padding : '8px',
      cursor : 'pointer',
      color: 'white'
    };

    let persons = null;

    if(this.state.showPersons)
    {
      persons = (<div>
          <Person name={this.state.person[0].name} age={this.state.person[0].age}/>
          <Person name={this.state.person[1].name} age={this.state.person[1].age} changed = {this.nameChangeHandler}> My hobbies are singing, painting and reading</Person>
          <Person name={this.state.person[2].name} age={this.state.person[2].age}/>
          <Person name={this.state.person[3].name} age={this.state.person[3].age}/>
       </div>)

    }

    return (
      <div className="App">
       <h1>Hi...I am react application AppDemo!!!!</h1>
       <button onClick={this.changeToggle} style = {btn}>Switch Name</button>
       
       {persons}

       {/* <UserInput changed = {this.userNameHandler} currentValue = {this.state.username}/>
       <UserOutput userName = "Saloni"/>
       <UserOutput userName = {this.state.username}/> */}
      </div>
    );
  }
}

export default App;
