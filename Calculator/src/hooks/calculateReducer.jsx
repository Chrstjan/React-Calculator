export const calculateInitValue = {
    numOne: 0,
    numTwo: 0,
    operation: "",
    sum: 0
}

export const calculateReducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            //Laver en kopi af InitValue object og modificere det og returnere det nye modificeret object med de værdier der er sendt med 
            return {
                ...state,
                numOne: action.numOne,
                numTwo: action.numTwo,
                operation: "+",
                sum: action.numOne + action.numTwo
            }

        case "SUBTRACT":
            return {
                ...state,
                numOne: action.numOne,
                numTwo: action.numTwo,
                operation: "-",
                sum: action.numOne - action.numTwo
            };

        case "TIMES":
            return {
                ...state,
                numOne: action.numOne,
                numTwo: action.numTwo,
                operation: "*",
                sum: action.numOne * action.numTwo
            }

        case "DIVIDE":
            return {
                ...state,
                numOne: action.numOne,
                numTwo: action.numTwo,
                operation: "/",
                sum: action.numOne / action.numTwo
            }

        default:
            throw new Error(`Unknown Action: ${action.type}`)
    }
}