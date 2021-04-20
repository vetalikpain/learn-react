import React, { Component } from "react";

export default class Counter extends Component {
  handleDecrement = () => {
    this.setState({value: this.state.value - 1})
  }

  render() {
    console.log(this.props)
    return (
      <div>
      <h4>Counter #{this.props.counter.id}</h4>
        <span style={{ fontSize: 50 }} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.handleDecrement()}
          className="btn btn-secondary btn-sm ml-3"
        >
          Decrement
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm ml-3"
        >
          Delete
        </button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-3 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}
