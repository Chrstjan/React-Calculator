import { useReducer, useState } from "react";
import { calculateInitValue, calculateReducer } from "../../hooks/calculateReducer";
import { Button } from "../Button/Button"
import { Result } from "../Result/Result";
import style from "./Calculator.module.scss";

export const Calculator = () => {
    const [calculatedData, dispatch] = useReducer(calculateReducer, calculateInitValue);
    const [numOne, setNumOne] = useState(0);
    const [numTwo, setNumTwo] = useState(0);

    const handleOperation = (operation) => {
        /*
        Burger et parameter der kommer fra button component til at styre hvilke type til switch case
        og numOne og numTwo states sendes med til reducer
        */
        dispatch({type: `${operation}`, numOne: numOne, numTwo: numTwo});
    }

    return (
        <>
            <Result result={calculatedData}/>
            <div className={style.inputContainer}>
                <label htmlFor="numOne">First Number</label>
                {/* bruger parseInt til at converte fra string til tal så Js kan udregne resultat og ikke sætter to string sammen til en*/}
                <input onChange={(e) => setNumOne(parseInt(e.target.value))} type="number" name="numOne"/>
                <label htmlFor="numTwo">Second Number</label>
                <input onChange={(e) => setNumTwo(parseInt(e.target.value))} type="number" name="numTwo"/>
            </div>
            <div className={style.buttonContainer}>
                <Button action={handleOperation} type="ADD" text="+"/>
                <Button action={handleOperation} type="SUBTRACT" text="-"/>
                <Button action={handleOperation} type="TIMES" text="*"/>
                <Button action={handleOperation} type="DIVIDE" text="/"/>
            </div>
        </>
    )
}