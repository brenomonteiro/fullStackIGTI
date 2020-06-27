import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import InputFullSalary from './components/InputFullSalary';
import MathSalary from './components/MathSalary';

export default class App extends Component {
constructor(){
  super();
}
  
render() {
  //const { name } = this.state;

  return (
    <Fragment>
    
       <InputFullSalary/>
       
    </Fragment>
  );
}
}
