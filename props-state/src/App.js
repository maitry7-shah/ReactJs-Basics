import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      <h3>  {this.props.name}</h3>
        <Parent />
      </div>
    );
  }
}

App.propTypes = {
  name: PropTypes.string,
  age:PropTypes.number

};

App.defaultProps={
  name:"Mai3",
  age:25
}

class Parent extends Component{
  constructor(props){
    super(props);

    this.state = {
      cars:['bow','accord','merc','city']
    };
    this.handleClick=this.handleClick.bind(this);


  }

handleClick(){
  this.setState({cars:this.state.cars.reverse()});
}


  render(){
    return(
      <div>
        <h2 onClick={this.handleClick}>
          just some info

          <Cars msg="cars are cool" model="1234" coolCars={this.state.cars}/>
        </h2>
      </div>

    );
  }

}



Parent.defaultProps={

  cars:['bmw','accord','merc','city'],
  name:'Maitry',
  age:23

}

class Cars extends Component{
render(){
  console.log(this.props);
  return(
    <div>
      <h3>I am a car</h3>
      <p>{this.props.msg} </p>
  <div>{this.props.coolCars.map((item,i)=>{
      return <p key={i}> {item} </p>;
    })} </div>
    </div>

  );
}

}

export default App;
