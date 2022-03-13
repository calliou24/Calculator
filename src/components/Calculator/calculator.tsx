import { useState } from "react";
import styles from "./calculator.module.css";

function Calculator() {
  const [result, setResult] = useState("");
  const [inputValue, setInputValue] = useState("");

  const appendNumber = (elem: any) => {
    if (
      (operands.includes(elem) && inputValue === " ") ||
      (operands.includes(elem) && operands.includes(inputValue.slice(-1)))
    ) {
      return;
    }

    setInputValue(inputValue + elem);

    if (!operands.includes(elem)) {


      let resultVar = eval(inputValue + elem);

      if( resultVar != "Infinity"){
        setResult(resultVar.toString());
      }

      else { 
        setResult("")
        setInputValue('Cannot divide by zero')
      }

      
    }
  };
  
  const handdleResult = () => {
    setResult("");
    setInputValue(result);
  };

  const handdleReset = () => {
    setResult("");
    setInputValue("");
  };
  
  const handdleDelete = () => {
    setInputValue(inputValue.slice(0, -1));
    setResult(inputValue.slice(0, -1));
  };
  
  const operands = ["/", "+", "-", "*", "."];
  const numbers = [7,8,9,4,5,6,1,2,3,0]

  return (
    <div className={styles.calculator}>
      <>
        <div className={styles.result}>
          <div className={styles.resultCont}>
            <span className={styles.resultPreview}>({result || 0})</span>
            <span className={styles.input}>{inputValue}</span>
          </div>
          
        </div>
        <div className={styles.buttonsCont}>
            <button className={`${styles.delBtn} ${styles.btn}`} onClick={handdleDelete}>DEL</button>
            {numbers.map( elem => (
              <button className={styles.btn} onClick={()=> appendNumber(elem)} key={elem}>{elem}</button>
            ))}
            {operands.map((elem) => (
              <button className={`btn${elem} ${styles.btn}`} key={elem} onClick={() => appendNumber(elem)}>
                {elem}
              </button>
            ))}
            <button className={`${styles.resetBtn} ${styles.btn}`} onClick={handdleReset}>RESET</button>
            <button className={`${styles.equalBtn} ${styles.btn}`} onClick={handdleResult}> = </button>
        </div>
      </>
    </div>
  );
}

export default Calculator;
