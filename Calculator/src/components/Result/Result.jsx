export const Result = ({result}) => {
    return (
        <>
            <div>
                <h2>Result:</h2>
                <p>{result.numOne} {result.operation} {result.numTwo} = {result.sum}</p>
            </div>
        </>
    )
}