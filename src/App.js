// @flow

import React, { Component } from 'react';
import type { AppState } from './flow-typed/def';

import Clock from './Components/Clock';
import TodoList from './Components/TodoList';

import './App.css';

class App extends Component <{}, AppState> {
  //Needed for some co/contravariance shitty flow output
  setErrorMsg: Function;
  
  constructor() {
    super();
    
    this.setErrorMsg = this.setErrorMsg.bind(this);
    
    this.state = {
      todos: [],
      loading: true,
      filter: '',
      errorMsg: '',
    };
  }
  
  //# Better in didMount because let Render one time
  //# and display loading during the data be fetched
  componentDidMount() {
    this.retrieveTodos();
  }
  
  //# Function to update the Error Msg from child components
  setErrorMsg(msg: string) {
    this.setState({errorMsg: msg})
  }
  
  // This function permits to retrieve the todos
  retrieveTodos() {
    
    //# Fetching data from the url to retrieve the todos
    fetch('https://api.myjson.com/bins/9l2ez')
      .then((response) => {
        return response.json();
      }).then((jsonData) => {
      
        //# Be sure that we get the todos and filter
        if (typeof jsonData === 'object' && typeof jsonData.filter === 'string' &&
          Array.isArray(jsonData.todos)) {
          this.setState({
            loading: false,
            todos: jsonData.todos,
            filter: jsonData.filter,
          });
        }
        
        //# This is not the good data
        else {
          console.log('The data retrieve is corrupted', jsonData);
          this.setState({
            loading: false,
            errorMsg: "Impossible d'obtenir les TODOS depuis l'api !"
          });
        }
        
      }).catch((err) => {
      //# If error happened during the fetch call
      console.log('Unable to retrieve the data in myjson.com', err);
      this.setState({
        loading: false,
        errorMsg: "Erreur lors de l'utilisation du fetch."
      })
    });
  }
;
  
  renderError () {
    return (
      <div className="app-error">
        <h4> Erreur : {this.state.errorMsg}</h4>
      </div>
    );
  }
  
   renderLoading () {
    return (
      <div className="app-loading">
        <h4> Loading ... </h4>
      </div>
    );
  }
  
  render() {
    
    const isError = !!this.state.errorMsg;
    const isLoading = this.state.loading;
    
    return (
      <div className="App">
        
        {/*CLOCK*/}
        <Clock interval={1000} />
        
        {isError ? this.renderError() : isLoading ? this.renderLoading() :
    
          <TodoList
            errorHandler={this.setErrorMsg}
            filter={this.state.filter}
            todos={this.state.todos}
          />
    
        }
        
      </div>
    );
  }
  
}

export default App;