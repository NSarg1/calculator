import { useState } from "react";
import styles from "./app.module.scss";

const INITIAL_RESULT_STATE = "0";

function App() {
    const [result, setResult] = useState(INITIAL_RESULT_STATE);
    const [currentVal, setCurrentVal] = useState(INITIAL_RESULT_STATE);

    const [operatorState, setOperatorState] = useState("");

    const handleNumClick = (num) => {
        if (currentVal === "0" || operatorState) setCurrentVal(num);
        else setCurrentVal(currentVal + num);
        setOperatorState("");
    };

    const handleReset = () => {
        setCurrentVal(INITIAL_RESULT_STATE);
        setResult(INITIAL_RESULT_STATE);
        setOperatorState("");
    };

    const handleDelete = () => {
        const newString = currentVal.slice(0, -1);
        if (newString === "") setCurrentVal(INITIAL_RESULT_STATE);
        else setCurrentVal(newString);
    };

    const handleOperatorClick = (operator) => {
        setOperatorState(operator);
        if (operator === "+") {
            const num = Number(result) + Number(currentVal);
            setResult(num);
            setCurrentVal(`${num}`);
        }
    };

    const handleEqual = () => {
        // handleOperation(operatorState);
    };

    console.log(result);
    return (
        <div className={styles.container}>
            <div className={styles.calculator}>
                <div className={styles.result}>
                    <div>{operatorState}</div>
                    <div>{currentVal}</div>
                </div>
                <div className={styles.buttons}>
                    <ul className={styles.row}>
                        <li className={styles.column} onClick={handleReset}>
                            C
                        </li>
                        <li className={styles.column} onClick={handleDelete}>
                            Del
                        </li>
                        <li className={styles.column} onClick={() => handleOperatorClick("%")}>
                            %
                        </li>
                        <li className={styles.column}>/</li>
                    </ul>
                    <ul className={styles.row}>
                        <li className={styles.column} onClick={() => handleNumClick("7")}>
                            7
                        </li>
                        <li className={styles.column} onClick={() => handleNumClick("8")}>
                            8
                        </li>
                        <li className={styles.column} onClick={() => handleNumClick("9")}>
                            9
                        </li>
                        <li className={styles.column} onClick={() => handleOperatorClick("*")}>
                            *
                        </li>
                    </ul>
                    <ul className={styles.row}>
                        <li className={styles.column} onClick={() => handleNumClick("4")}>
                            4
                        </li>
                        <li className={styles.column} onClick={() => handleNumClick("5")}>
                            5
                        </li>
                        <li className={styles.column} onClick={() => handleNumClick("6")}>
                            6
                        </li>
                        <li className={styles.column} onClick={() => handleOperatorClick("-")}>
                            -
                        </li>
                    </ul>
                    <ul className={styles.row}>
                        <li className={styles.column} onClick={() => handleNumClick("1")}>
                            1
                        </li>
                        <li className={styles.column} onClick={() => handleNumClick("2")}>
                            2
                        </li>
                        <li className={styles.column} onClick={() => handleNumClick("3")}>
                            3
                        </li>
                        <li className={styles.column} onClick={() => handleOperatorClick("+")}>
                            +
                        </li>
                    </ul>
                    <ul className={styles.row}>
                        <li
                            className={styles.column}
                            style={{ flex: "2 0" }}
                            onClick={() => handleNumClick("0")}>
                            0
                        </li>
                        <li className={styles.column}>.</li>
                        <li className={styles.column} onClick={handleEqual}>
                            =
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default App;
