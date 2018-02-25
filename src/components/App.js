import React, { Component } from 'react';
import Solution from './Solution';

const isNumber = (value) => {
  return value !== 0 && !isNaN(value);
};

class App extends Component {
  state = {
    a: '',
    b: '',
    c: '',
    answer: '',
  };

  handleInputChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    })
  };

  handleSubmit = e => {
    e.preventDefault();
    const a = +this.state.a;
    const b = +this.state.b;
    const c = +this.state.c;

    let x, x1, x2;
    const d = (Math.pow(b, 2) - 4 * a * c);

    if (!(isNumber(a) && isNumber(b) && isNumber(c))) {
      this.setState({
        answer: 'Something went wrong!',
      });
    } else {
      if (d > 0) {
        x1 = ((-b - Math.sqrt(d)) / (2 * a));
        x2 = ((-b + Math.sqrt(d)) / (2 * a));
        this.setState({ answer: `The equation has two roots! X1=${x1}, x2=${x2}`, })
      }
      if (d === 0) {
        x = (-b / (2 * a));
        this.setState({ answer: `Equation has one root! x=${x}`, })
      }
      else {
        this.setState({ answer: 'Equation does not have a solution!', })
      }
    }
  };

  handleClear = e => {
    e.preventDefault();

    this.setState({
      a: '',
      b: '',
      c: '',
      answer: ''
    })
  }

  render() {
    return (
      <div className="app">
        <form className="container" onSubmit={(e) => e.preventDefault()}>
          <h1>Quadratic Equation Solver</h1>
          <input
            className="abc-field"
            placeholder="a"
            value={this.state.a}
            onChange={this.handleInputChange}
            name="a"
          />
          <strong> X<sup>2</sup> &plusmn; </strong>
          <input
            className="abc-field"
            placeholder="b"
            value={this.state.b}
            onChange={this.handleInputChange}
            name="b"
          />
          <strong> X &plusmn; </strong>
          <input
            className="abc-field"
            placeholder="c"
            value={this.state.c}
            onChange={this.handleInputChange}
            name="c"
          />
          <strong> = 0 </strong>
          <Solution
            answer={this.state.answer}
            handleSubmit={this.handleSubmit}
            handleClear={this.handleClear}
          />
        </form>
      </div>
    );
  }
}

export default App;
