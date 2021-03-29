import { useState } from "react";
import styles from "./app.module.scss";

const INITIAL_RESULT_STATE = "0";

function App() {
    const [result, setResult] = useState(INITIAL_RESULT_STATE);

    const handleNumClick = (num) => {
        if (result === "0") {
            setResult(num);
        } else {
            setResult(result + num);
        }
    };

    const handleReset = () => setResult(INITIAL_RESULT_STATE);

    const handleDelete = () => {
      const newString =  result.slice(0, -1);
      if(newString === "") setResult(INITIAL_RESULT_STATE);
      else setResult(newString);
    }

    return (
        <div className={styles.container}>
            <div className={styles.calculator}>
                <div className={styles.result}>{result}</div>
                <div className={styles.buttons}>
                    <ul className={styles.row}>
                        <li className={styles.column} onClick={handleReset}>C</li>
                        <li className={styles.column} onClick={handleDelete}>Del</li>
                        <li className={styles.column}>%</li>
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
                        <li className={styles.column}>*</li>
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
                        <li className={styles.column}>-</li>
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
                        <li className={styles.column}>+</li>
                    </ul>
                    <ul className={styles.row}>
                        <li
                            className={styles.column}
                            style={{ flex: "2 0" }}
                            onClick={() => handleNumClick("0")}>
                            0
                        </li>
                        <li className={styles.column}>.</li>
                        <li className={styles.column}>=</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default App;
