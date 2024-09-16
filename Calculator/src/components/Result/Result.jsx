import style from "./Result.module.scss";

export const Result = ({result}) => {
    return (
        <>
            <div>
                <h2>Result:</h2>
                <span className={style.resultStyling}>
                    {result.numOne !== 0 ? <p>{result.numOne} {result.operation} {result.numTwo} = {result.sum}</p>: null}
                </span>
            </div>
        </>
    )
}