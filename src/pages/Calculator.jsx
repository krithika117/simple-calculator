import React, {useState} from "react";

const Calculator = () => {
    const [input1,
        setInput1] = useState("");
    const [input2,
        setInput2] = useState("");
    const [result,
        setResult] = useState("");

    const handleOperation = (operation) => {
        if (input1 && input2) {
            let num1 = parseFloat(input1);
            let num2 = parseFloat(input2);
            let output;

            switch (operation) {
                case "+":
                    output = num1 + num2;
                    break;
                case "-":
                    output = num1 - num2;
                    break;
                case "x":
                    output = num1 * num2;
                    break;
                case "÷":
                    output = num1 / num2;
                    break;
                default:
                    break;
            }

            setResult(output.toString());
        }
    };

    const handleClear = () => {
        setInput1("");
        setInput2("");
        setResult("");
    };

    return (
        <div className="calculator-container">
            <h1>Calculator</h1>
            <div className="controls-container">
                <input
                    type="number"
                    value={input1}
                    onChange={(e) => setInput1(e.target.value)}
                    placeholder="Value 1"/>
            </div>
            <div className="controls-container">
                <input
                    type="number"
                    value={input2}
                    onChange={(e) => setInput2(e.target.value)}
                    placeholder="Value 2"/>
            </div>
            <div className="controls-container">
                <input
                    type="number"
                    value={result}
                    onChange={(e) => setInput2(e.target.value)}
                    placeholder="Result"
                    readOnly/>
            </div>
            <div className="controls-container">
                <button onClick={() => handleOperation("+")}>+</button>
                <button onClick={() => handleOperation("-")}>-</button>
                <button onClick={() => handleOperation("x")}>x</button>
                <button onClick={() => handleOperation("÷")}>÷</button>
                <button onClick={handleClear}>CLR</button>
            </div>
        </div>
    );
};

export default Calculator;