import React, {Component} from 'react';
import Navbar from '../containers/navbar';
import AstronomyContainer from './astronomycontainer';
import '../App.css';

export default class App extends Component {
  componentDidMount() {

  }
  render() {
    return (
      <div className="App">
        <Navbar/>
        <div className="container">
          <h1>NASA Photo of the Day</h1>
          <AstronomyContainer />
        </div>
      </div>
    );
  }
}
