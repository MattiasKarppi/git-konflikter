import React, { useState } from "react";
import "./mini.css";

const Mini = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const calculate = (op) => {
    const n1 = parseFloat(num1) || 0;
    const n2 = parseFloat(num2) || 0;
    setResult(op === "+" ? n1 + n2 : op === "-" ? n1 - n2 : op === "*" ? n1 * n2 : n2 ? n1 / n2 : "Error");
  };

  return (
    <div className="calculator">
      <input type="number" placeholder="Siffra 1" onChange={(e) => setNum1(e.target.value)} />
      <input type="number" placeholder="Siffra 2" onChange={(e) => setNum2(e.target.value)} />
      <div>
        {["+", "-", "*", "/"].map((op) => (
          <button key={op} onClick={() => calculate(op)}>{op}</button>
        ))}
      </div>
      <div>Resultat: {result}</div>
    </div>
  );
};

export default Mini;
