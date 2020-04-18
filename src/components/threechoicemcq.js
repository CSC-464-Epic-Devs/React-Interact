import React, { Component } from "react";

class Threechoicemcq extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qs: props.qs,
      op1: props.op1,
      op2: props.op2,
      op3: props.op3,
      desc: props.desc,
      f: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ f: true });
  }

  render() {
    if (!this.state.f) {
      return (
        <form style={{ paddingTop: "10px" }}>
          <p>{this.state.qs}</p>
          <div style={{ paddingLeft: "20px", marginTop: "-20px" }}>
            <label>
              <input type="radio" onClick={this.handleClick} value="option1" />
              {this.state.op1}
            </label>
            <br />
            <label>
              <input type="radio" onClick={this.handleClick} value="option2" />
              {this.state.op2}
            </label>
            <br />
            <label>
              <input type="radio" onClick={this.handleClick} value="option3" />
              {this.state.op3}
            </label>
            <br />
            <br />
          </div>
        </form>
      );
    }
    return (
      <form style={{ paddingTop: "10px" }}>
        <p>{this.state.qs}</p>
        <div style={{ paddingLeft: "20px", marginTop: "-20px" }}>
          <label>
            <input type="radio" disabled={true} value="option1" />
            {this.state.op1}
          </label>
          <br />
          <label>
            <input type="radio" disabled={true} value="option2" />
            {this.state.op2}
          </label>
          <br />
          <label>
            <input type="radio" disabled={true} value="option3" />
            {this.state.op3}
          </label>
          <br />
          <p>{this.state.desc}</p>
        </div>
      </form>
    );
  }
}

export default Threechoicemcq;
