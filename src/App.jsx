import React, { useState } from "react";

export default function App() {
  const [amount, setAmount] = useState("");
  const [parts, setParts] = useState([]);     
  const [shown, setShown] = useState(0);      
  const [lastAmount, setLastAmount] = useState(null); 

  const splitNumber = (num) => {
    const values = [200, 100, 50, 20, 10, 5, 1];
    const result = [];
    let remaining = num;

    for (const v of values) {
      if (remaining >= v) {
        const count = Math.floor(remaining / v);
        result.push({ count, value: v });
        remaining %= v;
      }
    }
    return result;
  };

  const handleClick = () => {
    const num = parseInt(amount, 10);

    if (isNaN(num) || num <= 0) {
      setParts([]);
      setShown(0);
      setLastAmount(null);
      return;
    }

    
    if (parts.length === 0 || num !== lastAmount) {
      const calc = splitNumber(num);
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
    <div style={styles.container}>
   

      <div style={styles.inputBox}>
        <input
          type="number"
          value={amount}
          onChange={handleAmountChange}
          style={styles.input}
       
        />
        <button onClick={handleClick} style={styles.button} title="إظهار التالي">
          ✔
        </button>
      </div>

      <div style={styles.resultBox}>
        {shown === 0 ? (
          <p style={{ opacity: 0.6, margin: 0 }}></p>
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


const styles = {
  container: {
    border: "3px solid orangered",
    width: 320,
    margin: "50px auto",
    padding: 20,
    borderRadius: 12,
    textAlign: "center",
    background: "width",
    fontFamily: "Arial, sans-serif",
  },
  title: { marginBottom: 20, color: "orangered" },
  inputBox: { display: "flex", gap: 0, marginBottom: 20 },
  input: {
    flex: 1,
    padding: "10px",
    fontSize: 18,
    border: "2px solid orangered",
    borderRadius: "6px 0 0 6px",
    outline: "none",
  },
  button: {
    background: "orangered",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    fontSize: 18,
    cursor: "pointer",
    borderRadius: "0 6px 6px 0",
  },
  resultBox: {
    border: "2px solid orangered",
    padding: 15,
    textAlign: "left",
    minHeight: 110,
    borderRadius: 6,
    background: "#fff",
  },
};
