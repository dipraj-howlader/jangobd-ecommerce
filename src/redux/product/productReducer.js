import { BUY_PRODUCT } from "./productTypes";

const initialState = {
    numberOfProducts : 10,
    numberOf:100
}

const productReducer = (state = initialState, action) =>{
    switch(action.type){
        case BUY_PRODUCT : return {
            ...state,
            numberOfProducts : state.numberOfProducts -1,
            numberOf : state.numberOf +1
        }
        default : return state
    }
}

export default productReducer;