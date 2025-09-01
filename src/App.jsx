import { useState } from "react";
import "./App.css";

function App() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [op, setOp] = useState("");
  const [output, setOutput] = useState("");
  const [currentInput, setCurrentInput] = useState("in1");

  const handleNumberClick = (value) => {
    if (currentInput === "in1") {
      setInput1(input1 + value);
    } else {
      setInput2(input2 + value);
    }
  };

  const calculate = () => {
    const a = parseFloat(input1) || 0;
    const b = parseFloat(input2) || 0;
    let result = 0;

    if (op === "+") result = a + b;
    if (op === "-") result = a - b;
    if (op === "*") result = a * b;
    if (op === "/") result = a / b;

    setOutput(result);
  };

  return (
    <div className="calculator-box">
      <div className="top-row">
        <input
          type="text"
          value={input1}
          onClick={() => setCurrentInput("in1")}
          readOnly
        />
        <input type="text" id="opBox" value={op} readOnly />
        <input
          type="text"
          value={input2}
          onClick={() => setCurrentInput("in2")}
          readOnly
        />
        <span className="equal-sign">=</span>
        <input type="text" value={output} readOnly />
      </div>

      <div className="grid">
        <div className="numbers">
          {["7","8","9","4","5","6","1","2","3","0",".","Ans"].map((n) => (
            <button
              key={n}
              onClick={() => {
                if (n === "Ans") {
                  handleNumberClick(output.toString());
                } else {
                  handleNumberClick(n);
                }
              }}
            >
              {n}
            </button>
          ))}
        </div>

        <div className="operators">
          {["+", "-", "*", "/"].map((o) => (
            <button key={o} onClick={() => setOp(o)}>
              {o}
            </button>
          ))}
          <button id="equal" onClick={calculate}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
