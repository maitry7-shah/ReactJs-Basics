import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Body />
      </div>
    );
  }
}



class Body extends Component {
  constructor(props){
    super(props);
    this.state={
      number:0
    };
    this.handleClick=this.handleClick.bind(this);
  }

handleClick(){
  console.log("maitriririd");
  this.setState({number:Math.floor(Math.random()*10)});
}

  render(){
    return(
      <div>
        <p>Hi</p>

        <Number myNumber={this.state.number}/>
        <button onClick={this.handleClick}>button</button>
      </div>
    );
  }
}

class Number extends Component {

  render(){
    return(
      <div>
          {this.props.myNumber}
      </div>
    );
  }
}

export default App;
