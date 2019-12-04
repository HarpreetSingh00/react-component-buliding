import React, { Component } from 'react';
import Posts from './Posts/Posts';
import Form from './Form/Form';
import './App.css';

class App extends Component {
  render() {

    console.log(this.props.name);

    return (
      <div>
        <Posts />
        <Form />
      </div>
    );
  }
}

export default App;
