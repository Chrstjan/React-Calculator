import { useReducer, useState } from "react";
import { calculateInitValue, calculateReducer } from "../../hooks/calculateReducer";
import { Button } from "../Button/Button"
import style from "./Calculator.module.scss";
import { Result } from "../Result/Result";

export const Calculator = () => {
    const [calculatedData, dispatch] = useReducer(calculateReducer, calculateInitValue);
    const [numOne, setNumOne] = useState(0);
    const [numTwo, setNumTwo] = useState(0);

    const handleOperation = () => {
        dispatch({type: "ADD", numOne: numOne, numTwo: numTwo});
    }

    return (
        <>
            <div className={style.inputContainer}>
                <label htmlFor="numOne">First Number</label>
                <input onChange={(e) => setNumOne(parseInt(e.target.value))} type="number" name="numOne"/>
                <label htmlFor="numTwo">Second Number</label>
                <input onChange={(e) => setNumTwo(parseInt(e.target.value))} type="number" name="numTwo"/>
            </div>
            <Button action={handleOperation} text="+"/>
            {calculatedData.numOne !== 0 ? <Result result={calculatedData}/> : null}
        </>
    )
}