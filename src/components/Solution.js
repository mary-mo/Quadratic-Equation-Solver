import React, { Component } from 'react';

class Solution extends Component {
  render() {
    return (
      <div>
        <button
          type="submit"
          className="btn"
          onClick={this.props.handleSubmit}
        >
          Solve
        </button>
        <textarea
          className="solution"
          placeholder="The solution will appear here!"
          value={this.props.answer}
        />
        <button
          type="submit"
          className="btn"
          onClick={this.props.handleClear}
        >
          Clear
        </button>
      </div>
    )
  }
}

export default Solution;
