import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person';

class App extends Component {

constructor(props)
{
  super(props);
  this.state = {
    objects: [
      {coin: "bitcoin",price:6500},
      {coin: "saicoin",price:1},
      {coin: "vechain",price:4},
      {coin: "nano",price:3}
    ]
  };

  this.setValue = this.setValue.bind(this);

}

setValue = (event) => {
  this.setState({
    a:event.target.value
  });
}
render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        <button type="button" onClick={this.setValue}>Set value</button>
        <input type="text" value={this.state.a} onChange={this.setValue}></input>
          <h1>{this.state.objects[0].coin} {this.state.objects[0].price}</h1>
          <h1>{this.state.objects[1].coin} {this.state.objects[1].price}</h1>
          <h1>{this.state.objects[2].coin} {this.state.objects[2].price}</h1>
          <h1>{this.state.objects[3].coin} {this.state.objects[3].price}</h1>
          <h1>{this.state.a}</h1>

        </p>
      </div>
    );
  }
}
export default App;