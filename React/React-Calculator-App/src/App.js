import "./App.css";
import { useState } from "react";

function App() {
  const [inputString, setInputString] = useState("0");
  const [canCalc, setCanCalc] = useState(false);

  function handleNumericPress(input) {
    setInputString(inputString + input);
  }

  function handleOperandPress(input) {
    if (canCalc) {
      handleCalc(inputString);
    } else {
      setInputString(inputString + input);
      setCanCalc(true);
    }
  }

  function handleCalc(input) {
    const operands = ["+", "-", "x", "/"];

    let operand = "+";

    operands.forEach((element) => {
      if (input.includes(element)) {
        operand = element;
      }
    });
    const operandIndex = input.indexOf(operand);

    const var1 = input.substring(0, operandIndex);
    const var2 = input.substring(operandIndex + 1);

    let output = 0;

    switch (operand) {
      case "+":
        output = parseInt(var1) + parseInt(var2);
        break;
      case "-":
        output = parseInt(var1) - parseInt(var2);
        break;
    }

    console.log(output); // output to console on web
    setInputString(output);
    setCanCalc(false);
  }

  return (
    <div className="ui">
      <div className="screen">{inputString}</div>

      <div className="keyPad">
        <div>
          <button
            onClick={() => {
              handleNumericPress("1");
            }}
          >
            1
          </button>
          <button
            onClick={() => {
              handleNumericPress("2");
            }}
          >
            2
          </button>
          <button
            onClick={() => {
              handleNumericPress("3");
            }}
          >
            3
          </button>
          <button
            onClick={() => {
              handleOperandPress("+");
            }}
          >
            +
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              handleNumericPress("4");
            }}
          >
            4
          </button>
          <button
            onClick={() => {
              handleNumericPress("5");
            }}
          >
            5
          </button>
          <button
            onClick={() => {
              handleNumericPress("6");
            }}
          >
            6
          </button>
          <button
            onClick={() => {
              handleOperandPress("-");
              setCanCalc(true);
            }}
          >
            -
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              handleNumericPress("7");
            }}
          >
            7
          </button>
          <button
            onClick={() => {
              handleNumericPress("8");
            }}
          >
            8
          </button>
          <button
            onClick={() => {
              handleNumericPress("9");
            }}
          >
            9
          </button>
          <button
            onClick={() => {
              handleOperandPress("x");
              setCanCalc(true);
            }}
          >
            x
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              handleOperandPress(".");
            }}
          >
            .
          </button>
          <button
            onClick={() => {
              handleNumericPress("0");
            }}
          >
            0
          </button>
          <button
            onClick={() => {
              handleOperandPress("/");
              setCanCalc(true);
            }}
          >
            /
          </button>
          <button>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
