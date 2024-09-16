export const calculateInitValue = {
    numOne: 0,
    numTwo: 0,
    operation: "",
    sum: 0
}

export const calculateReducer = (state, action) => {
    switch (action.type) {
        case "ADD":
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