import React from 'react';
import logo from './logo.svg';
import './App.css';
import { cars } from './demo';
import CarItem from './CarItem';
import { render } from '@testing-library/react';
import axios from 'axios';
import { REPL_MODE_SLOPPY } from 'repl';

class App extends React.Component {
  state = {
    values: []
  }
  componentDidMount() {
    axios.get('http://localhost:5000/api/values')
    .then((response) => {
      this.setState({
        values: response.data
      })
    })
  }

  render() {
    return (
      <div className="App">
        <ul>
          {cars.map((car) => {
            return <CarItem car={car}/>;
          })}
        </ul>
      </div>
    );
  }
}

export default App;
