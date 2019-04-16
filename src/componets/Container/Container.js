import React, { Component } from "react";

import "./Container.css";
class Container extends Component {
  state = {
    answer: "",
    btnClick: []
  };
  // Evaluate the input
  handleClick = e => {
    const value = e.target.innerText;

    this.setState({
      btnClick: this.state.btnClick.concat(value)
    });

    console.log(this.state.btnClick.join(""));
    //handleChange(this.state.btnClick.join(""));
    const btnClick = this.state.btnClick;
  };

  evaluateClick = e => {
    console.log("helooooooooo");
    console.log("This is from evaluateClick funct " + e);
    const stringLength = e.join("").length;
    //Check for the string end and evaluate it
    if (
      e.join("")[stringLength - 1] === "+" ||
      e.join("")[stringLength - 1] === "-" ||
      e.join("")[stringLength - 1] === "*" ||
      e.join("")[stringLength - 1] === "/"
    ) {
      console.log(eval(e.join("").slice(0, stringLength - 2)));
    } else {
      console.log(eval(e.join("")));
      this.setState({
        answer: eval(e.join(""))
      });
    }
  };
  render() {
    console.log("Answer is: " + this.state.answer);
    // Handle input changes

    /*
    const handleChange = e => {
      const input = e.target.value;
      console.log("input value: ");
      //split the values
      const txt = "123-354";
      if (txt.search("-")) {
        console.log("text " + txt[txt.search("-")]);
      }

      //Check data Validity
      const sub = "-";
      const add = "+";
      const mult = "*";
      const div = "/";

      let fineInput = input.search(sub);
      if (fineInput) {
        const inputArray = input.split("-");
        console.log(inputArray[0]);
        console.log(inputArray[1]);

        //If value2 is found, set the state input1
        if (inputArray[0]) {
          this.setState({
            input1: inputArray[0]
          });
        }

        //If value2 is found, state the state of input2
        if (inputArray[1]) {
          this.setState({
            input2: inputArray[1]
          });
        }
      }
    }; */

    /* 
    const stringLength = this.state.btnClick.join("").length;
    //Check for the string end and evaluate it
    if (
      this.state.btnClick.join("")[stringLength - 1] === "+" ||
      this.state.btnClick.join("")[stringLength - 1] === "-" ||
      this.state.btnClick.join("")[stringLength - 1] === "*" ||
      this.state.btnClick.join("")[stringLength - 1] === "/"
    ) {
      console.log(
        eval(this.state.btnClick.join("").slice(0, stringLength - 2))
      );
    } else {
      console.log(eval(this.state.btnClick.join("")));
    }
    */

    //console.log(this.state.btnClick);
    //Calculate the value

    //console.log("answer: " + this.state.answer);
    return (
      <div className="container">
        <div className="calc ">
          <div className=" value">
            <input type="text" />
            <div className="answer">
              <p onChange={() => this.evaluateClick(this.state.btnClick)}>
                {this.state.btnClick}
              </p>
            </div>
          </div>

          <hr />
          <div className="keys grid-container">
            <div className="grid-item">
              <p onClick={this.handleClick}>AC</p>
            </div>
            <div className="grid-item">
              <p onClick={this.handleClick}>/</p>
            </div>
            <div className="grid-item">
              <p onClick={this.handleClick}>*</p>
            </div>
            <div className="grid-item">
              <p onClick={this.handleClick}>DEL</p>
            </div>
            <div className="grid-item">
              <p onClick={this.handleClick}>7</p>
            </div>
            <div className="grid-item">
              <p onClick={this.handleClick}>8</p>
            </div>
            <div className="grid-item">
              <p onClick={this.handleClick}>9</p>
            </div>
            <div className="grid-item">
              <p onClick={this.handleClick}>%</p>
            </div>
            <div className="grid-item">
              <p onClick={this.handleClick}>4</p>
            </div>
            <div className="grid-item">
              <p onClick={this.handleClick}>5</p>
            </div>

            <div className="grid-item">
              <p onClick={this.handleClick}>6</p>
            </div>
            <div className="grid-item">
              <p onClick={this.handleClick}>-</p>
            </div>
            <div className="grid-item">
              <p onClick={this.handleClick}>1</p>
            </div>
            <div className="grid-item">
              <p onClick={this.handleClick}>2</p>
            </div>
            <div className="grid-item">
              <p onClick={this.handleClick}>3</p>
            </div>
            <div className="grid-item">
              <p onClick={this.handleClick}>+</p>
            </div>
            <div className="grid-item">
              <p onClick={this.handleClick}>0</p>
            </div>
            <div className="grid-item">
              <p onClick={this.handleClick}>.</p>
            </div>
            <div className="grid-item">
              <p onClick={this.handleClick}>()</p>
            </div>
            <div className="grid-item">
              <p onClick={this.handleClick}>=</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Container;
