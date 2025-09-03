import React, { useState } from "react";
import "./MoneySplitter.css";
import { splitAmount } from "./MoneySplitter.utils";

function MoneySplitter() {
  const [amount, setAmount] = useState("");
  const [parts, setParts] = useState([]);
  const [shown, setShown] = useState(0);
  const [lastAmount, setLastAmount] = useState(null);

  const handleClick = () => {
    const num = parseInt(amount, 10);

    if (isNaN(num) || num <= 0) {
      setParts([]);
      setShown(0);
      setLastAmount(null);
      return;
    }

    if (parts.length === 0 || num !== lastAmount) {
      const calc = splitAmount(num);
      setParts(calc);
      setShown(calc.length > 0 ? 1 : 0);
      setLastAmount(num);
      return;
    }

    if (shown < parts.length) {
      setShown(shown + 1);
    }
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
    setParts([]);
    setShown(0);
    setLastAmount(null);
  };

  return (
    <div className="money-container">
      <div className="money-inputBox">
        <input
          type="number"
          value={amount}
          onChange={handleAmountChange}
          className="money-input"
          placeholder="أدخل المبلغ"
        />
        <button onClick={handleClick} className="money-button" title="إظهار التالي">
          ✔
        </button>
      </div>

      <div className="money-resultBox">
        {shown === 0 ? (
          <p className="money-placeholder"></p>
        ) : (
          parts.slice(0, shown).map((item, i) => (
            <div key={i}>
              {item.count} × {item.value}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default MoneySplitter;
